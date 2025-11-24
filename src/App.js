import { About, Achievements, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
      <Achievements />
      
    </div>
  );
} 

export default App;
