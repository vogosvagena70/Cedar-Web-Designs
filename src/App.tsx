import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import SocialMediaAds from "./pages/SocialMediaAds";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/ContactUs" element={<ContactUs />}></Route>
          <Route path="/SocialMediaAds" element={<SocialMediaAds />}></Route>
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
