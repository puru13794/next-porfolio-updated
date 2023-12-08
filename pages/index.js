import { useState, useRef } from "react";
import styles from "@/styles/Home.module.css";
import TypeWriterEffect from "../components/TypeWriter";
import Timeline from "../components/Timeline/index";
import NavBar from "../components/NavBar";
import Contact from "../components/contact";


export default function Home() {
  const [slideshow, setSlideShow] = useState(false);
  const timelineRef = useRef();
  return (
    <>
      <NavBar />
      <TypeWriterEffect setSlideShow={setSlideShow} timelineRef={timelineRef} />
      <Timeline slideshow={slideshow} timelineRef={timelineRef} />
      <Contact />
    </>
  );
}
