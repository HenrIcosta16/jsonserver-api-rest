// Faz a importação da biblioteca React, que é necessária para criar componentes React.
import React from "react";
// Faz a importação da biblioteca ReactDOM, usada para manipular o DOM e renderizar componentes React no navegador.
import ReactDOM from "react-dom";
// Faz a importação do componente principal "App" do arquivo local"./App.js".
import App from "./App";

//ReactDOM.render é utilizado para renderizar o componente "App" e inseri-lo no DOM da página HTML.  
ReactDOM.render(
//O componente "App" é envolvido por React.StrictMode, que ajuda a identificar problemas durante o desenvolvimento.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //Aqui a aplicação é linkada ao elemento HTML com o id "root", permitindo que o React manipule e exiba o conteúdo dessa área da página.
  document.getElementById("root")
);
