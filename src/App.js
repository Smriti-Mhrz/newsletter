
import "./App.scss";
import { Navbar, Footer } from "./components";
import { Landing, Business, PagenotFound } from "./pages";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/business" element={<Business />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
