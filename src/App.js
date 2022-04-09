import { useState, useEffect } from "react";
import HomePage from "./components/mainpage/HomePage";
import Navigation from "./components/navigation/Navigation"
import { HashLoader } from "react-spinners";
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
            </>
          )

      }

    </>
  );
}

export default App;
