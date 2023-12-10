import { useRef } from "react";
import Typewriter from "typewriter-effect";
import styles from "./index.module.scss";

const TypeWriterEffect = (props) => {
  const nextSectionRef = props.timelineRef;
  const handleClick = () => {
    // props.setSlideShow(true);
    // nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="about" className={styles.mainWrapper}>
      <p className={styles.main}>
        Hi there! 👋 I'm Purushottam Reddy,
        {/* Hi👋 &nbsp; i'm Purushottam Reddy */}
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("- BackEnd")
              .pauseFor(200)
              .deleteChars(7)
              .pauseFor(100)
              .typeString("FullStack Developer")
              .start();
          }}
        />
      </p>
      {!props.stickyNav && (
        <button className={styles.scrollButton} onClick={handleClick}>
          <b>Explore</b>
          <br />
          <span className={styles.downarrow}></span>
        </button>
      )}
    </div>
  );
};

export default TypeWriterEffect;
