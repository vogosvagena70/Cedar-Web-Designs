import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="Cedar-Web-Designs" element={<Home></Home>}></Route>
          <Route
            path="Cedar-Web-Designs/ContactUs"
            element={<ContactUs />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  );
}

export default App;
