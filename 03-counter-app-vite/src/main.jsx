import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from "./FirstApp.jsx";
import {HellowWord} from "./HellowWord.jsx";


ReactDOM.createRoot(document.getElementById('root'))
    .render(<React.StrictMode>
        <FirstApp />
        <HellowWord />
    </React.StrictMode>);