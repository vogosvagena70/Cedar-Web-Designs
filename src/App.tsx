import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  );
}

export default App;
