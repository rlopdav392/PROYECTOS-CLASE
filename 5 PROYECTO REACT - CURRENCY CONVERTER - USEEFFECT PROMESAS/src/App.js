import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("EUR");
  const [toCurr, setToCurr] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function convert() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurr}&to=${toCurr}`
          );
          if (!res.ok)
            throw new Error(
              "Algo fue mal con la solicitud de datos al servidor"
            );
          const data = await res.json();
          console.log(data);
          if (data.message === "not found")
            throw new Error("conversión no encontrada");

          //console.log(data.rates[toCurr]);
          setConverted(data.rates[toCurr]);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (fromCurr === toCurr) return setConverted(amount);
      convert();
    },
    [amount, fromCurr, toCurr]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurr}
        onChange={(e) => setFromCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurr}
        onChange={(e) => setToCurr(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <p>
          {converted}
          {toCurr}
        </p>
      )}
    </div>
  );
}

function ErrorMessage({ message }) {
  return (
    <p>
      <span>⛔</span>
      {message}
    </p>
  );
}
export default App;
