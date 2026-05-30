import { useRef } from "react";
import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import Header from "./Components/Header/Header.jsx";
import Banner from "./Components/Banner/Banner.jsx";
import DisplayRow from "./Components/DisplayRow/DisplayRow.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
      <Footer />
    </>
  );
}

export default App;
