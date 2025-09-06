import styles from "./Cart.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeItem } = useCart(
    []
  );
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const totalCart = cartItems.reduce((acc, item) => {
    return acc + item.currentPrice * item.quantity;
  }, 0);

  function handleProceed() {
    if (cartItems.length === 0) return;
    if (!customer.name || !customer.address || !customer.phone) {
      setErrorMessage("Fill all fields before proceed");
      return;
    }

    const itemsMessage = cartItems
      .map(
        (item) =>
          `• ${item.productName} x ${item.quantity} = ${
            item.currentPrice * item.quantity
          } LE`
      )
      .join("\n");

    const message = `Hi SOLMARE Customer Service \n My Order Details:\n${itemsMessage}\n Order Cost: ${totalCart} LE \n
    Customer Info: \n Name: ${customer.name} \n Address: ${customer.address} \n Phone: ${customer.phone} \n
    What about total cost & delivery date ?`;

    const phoneNumber = "201281971312";
    // افتح الواتساب
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Empty Cart !</p>
      ) : (
        <div className={styles.cartWrapper}>
          {/* العمود الشمال: المنتجات */}
          <div className={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.productName}
                  className={styles.image}
                />

                <div className={styles.details}>
                  <h3>{item.productName}</h3>
                  <div className={styles.quantity}>
                    <p>Quantity:</p>
                    <div className={styles.quantityControl}>
                      <button
                        className={
                          item.quantity === 1 ? styles.disabledBtn : ""
                        }
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.id)}
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>

                  <div className={styles.price}>
                    <p>Price:</p>
                    <p>
                      {Math.ceil(item.currentPrice * item.quantity)}.
                      <span style={{ fontSize: "12px" }}>00</span> LE
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* العمود اليمين: الإجمالى */}
          <div className={styles.summary}>
            <h3>
              Order Price: {Math.ceil(totalCart)}.
              <span style={{ fontSize: "14px" }}>00</span> LE
            </h3>

            <p className={styles.note}>
              Total Price doesn't include delivery cost.
              <br />
              Proceed your order to get final price and delivery date.
            </p>

            <div className={styles.customerForm}>
              <input
                type="text"
                placeholder="Your Name"
                value={customer.name}
                onChange={(e) =>
                  setCustomer({ ...customer, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Your Address"
                value={customer.address}
                onChange={(e) =>
                  setCustomer({ ...customer, address: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={customer.phone}
                onChange={(e) =>
                  setCustomer({ ...customer, phone: e.target.value })
                }
              />
            </div>

            {errorMessage && <p className={styles.fillNote}>{errorMessage}</p>}

            <button
              className={styles.checkoutBtn}
              onClick={() => handleProceed()}
            >
              Press to Proceed
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
