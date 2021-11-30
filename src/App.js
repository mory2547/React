import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/movie/:id"
          element={<Detail />}
        />
        <Route basename={process.env.PUBLIC_URL} path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
