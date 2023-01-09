import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "jotai";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider>
    <App />
  </Provider>
);
