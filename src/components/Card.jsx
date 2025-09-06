import styles from "./Card.module.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useCart } from "../contexts/CartContext";

function Card({ item }) {
  const { addToCart } = useCart();
  const isSoldOut = item.soldOut === true || item.soldOut === "true";

  return (
    <div className={styles.card}>
      {/* صورة المنتج */}
      <div className={styles.imageContainer}>
        <img src={item.image} alt={item.productName} className={styles.image} />
        <span className={styles.discount}>-{item.discount}%</span>
      </div>

      {/* تفاصيل المنتج */}
      <div className={styles.content}>
        <h3 className={styles.title}>{item.productName}</h3>
        <p className={styles.description}>{item.description}</p>

        <div className={styles.prices}>
          <span className={styles.oldPrice}>
            {Math.ceil(item.basePrice)}.00 LE
          </span>
          <span className={styles.newPrice}>
            {Math.ceil(item.currentPrice)}.00 LE
          </span>
        </div>
      </div>
      <button
        className={`${styles.button} ${isSoldOut ? styles.soldOut : ""}`}
        disabled={isSoldOut}
      >
        {isSoldOut ? (
          ""
        ) : (
          <RiShoppingBag4Line fontSize={"25px"} color="#ffd700" />
        )}

        <p
          style={{ fontSize: "14px", color: "#ffd700", margin: "10px 5px" }}
          onClick={() => addToCart(item)}
        >
          {isSoldOut ? "Sold Out" : "Add to Cart"}
        </p>
      </button>
    </div>
  );
}

export default Card;
