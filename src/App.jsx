import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Highlights, Resume } from "./components";

const HomePage = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Highlights />
    <Experience />
    <Tech />
    <Works />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

const ResumePage = () => (
  <div className='relative z-0 bg-primary'>
    <Navbar />
    <Resume />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;