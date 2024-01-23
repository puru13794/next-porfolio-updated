import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import useDeviceDetect from "../DeviceDetection";
import Hamburger from "hamburger-react";

const NavBar = (props) => {
  const { isOpen, setOpen } = props;
  const { isMobile } = useDeviceDetect();
  // console.log('isMobile', isMobile)
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
        {isMobile ? (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div
              className={`${styles.hambergerNav} ${
                isOpen ? `${styles.hambergerNavActive}` : ""
              }`}
            >
              <div className={styles.listWrapper}>
                <ul>
                  <li>
                    <a href="./">HOME</a>
                  </li>
                  <li>
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                  <li>
                    <a href={`Resume-1.pdf`} target="_blank">
                      RESUME
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <ul className={styles.mainNav}>
            <a href="./">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link href={`Resume-1.pdf`} target="_blank">
              Resume
            </Link>
          </ul>
        )}
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
