//basic imports
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Components/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

//components import
import Sidebar from "./Components/SideBar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/LargeFooter/Footer";
import PlayerRegisterPage from "./Components/RegisterPage/PlayerRegisterPage";
import OwnerRegisterPage from "./Components/RegisterPage/OwnerRegisterPage";
import VolunteerRegisterPage from "./Components/RegisterPage/VolunteerRegisterPage";
import RegisterOptionPage from "./Components/RegisterPage/RegisterOptionPage";
import PaymentSuccess from "./Components/RegisterPage/PaymentSuccess";
import OurTeam from "./Components/OurTeam/OurTeam";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const theme = {
    colors: {
      primarybg: "#ECEFFF",
      secondarybg: "#FCFFDF",
      primaryColor: "#3F9DA7",
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Wrapper>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player-register" element={<PlayerRegisterPage />} />
            <Route path="/owner-register" element={<OwnerRegisterPage />} />
            <Route
              path="/volunteer-register"
              element={<VolunteerRegisterPage />}
            />
            <Route path="/register-option" element={<RegisterOptionPage />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/ourteam" element={<OurTeam />} />
          </Routes>
          <Outlet />
          <Footer />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
