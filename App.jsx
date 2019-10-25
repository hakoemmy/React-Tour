import React from 'react';
import ReactDOM from 'react-dom';

const PersonEl = document.querySelector('#person');

const App = (props) => {
    return (
         <div style= {{
            'display': 'inline-block',
            'margin': '10px',
            'border': '1px solid #eee',
            'box-shadow': '0 2px 2px #ccc',
            'padding': '20px',
            'width': '200px'
            }}>
           <h1>{props.name}</h1>
           <p>{props.age}</p>
         </div>
        );
       };

       let personContainer = (
           <div>
        <App name="Emmanuel" age="24 years old" />
        <App name="Victor" age="22 years old" />
          </div>
       );

const renderApp = () => {
    ReactDOM.render(
        personContainer, PersonEl
    );
}
renderApp();

// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}