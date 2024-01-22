import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import useDeviceDetect from "../../components/DeviceDetection";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";

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
      <div id="home"
        className={`${styles.navWrapper} ${
          props.stickyNav ? styles.stickyNavWrapper : ""
        }`}
      >
        <div className={styles.imageSection}>
          <Image
            src="/profile.png"
            alt="profile_img"
            width={40}
            height={40}
            // fill={true}
            className={styles.mainImage}
          />
          <p className={styles.name}>Purushottam Reddy</p>
        </div>
        <ul className={styles.mainNav}>
          <a href="https://puru-porfolio.vercel.app/">Home</a>
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
