import { useRouter } from "next/router";
import styles from "../styles/components/SideNav.module.scss";

const SideNav = ({ showNav, setShowNav }) => {
  const router = useRouter();

  return (
    <nav
      className={styles.container}
      style={
        showNav
          ? {
              right: "0px",
            }
          : {
              right: "-250px",
            }
      }
    >
      <ul>
        <li
          onClick={() => {
            router.push("/");
            setShowNav(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            router.push("/about-us");
            setShowNav(false);
          }}
        >
          {" "}
          About us
        </li>
        <li
          onClick={() => {
            router.push("/contact-us");
            setShowNav(false);
          }}
        >
          Contact us
        </li>
        <button
          onClick={() => {
            router.push("/login");
            setShowNav(false);
          }}
        >
          Login
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
