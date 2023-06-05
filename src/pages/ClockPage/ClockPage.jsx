import React, {useState, useEffect} from "react";
import routeMain from "./routes";

const ClockPage = () => {
    const [clock, setClock] = useState()
 
    useEffect(() => {
        const timer = setInterval(() => {
            setClock(new Date().toLocaleTimeString().toString())
            return () => {
                clearInterval(timer)
            }
        })
    }, [])

    return (
        <section className="clock">
            <div className="container">
                <div className="clock__content">
                    <div className="clock__info">{clock}</div>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default ClockPage