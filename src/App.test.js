import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./Components/Header";
import NewsListItem from "./Components/NewsListItem";
import Details from "./Pages/Details";
import Home from "./Pages/Home";


it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('new york')).toBeInTheDocument();
});