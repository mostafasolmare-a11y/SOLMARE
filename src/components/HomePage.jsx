import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./About";
import Men from "./Men";
import Women from "./Women";
import ContactUs from "./ContactUs";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    }
  }, [location]);

  return (
    <div>
      <About></About>
      <Men></Men>
      <Women></Women>
      <ContactUs></ContactUs>
    </div>
  );
}

export default HomePage;
