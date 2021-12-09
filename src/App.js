import logo from "./logo.svg";
import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import NewsListItem from "./Components/NewsListItem";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/article/:id" element={<NewsListItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
