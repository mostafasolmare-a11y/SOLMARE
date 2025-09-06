import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.content}>
        <p className={styles.bigTitle}>About</p>
        <p className={styles.paragraph}>
          At Solmare, we believe fragrance is more than just a scent. it’s a
          signature. We specialize in creating high-quality inspired perfumes
          that capture the essence of luxury at an affordable price. Our
          carefully crafted blends are designed to reflect elegance,
          individuality, and timeless style.
        </p>
        <p className={styles.paragraph}>
          Whether you’re looking for a classic favorite or something unique,
          <br></br>Our <span style={{ fontWeight: "600" }}>Vision</span> is to
          bring you unique scents that enhance your style and leave a lasting
          impression.<br></br>
          and our <span style={{ fontWeight: "600" }}>Mission</span> is to make
          every spray an unforgettable experience.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="images/about2.jpg" alt="logo img" className={styles.image} />
      </div>
    </section>
  );
}

export default About;
