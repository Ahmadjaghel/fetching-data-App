// import './App.css';
import { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import UsersPage from "./component/UsersPage";
import UserPage from "./component/UserPage";
import EditPage from "./component/EditPage";
import AddUser from "./component/AddUser";
import NotFound from "./component/NotFound";

const Homepage = () => (
  <div style={{ marginTop: "40px" }}>
    <h1>Welcome to fardos</h1>
  </div>
);
const Aboutpage = () => (
  <div style={{ marginTop: "40px" }}>
    <h1>fardos has a lot of bad boys</h1>
  </div>
);
// const NotFound = () => (
//   <div style={{ marginTop: "40px" }}>
//     <h1>404,Not Found</h1>
//   </div>
// );
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          {"  "}
          <Link to="/about">About</Link>
          {"  "}
          <Link to="/users">Users</Link>
          {"  "}
          <Link to="/user/create">Creat Users</Link>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/about" Component={Aboutpage} />
            <Route path="/users" Component={UsersPage} />
            <Route path="/user/create" Component={AddUser} />
            <Route path="/user/:id" Component={UserPage} />
            <Route path="/user/edit/:id" Component={EditPage} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
