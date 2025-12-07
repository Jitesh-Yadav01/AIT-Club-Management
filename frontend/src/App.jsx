import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./sections/Footer/Footer";
import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./Routes/PublicRoutes.jsx";
import { protectedRoutes } from "./Routes/ProtectedRoutes.jsx";

export default function App() {
  const routing = useRoutes([...publicRoutes, ...protectedRoutes]);

  return (
    <div className="app">
      <Navbar />
      <div className="site-container">
        <main className="main">{routing}</main>
      </div>
      <Footer />
    </div>
  );
}
