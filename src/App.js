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
import Requireauth from "./components/requireAuth/RequireAuth";
import Notfound from "./components/notFound/NotFound";
import Blogs from "./components/pages/blogs/Blogs";
function App() {
  return (
    <div className="app">
      <Header className="header" />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} className="home" />
          <Route
            path="/manage-iteams"
            element={
              <Requireauth>
                <ManageIteams />
              </Requireauth>
            }
          />
          <Route path="details/:id" element={<Details />} />
          <Route
            path="/addIteams"
            element={
              <Requireauth>
                <AddIteams />
              </Requireauth>
            }
            className="add-iteams"
          />
          <Route
            path="/my-iteams"
            element={
              <Requireauth>
                <MyIteams />
              </Requireauth>
            }
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/registar" element={<Registar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
