import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import useDeviceDetect from "../../components/DeviceDetection";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const NavBar = (props) => {
  // const { isMobile } = useDeviceDetect();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        props.setStickyNav(true);
      } else {
        props.setStickyNav(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`${styles.navWrapper} ${
          props.stickyNav ? styles.stickyNavWrapper : ""
        }`}
      >
        <ul className={styles.mainNav}>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link href={`Resume-1.pdf`} target="_blank">
            Resume
          </Link>
        </ul>
      </div>
      {/* {isMobile && (
        <Menu outerContainerId={props.outerContainerId}>
          <a>hi</a>
        </Menu>
      )} */}
    </>
  );
};

export default NavBar;
