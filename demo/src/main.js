"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const client_1 = require("react-dom/client");
require("./index.css");
const App_tsx_1 = require("./App.tsx");
(0, client_1.createRoot)(document.getElementById('root')).render(React.createElement(react_1.StrictMode, null,
    React.createElement(App_tsx_1.default, null)));
