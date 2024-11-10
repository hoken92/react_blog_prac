import Navigation from "./Navigation";
import CopyRight from "./CopyRight";

function Footer() {
  const author = "2013 Valet Industries,Inc";

  const navItems = [
    "Women's",
    "Men's",
    "On the Street",
    "The Catwalk",
    "AdWatch",
    "About",
    "Tips",
  ];

  return (
    <>
      <Navigation navItems={navItems} isNav={false} label="Footer Navigation" />
      <CopyRight id="copyright" publisher={author} />
    </>
  );
}

export default Footer;
