import styles from "./styles.module.scss";

const about = (props) => {
  return (
    <div id="about" className={styles.mainWrapper} ref={props.aboutRef}>
      <h2 className={styles.heading}>ABOUT ME</h2>
      <p className={styles.desc}>
        Full Stack developer with 2+ years of experience crafting web
        applications using Ruby on Rails, ReactJS, and NodeJS. Passionate about
        creating seamless user experiences. Let's collaborate to create
        something exceptional!
      </p>
      <div className={styles.maindesc}>
        <div className={styles.moreAboutMe}>
          <h3 className={styles.subDesc}>MORE ABOUT ME</h3>
          <p className={styles.subpara}>
            I am a <b>Fullstack developer</b> with extensive expertise in web
            technologies, having built web applications for the past{" "}
            <b>2 years.</b> My skills range from data modeling in backend
            applications to seamlessly translating Figma wireframes into code
            and integrating them into fluid workflows. I am passionate about
            tackling complex problems and crafting straightforward solutions.
            Follow my journey on{" "}
            <a
              href="https://www.linkedin.com/in/purushotham-reddy-b2bb2b165/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            for updates. Currently seeking job opportunities where I can
            contribute, learn, and grow. If you have an exciting opportunity
            aligning with my skills and experience, feel free to contact me.
          </p>
          <a href='#contact' className={styles.contactButton}>
            CONTACT
          </a>
        </div>
        <div className={styles.skillsSection}>
          <h2 className={styles.subheading}>My Skills</h2>
          <div className={styles.skillWrapper}>
            {[
              "Ruby on Rails",
              "React.js",
              "Next.js",
              "SQL",
              "Postgres",
              "Mongodb",
              "Javascript",
              "Basic Node.js",
              "Bootstrap",
              "Jquery",
              "RestApi's",
              "Docker",
              "Python",
            ].map((skill) => {
              return <div className={styles.skillSection}>{skill}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
