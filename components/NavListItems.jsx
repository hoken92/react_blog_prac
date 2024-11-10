function NavListItems({ children, isNav }) {
  if (isNav) {
    return (
      <li className="nav-items">
        <a href="#">{children}</a>
      </li>
    );
  } else {
    return (
      <li className="footer-items">
        <a href="#">{children}</a>
      </li>
    );
  }
}

export default NavListItems;
