import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const menuItems = [
    {
      id: "1",
      name: "Home",
      path: "/",
    },
    {
      id: "2",
      name: "Movies",
      path: "/movies",
    },
  ];
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
