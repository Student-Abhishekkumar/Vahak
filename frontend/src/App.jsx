import React, { use } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import My_Loads from "./pages/My_Loads";
import My_Lorries from "./pages/My_Lorries";
import Marketplace from "./pages/Marketplace";
import Transport_Directory from "./pages/Transport_Directory";
import { Toaster } from "react-hot-toast";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/My_Loads" element={<My_Loads />} />
        <Route path="/My_Lorries" element={<My_Lorries />} />
        <Route path="/Marketplace" element={<Marketplace />} />
        <Route path="/Transport_Directory" element={<Transport_Directory />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
