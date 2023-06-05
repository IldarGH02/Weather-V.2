import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ClockPage, {routeMain as routeClockPage} from "pages/ClockPage/ClockPage";
import WeatherPage, {routeMain as routeWeatherPage} from "pages/WeatherPage/WeatherPage";
import Layout from "pages/Layout";
import Loader from "ui/Layout";

const AppContent = () => {
    return (
        <div className="mainWrapper">
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route
                            path={routeWeatherPage()}
                            element={<WeatherPage/>}
                        />
                        <Route
                            path={routeClockPage()}
                            element={<ClockPage/>}
                        />      
                    </Route>               
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppContent