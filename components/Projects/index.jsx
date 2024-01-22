import styles from "./styles.module.scss";
import Image from "next/image";

const projects = () => {
  return (
    <div className={styles.mainWrapper}>
      <h2 className={styles.heading}>PROJECTS</h2>
      <p className={styles.description}>
        Projects made by me with the source code and deployed projects links
      </p>
      <div className={styles.projectWrapper}>
        <Image src="/portfolio.png" width={620} height={350} />
        <div className={styles.descriptionSection}>
          <h2 className={styles.projectTitle}>PORTFOLIO</h2>
          <p className={styles.projectDescription}>
            This portfolio site which you are reading this
          </p>
          <div className={styles.buttonWrapper}>
            <a href="https://puru-porfolio.vercel.app/" target="_blank">
              Live Demo
            </a>
            <a
              href="https://github.com/puru13794/next-porfolio-updated"
              target="_blank"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className={styles.projectWrapper}>
        <Image src="/url-shortner.png" width={620} height={350} />
        <div className={styles.descriptionSection}>
          <h2 className={styles.projectTitle}>URL SHORTNER</h2>
          <p className={styles.projectDescription}>
            Url shortner which gives short url for the given long url
          </p>
          <div className={styles.buttonWrapper}>
            <a className={styles.disbled}>Live Demo</a>
            <a className={styles.disbled}>Work in Progress</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
