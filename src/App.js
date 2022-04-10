import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/joy/HomePage";
import Navigation from "./components/navigation/Navigation"
import { HashLoader } from "react-spinners";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
function App() {

  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 6000)
  }, [])

  return (
    <>
      {
        spinner ?
          (

            <div className="spinner">
              <HashLoader
                size={60}
                color={"#b5a197"}
                loading={spinner}
              /></div>) : (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </>
          )

      }

    </>
  );
}

export default App;
