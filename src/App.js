import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Landing } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index element={<Landing />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
