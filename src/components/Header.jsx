import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useCart } from "../contexts/CartContext";
import { HashLink } from "react-router-hash-link";

function Header() {
  const { cartItems } = useCart();
  

  return (
    <header className={styles.header}>
      <Link to="/">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "5px",
            padding: "5px",
          }}
        >
          <img
            src="/images/logo word.png"
            alt="brand logo"
            style={{ width: "200px", height: "auto" }}
          />
          <p className={styles.word}>Perfumes</p>
        </div>
      </Link>

      <nav className={styles.nav}>
        <HashLink smooth to={"/#about"}>
          ABOUT
        </HashLink>
        <HashLink smooth to={"/#men"}>
          FOR HIM
        </HashLink>
        <HashLink smooth to={"/#women"}>
          FOR HER
        </HashLink>
        <HashLink smooth to={"/#footer"}>
          CONTACT US
        </HashLink>
        <Link to="/cart" className={styles.cartIcon}>
          <RiShoppingBag4Line fontSize={"30px"} color="#ffd700" />
          {cartItems.length > 0 && (
            <span className={styles.badge}>{cartItems.length}</span>
          )}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
