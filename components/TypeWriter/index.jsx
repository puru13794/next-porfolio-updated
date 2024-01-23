import { useRef } from "react";
import Typewriter from "typewriter-effect";
import styles from "./index.module.scss";
import useDeviceDetect from "../DeviceDetection";

const TypeWriterEffect = (props) => {
  const nextSectionRef = props.timelineRef;
  const { isOpen, setOpen } = props;
  const { isMobile } = useDeviceDetect();
  const handleClick = () => {
    props.setSlideShow(true);
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div id="home" className={styles.mainWrapper}>
        <p className={styles.mainHead}>HI THERE! I'M PURUSHOTTAM REDDY</p>
        <br />
        <Typewriter
          options={{ delay: 10, wrapperClassName: `${styles.typewriteClass}` }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                isMobile ? "Passionate FullStack Developer dedicated to crafting exceptional online experiences and helping businesses realize their MVP goals. Skilled in both front-end and back-end development, I aim to create functional, visually appealing websites that align with each client's unique vision.  Let's collaborate to turn your ideas into digital success!" : "Passionate FullStack Developer dedicated to crafting exceptional online experiences and \n helping businesses realize their MVP goals. Skilled in both front-end and back-end \n development, I aim to create functional, visually appealing websites that align with each \n client's unique vision.  Let's collaborate to turn your ideas into digital success!" 
              )
              // .pauseFor(200)
              .start();
          }}
        />
        {!props.stickyNav && (
          <button className={styles.scrollButton} onClick={handleClick}>
            <b>Explore</b>
            <br />
            <span className={styles.downarrow}></span>
          </button>
        )}
      </div>
    </>
  );
};

export default TypeWriterEffect;
