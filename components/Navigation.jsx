import NavList from "./NavList";

function Navigation({ navItems, isNav, label }) {
  return (
    <>
      <NavList navItems={navItems} isNav={isNav} label={label} />
    </>
  );
}

export default Navigation;
