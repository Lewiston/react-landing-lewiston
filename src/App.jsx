import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import SocialProof from "./components/SocialProof";
import Statistics from "./components/Statistics";
import WhyChoose from "./components/WhyChoose";
import "./styles/App.css";

function App() {
  return (
    <main className="container">
      <Header />
      <SocialProof />
      <WhyChoose />
      <Pricing />
      <FAQ />
      <Statistics />
      <Footer />
     
    </main>
  );
}

export default App;
