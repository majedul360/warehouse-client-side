import Header from "./components/header/Header";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import ManageIteams from "./components/pages/manageIteams/ManageIteams";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} className="home" />
          <Route path="/manage-iteams" element={<ManageIteams />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
