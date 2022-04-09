/* import React, { useEffect, useState } from 'react'


const PageLoading = () => {

    let [load, setLoad] = useState(0)
    const [opacity, setOpacity] = useState(1)
    const [scaleValue, setScaleValue] = useState(100)

    const blurring = () => {
        setLoad(load++)
        setOpacity(scale(load, 0, 100, 1, 0))
        setScaleValue(scale(load, 0, 100, 30, 0))
    }

    useEffect(() => {
        let pageLoading = setInterval(blurring, 71)

        return () => {
            if (load > 99) {
                clearInterval(pageLoading)
            }
        }
    }, [])

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (((num - in_min) * (out_max - out_min)) / (in_max - in_min)) + out_min
    }

    return (
        <div style={{ position: "relative" }}>
      <div style={{ filter: `blur(${scaleValue}px)` }}>
        <img src="r.jpg" alt="" />
      </div >
      <div style={{ opacity: opacity, fontSize: "50px", position: "absolute", top: "50%", left: "50%" }}> <p>Emre Avci{load}%</p>
        <div style={{ width: `${load}`, height: "20px", color: "blue" }}> </div>
      </div>

      <Navigation></Navigation>
    </div>
    )
}

export default PageLoading */