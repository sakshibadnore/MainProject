import React from "react";

function Side() {
  const openNav = () => {
    document.getElementById("mySidenav");
  };

  const closeNav = () => {
    document.getElementById("mySidenav");
  };
  return (
    <nav className="nav">
      <div id="mySidenav" className="sidenav" >
        <a href="javascript:void(0)" className="closebtn" onclick={closeNav()} >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <span className="t1" onclick={() => openNav()}>
        &#9776; DashBoard
      </span>

      <div className="dropdown">
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          Profile
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">LogOut</a>
          </li>
          <li>
            <a href="#">MyProfile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Side;
