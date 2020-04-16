import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FacebookLogin from "react-facebook-login";

function Header() {
  const initialState = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };
  const [state, setState] = useState(initialState);
  const responseFacebook = (response) => {
    setState({
      ...state,
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
    });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/welcome" className="navbar-brand">
          Revista Semana - Leer Noticia (Test1)
        </NavLink>
        <FacebookLogin
          appId="388263108786387"
          fields="name,email,picture"
          callback={responseFacebook}
        />
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              to="/notice1"
              className="nav-link"
              activeclassname="active"
            >
              Noticia 1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/notice2"
              className="nav-link"
              activeclassname="active"
            >
              Noticia 2
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <p className="text-secondary my-2 my-sm-0">Bienvenido {state.name}</p>
        </form>
      </div>
    </nav>
  );
}
export default Header;
