import Link from "next/link";
import NavLinks from "./items/NavLinks";
import MenuIcon from "./items/MenuIcon";

async function Header() {

  return (
    <header>
      <div className="container">
        <p className="brand-hand">
          <Link href="/">
            Your Name
          </Link>
        </p>
        <nav>
          <NavLinks />
        </nav>
        <div className="header-end">
        <MenuIcon/>
        </div>
      </div>
    </header>
  );
}

export default Header;
