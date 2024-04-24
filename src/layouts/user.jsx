import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

export default function User() {
  // handle sign menu position - by adding [down] class:
  const menuId = useRef();
  function dropMenu() {
    menuId.current.classList.toggle("down");
  }

  return (
    <div className="user">
      <FaRegUserCircle
        className="fa-regular fa-circle-user"
        onClick={dropMenu}
        title="Sign Up/In"
      />
      <ul className="drop-menu" ref={menuId}>
        <li>
          <NavLink to="sign">
            <IoIosLogIn />
            <span>sign up</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="login">
            <FaRegUser />
            <span>log in</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
