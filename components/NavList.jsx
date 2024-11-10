import NavListItems from "./NavListItems";

function NavList({ navItems, isNav, label }) {
  return (
    <>
      <ul className="list" aria-label={label} role="navigation">
        {navItems.map((item, i) => {
          return (
            <NavListItems key={i} isNav={isNav}>
              {item}
            </NavListItems>
          );
        })}
      </ul>
    </>
  );
}

export default NavList;
