import Creative from "./components/Creative";
import Demo from "./components/Demo";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GenAI from "./components/GenAI";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Results from "./components/Results";
import SocialProof from "./components/SocialProof";
import Statistics from "./components/Statistics";
import WhyChoose from "./components/WhyChoose";
import "./styles/App.css";

function App() {
  return (
    <main className="container">
      <Header />
      <Hero />
      <SocialProof />
      <GenAI />
      <Demo />
      <Creative />
      {/* <Results /> */}
      <WhyChoose />
      <Pricing />
      <FAQ />
      <Statistics />
      <Footer />
     
    </main>
  );
}

export default App;
