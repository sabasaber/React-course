import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement("h1",
{id:"FirstH1"},
"Hello World!"
);

ReactDOM.render(element,document.getElementById("root"));