import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* اللوجو على الشمال */}
        <div className={styles.logo}>
          <img
            src="/images/logo image.png"
            alt="brand logo"
            className={styles.logoImage}
            // style={{ width: "50px", height: "auto", maxWidth: "50px" }}
          />
          <img
            src="/images/logo word.png"
            alt="brand logo"
            className={styles.logoWord}
            // style={{ width: "250px", height: "auto" }}
          />
        </div>

        {/* النص في النص */}
        <div className={styles.center}>
          <p>© 2025 ALL RIGHTS RESERVED.</p>
        </div>

        {/* السوشيال على اليمين */}
        <div className={styles.social}>
          <div className={styles.socialLink}>
            <FaFacebook className={styles.icon} color="#365cc9" />
            <a
              className={styles.facebook}
              href="http://facebook.com/solmareperfumes"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <div className={styles.socialLink}>
            <FaInstagram className={styles.icon} color="#e3498e" />
            <a
              className={styles.instagram}
              href="http://instagram.com/solmare.perfumes"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={styles.socialLink}>
            <FaTiktok className={styles.icon} color="#E3E049" />
            <a
              className={styles.tiktok}
              href="http://tiktok.com/@solmareperfumes"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </div>
          <div className={styles.socialLink}>
            <IoLogoWhatsapp className={styles.icon} color="#78ef54ff" />
            <a
              className={styles.whatsapp}
              href="https://wa.me/201281971312"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
