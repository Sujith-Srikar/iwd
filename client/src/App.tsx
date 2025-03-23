import { Routes, Route } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
        <h1>Welcome to mern-init-cli Package</h1>
        <p>A simple CLI tool to set up a MERN stack project effortlessly.</p>
      </div>
          }
        />
      </Routes>
  );
};

export default App;
