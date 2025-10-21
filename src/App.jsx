import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Statistics from "./components/Statistics";
import "./styles/App.css";

function App() {
  return (
    <main className="container">
      <Header />
      <Pricing />
      <Statistics />
      <Footer />
     
    </main>
  );
}

export default App;
