import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details/:slug" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
