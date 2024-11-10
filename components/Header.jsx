import Title from "./Title";
import Navigation from "./Navigation";

function Header() {
  const navItems = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
  ];

  return (
    <>
      <Title title="Sartre's List" subtitle="Better-Dressed People" />
      <Navigation navItems={navItems} isNav={true} label="Main Navigation" />
    </>
  );
}

export default Header;
