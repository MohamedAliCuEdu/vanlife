import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// import style files:
import "./style/main.scss";
import "./style/library/global.scss";
import "./style/library/classes.scss";
import "./style/components.scss";

// layouts & pages:
import HomePage from "./pages/homePage";
import Layouts from "./layouts/layouts";
// import LoginPage from "./pages/loginPage";
import AboutPage from "./pages/aboutPage";
import ErrorPage from "./pages/errorPage";

// page: host
// import HostLayout from "./pages/host/host-layout";
// import HostDashboard from "./pages/host/host-dashboard";
// import HostVans from "./pages/host/host-vans";
// import HostIncome from "./pages/host/host-income";
// import HostReveiws from "./pages/host/host-reviews";

// // page: vans
import Vans from "./pages/vansPage/vansPage";
import VanDetails from "./pages/vanPage/vanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route index element={<HomePage />}></Route>
          <Route path="vans" element={<Vans />}>
            <Route path="?type"></Route>
          </Route>
            <Route path="vans/:id" element={<VanDetails />}></Route>
          {/* 
          <Route path="host" element={<HostLayout />}>
          <Route path="vans" element={<HostVans />}></Route>
            <Route index element={<HostDashboard />} end></Route>
            <Route path="income" element={<HostIncome />}></Route>
            <Route path="reviews" element={<HostReveiws />}></Route>
          </Route>
        <Route path="login" element={<LoginPage />}></Route> */}
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
