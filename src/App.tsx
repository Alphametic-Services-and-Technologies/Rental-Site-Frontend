import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/Header/Header";
import Partners from "./pages/Partners/Partners";
import Properties from "./pages/Properties/Properties";
import AboutUs from "./pages/AboutUs/AboutUs";
import Developers from "./pages/Developers/Developers";
import JoinPage from "./pages/JoinPage/JoinPage";
import Subscribe from "./pages/Subscribe/Subscribe";
import Footer from "./pages/Footer/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Partners />
      <Properties />
      <AboutUs />
      <Developers />
      <JoinPage />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
