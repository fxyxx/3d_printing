import About from "./components/About";
import Elipse from "./components/Elipse";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import CompletedProjects from "./components/CompletedProjects";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Modal from "react-modal";

import useScrollToRef from "./hooks/useScrollToRef";

Modal.setAppElement("#root");

function App() {
  const [aboutRef, scrollToAbout] = useScrollToRef();
  const [projectsRef, scrollToProjects] = useScrollToRef();
  const [feedbackRef, scrollToFeedback] = useScrollToRef();

  return (
    <div className="bg-bgBlack w-full scrollbar">
      <Navbar onNavClick={[scrollToAbout, scrollToProjects, scrollToFeedback]} />
      <Hero />
      <About ref={aboutRef} />
      <CompletedProjects ref={projectsRef} />
      <Feedback ref={feedbackRef} />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
