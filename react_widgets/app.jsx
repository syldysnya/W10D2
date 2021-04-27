import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const hello = React.createElement('h1', null, ["hello"])

  ReactDOM.render(hello, root);
  console.log('hi')
});
