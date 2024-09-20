// Faz a importação da biblioteca React, que é necessária para criar componentes React.
import React from "react";
// Faz a importação da biblioteca ReactDOM, usada para manipular o DOM e renderizar componentes React no navegador.
import ReactDOM from "react-dom";
// Faz a importação do componente principal "App" do arquivo local"./App.js".
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
