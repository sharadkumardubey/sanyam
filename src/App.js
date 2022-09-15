// import logo from './logo.svg';
import "./App.css";
import Header from "./Header Component/Header";
import IntroScreen from "./Intro Screen/IntroScreen";
import Footer from "./Footer Component/Footer";

function App() {
  return (
    <div className="App">
      <section id="top">
        <Header />
        <IntroScreen />
        <Footer />
      </section>
    </div>
  );
}

export default App;
