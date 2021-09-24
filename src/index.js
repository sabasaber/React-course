import React from 'react';
import ReactDOM from 'react-dom';



const App = () => {
    return React.createElement("h1",
    {id:"FirstH1"},
    "Hello World!"
    );
};
 


ReactDOM.render(<App/>,document.getElementById("root"));