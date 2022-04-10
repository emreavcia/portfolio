import { useState, useEffect } from "react";
import HomePage from "./components/joy/HomePage";
import Navigation from "./components/navigation/Navigation"
import { HashLoader } from "react-spinners";
import Footer from "./components/footer/Footer";
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
              <HomePage />
              <Footer />
            </>
          )

      }

    </>
  );
}

export default App;
