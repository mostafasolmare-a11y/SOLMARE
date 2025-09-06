import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
