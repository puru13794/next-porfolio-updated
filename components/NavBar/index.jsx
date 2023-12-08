import styles from "./index.module.scss";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.navWrapper}>
      <ul className={styles.mainNav}>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Link href={`Resume-1.pdf`} target="_blank">
          Resume
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
