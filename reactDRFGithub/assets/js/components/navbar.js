import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to={`/fistbump/` }>
          <div className="navbar-brand"><strong>Fistbump</strong></div>
        </Link>
      </div>

      <ul className="nav navbar-nav navbar-right">
        <li className="active">
          <a className="navbar-brand" href="/accounts/logout">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
