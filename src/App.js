import { useState } from "react";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
