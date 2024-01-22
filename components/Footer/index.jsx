import styles from "./styles.module.scss";
import Image from "next/image";

const footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.subWrapper}>
        <div className={styles.sec}>
          <h2 className={styles.subHead}>PURUSHOTTAM REDDY</h2>
          <p>
            A Fullstact developer building websites and backend logics and
            working with organisations to the things done!
          </p>
        </div>
        <div className={styles.socials}>
          <h2 className={styles.subHead}>SOCIAL</h2>
          <div className={styles.socialslinks}>
            <a href="https://twitter.com/MpurushothamRe9" target="_blank">
              <Image src="/twitter.png" width={30} height={30} alt="twitter" />
            </a>
            <a href="https://github.com/puru13794" target="_blank">
              <Image src="/github.png" width={30} height={30} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/purushotham-reddy-b2bb2b165/"
              target="_blank"
            >
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <p className={styles.desclaimer}>
        © Copyright 2024 | Made by Purushottam Reddy Design inspiration&nbsp;
        <a href="https://www.rammaheshwari.com/" target="_blank">
          Rammaheshwari
        </a>
      </p>
    </div>
  );
};

export default footer;
