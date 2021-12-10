import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Details from "./Pages/Details";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/article/:id" element={<Details />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
