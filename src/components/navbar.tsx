import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                <div className="navbar-header" data-logobg="skin6">
                    <span className="navbar-brand" >
                        <span className="logo-text text-dark"><h1>M</h1></span>
                    </span>
                </div>

                <div
                    className="navbar-collapse collapse"
                    id="navbarSupportedContent"
                    data-navbarbg="skin5"
                >

                    <ul className="navbar-nav me-auto mt-md-0">

                        <li className="nav-item hidden-sm-down">

                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <Link to={'/user'} className="nav-link dropdown-toggle waves-effect waves-dark"> Markarn Doe
                            </Link>
                            <ul
                                className="dropdown-menu show"
                                aria-labelledby="navbarDropdown"
                            ></ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;