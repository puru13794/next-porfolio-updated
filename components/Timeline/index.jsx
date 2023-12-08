import { Chrono } from "react-chrono";
import styles from "./index.module.scss";
import useDeviceDetect from "../../components/DeviceDetection";

const Timeline = (props) => {
  const { isMobile } = useDeviceDetect();
  const items = [
    {
      title: "June 2018 - June 2022",
      cardTitle: "UG - CS Major at Veltech",
      url: "https://www.veltech.edu.in/",
      cardSubtitle: "Most fun time and start of the coding journey ",
      cardDetailedText:
        "Most funtime in my timeline from loosing PUBG chicken dinner to loosing codechef contests whole gang were into it and we put in everything we could, projects assignments that made no sense, lastminute submissions........",
      mediaHeight: 200,
      media: {
        name: "convocation",
        source: {
          url: "./convocation.jpeg",
        },
        type: "IMAGE",
      },
    },
    {
      title: "Nov 2021 - Jun 2022",
      cardTitle: "Intern at Vakilsearch",
      url: "https://vakilsearch.com/products/libra",
      cardSubtitle: "First step into corporate",
      cardDetailedText:
        "Worked on the sass product Libra, Introduced to Ruby on Rails, bugfixes, ROA's......",
    },
    {
      title: "Jun 2022 - Aug 2023",
      cardTitle: "Employee at vakilsearch",
      url: "https://vakilsearch.com/",
      cardSubtitle: "Feature Responsibility, Nextjs, Explore Tech......",
      cardDetailedText:
        "Exploriing ROR, Taking feature responsibility, Exploring frontend react nextjs, Ui design, figma to react.........",
    },
    {
      title: "Aug 2023 - Dec 2023",
      cardTitle: "Software Engineer at Bitsila",
      url: "https://www.bitsila.com/",
      cardSubtitle: "Rest APi and more into retails api integrations",
      cardDetailedText:
        "Maintaining and documenting the rest api's and intigrating the thirdparty api's to the existing system.......",
    },
  ];
  return (
    <section className={styles.sectionWrapper}>
      <div
        id="timeline-section"
        class={styles.timelineWrapper}
        ref={props.timelineRef}
      >
        <Chrono
          items={items}
          mode="HORIZONTAL"
          slideShow={true}
          // slideItemDuration={2000}
          cardHeight={200} // sets the height of the timeline card to 200px
          mediaHeight={100}
          contentDetailsHeight={80}
          readMore={true}
          theme={{
            primary: "#101820",
            secondary: "#7C92AE",
            cardBgColor: "#7C92AE",
            titleColor: "#101820",
            titleColorActive: "#101820",
          }}
        />
      </div>
    </section>
  );
};

export default Timeline;
