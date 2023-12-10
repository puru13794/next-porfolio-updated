import { useState, useRef } from "react";
import TypeWriterEffect from "../components/TypeWriter";
import Timeline from "../components/Timeline/index";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import "../styles/Home.module.css";

export default function Home() {
  const [slideshow, setSlideShow] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const timelineRef = useRef();
  return (
    <div id="nav-wrapper">
      <NavBar
        stickyNav={stickyNav}
        setStickyNav={setStickyNav}
        outerContainerId={"nav-wrapper"}
      />
      <TypeWriterEffect
        setSlideShow={setSlideShow}
        timelineRef={timelineRef}
        stickyNav={stickyNav}
      />
      {/* <Timeline slideshow={slideshow} timelineRef={timelineRef} /> */}
      <Contact />
    </div>
  );
}
