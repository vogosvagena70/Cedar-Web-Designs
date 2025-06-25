import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="The-Mine-Field" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  );
}

export default App;
