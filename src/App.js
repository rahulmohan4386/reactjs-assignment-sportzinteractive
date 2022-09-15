import { Route, Routes, Navigate } from "react-router-dom";

import StoreProvider from "./context/StoreProvider";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "World Top Soccer Players";
  });
  return (
    <StoreProvider>
      <header className="custom--container header">
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
      <footer className="mt-50 bg--light-shade pt--30">
        <Footer />
      </footer>
    </StoreProvider>
  );
}

export default App;
