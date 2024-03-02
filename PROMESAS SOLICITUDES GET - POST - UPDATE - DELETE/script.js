const URL = "https://jsonplaceholder.typicode.com/posts";

solicitudGET();
solicitudPOST_INSERT();
solicitudPUT_UPDATE();
solicitudDELETE();

async function solicitudGET() {
  try {
    const respuestaServer = await fetch(URL);
    if (!respuestaServer.ok)
      throw new Error("Algo fue mal con la solicitud de datos al servidor");
    const dataServer = await respuestaServer.json();
    displayRequest("solicitud GET_READ", dataServer);
  } catch (err) {
    alert(err.message);
  }
}

async function solicitudPOST_INSERT() {
  try {
    const settings = {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const respuestaServer = await fetch(URL, settings);
    if (!respuestaServer.ok)
      throw new Error("Algo fue mal con la solicitud de datos al servidor");
    const dataServer = await respuestaServer.json();
    displayRequest("solicitud POST_INSERT", dataServer);
  } catch (err) {
    alert(err.message);
  }
}

async function solicitudPUT_UPDATE() {
  try {
    const settings = {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const respuestaServer = await fetch(URL + "/1", settings);
    if (!respuestaServer.ok)
      throw new Error("Algo fue mal con la solicitud de datos al servidor");
    const dataServer = await respuestaServer.json();
    displayRequest("solicitud PUT_UPDATE", dataServer);
  } catch (err) {
    alert(err.message);
  }
}

async function solicitudDELETE() {
  try {
    const settings = {
      method: "DELETE",
    };
    const respuestaServer = await fetch(URL + "/1", settings);
    if (!respuestaServer.ok)
      throw new Error("Algo fue mal con la solicitud de datos al servidor");
    const dataServer = await respuestaServer.json();
    displayRequest("solicitud DELETE", dataServer);
  } catch (err) {
    alert(err.message);
  }
}

function displayRequest(solicitud, data) {
  console.log(solicitud, "realizada correctamente");
  console.log(data);
}
