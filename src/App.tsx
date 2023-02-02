import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/Join";
import "./App.css";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
