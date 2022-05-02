import Header from "./components/header/Header";
import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import ManageIteams from "./components/pages/manageIteams/ManageIteams";
import Details from "./components/details/Details";
import AddIteams from "./components/pages/addIteams/AddIteams";
import MyIteams from "./components/pages/myIteams/MyIteams";
import Registar from "./components/pages/registar/Registar";
import Login from "./components/pages/login/Login";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} className="home" />
          <Route path="/manage-iteams" element={<ManageIteams />} />
          <Route path="/:id" element={<Details />} />
          <Route
            path="/addIteams"
            element={<AddIteams />}
            className="add-iteams"
          />
          <Route path="/my-iteams" element={<MyIteams />} />
          <Route path="/registar" element={<Registar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
