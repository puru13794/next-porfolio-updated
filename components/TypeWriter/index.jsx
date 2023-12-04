import Typewriter from "typewriter-effect";
import styles from "./index.module.scss";

const TypeWriterEffect = (props) => {
  return (
    <div id="about" className={styles.mainWrapper}>
      <p className={styles.main}>
        Hi👋  &nbsp; i'm Purushottam Reddy
        <br />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("    - BackEnd")
              .deleteChars(7)
              .pauseFor(100)
              .typeString("FullStack Developer")
              .start();
          }}
        />
      </p>
    </div>
  );
};

export default TypeWriterEffect;
