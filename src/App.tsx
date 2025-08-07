import "./App.css";
import { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
// import SocialMediaAds from "./pages/SocialMediaAds";

const SocialMediaAds = lazy(() => import("./pages/SocialMediaAds"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/ContactUs" element={<ContactUs />}></Route>
            <Route path="/SocialMediaAds" element={<SocialMediaAds />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>

      {/* <Header />
      <Body />
      <Footer /> */}
    </>
  );
}

export default App;
