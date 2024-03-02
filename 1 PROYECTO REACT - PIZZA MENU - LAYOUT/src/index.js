import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//Idea de Lego
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "upperCase" };
  return (
    <header className="header">
      <h1>Pizzeria Torre del Mar</h1>
    </header>
  );
}

function Menu() {
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Nuestro menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Eiusmod incididunt occaecat elit incididunt irure incididunt. Mollit
            culpa ipsum in sit deserunt eiusmod pariatur anim exercitation
            veniam enim. Cupidatat velit aliquip nostrud dolor cupidatat non
            pariatur veniam magna officia dolor non. Lorem cillum sit labore
            culpa enim deserunt consectetur eu in veniam. Esse id est
            adipisicing ea ut consequat cupidatat qui. Cillum dolore do
            consequat laborum culpa eiusmod dolor veniam incididunt ea non ut
            aute dolor. Lorem elit culpa duis enim aute eiusmod enim proident.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza objetoPizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Estamos todavía elaborando nuestro menú.</p>
      )}
    </main>
  );
}

function Pizza({ objetoPizza }) {
  // if (objetoPizza.soldOut) return null;
  return (
    <li className={`pizza ${objetoPizza.soldOut ? "sold-out" : ""}`}>
      <img src={objetoPizza.photoName} alt={objetoPizza.name} />
      <div>
        <h2>{objetoPizza.name}</h2>
        <p>{objetoPizza.ingredients}</p>
        <p>{objetoPizza.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 7;
  const closeHour = 22;
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(isOpen);
  //return React.createElement("footer", null, "We're currently open!");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p> Estamos todavía cerrados</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        Estamos actualmente abiertos desde {openHour} hasta la hora de cierre:{" "}
        {closeHour}
        :00
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
