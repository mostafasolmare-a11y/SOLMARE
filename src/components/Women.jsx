import styles from "./Women.module.css";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";

function Men() {
  const URL =
    "https://api.sheety.co/f40e83c8b5e18303131dd886f89e7b16/solmareWomen/women";
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);

  /*
  let url = 'https://api.sheety.co/f40e83c8b5e18303131dd886f89e7b16/solmareWomen/women';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.women);
});
  */
  useEffect(() => {
    async function fetchMen() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setProducts(data.women);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchMen();
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      slider.scrollLeft += e.deltaY * 0.2; // الرقم 0.3 ده بيتحكم في السرعة
    };
    slider.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      slider.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="women" className={styles.section}>
      <div className={styles.description}>
        <p className={styles.descTitle}>Women Products</p>
        <p className={styles.descText}>
          Experience elegant and captivating scents that embody grace, charm,
          and individuality. Our women’s collection is made to inspire
          confidence and highlight your unique style.
        </p>
      </div>

      {/*  جزئية عرض المنتجات على بعضها  */}
      <div className={styles.slider}>
        {/*  الكارت  */}
        {products.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>

      <p className={styles.bigTitle}>
        For <br></br>her
      </p>
    </section>
  );
}

export default Men;
