//basic imports
import React, { useState, useEffect } from "react";
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

//auth imports
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db } from "./config";

import { collection, query, where, getDocs } from "firebase/firestore";

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
import OwnerLoginPage from "./Components/LoginPage/OwnerLoginPage";
import OwnerProfilePage from "./Components/ProfilePage/OwnerProfilePage";
import AdminScanner from "./Components/Admin/AdminScanner";
import AccessGranted from "./Components/Admin/AccessGranted";

//function of scroll to top
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  const [isAuth, setAuth] = useState(false);
  const [phone, setPhone] = useState();

  //states for owner data
  const [name, setName] = useState();
  const [paymentId, setPaymentId] = useState();
  const [teamName, setTeamName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [isAdmin, setAdmin] = useState(false);

  //check user auth
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.phoneNumber === "+919663786796" ||user.phoneNumber === "+919740730152") {
          setAdmin(true);
        }else{
          setAdmin(false);
        }
        // User is signed in.
        
        setAuth(true);
        setPhone(user.phoneNumber);
        await getOwnerdetails(user.phoneNumber);
      } else {
        // No user is signed in.
        setAuth(false);
        console.log("no user");
      }
    });
  }, [auth, name]);

  //get auth user details
  const getOwnerdetails = async (mobileNumber) => {
    const ownerRef = collection(db, "ownerDetails");
    // Create a query against the collection.
    const q = query(
      ownerRef,
      where("ownerContactNumber", "==", mobileNumber.slice(3))
    );
      console.log("q"+q)
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setName(doc.data().ownerFullName);
      setTeamName(doc.data().teamName);
      setPaymentId(doc.data().razorpay_payment_id);
      setImageUrl(doc.data().ownerTeamLogo);
    });

    console.log("qs"+querySnapshot)

  };

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
          <Navbar
            isAuth={isAuth}
            setAuth={setAuth}
            isOpen={isOpen}
            toggle={toggle}
            imageUrl={imageUrl}
            isAdmin={isAdmin}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/player-register" element={<PlayerRegisterPage />} />
            <Route path="/owner-register" element={<OwnerRegisterPage />} />
            <Route
              path="/volunteer-register"
              element={<VolunteerRegisterPage />}
            />
            <Route path="/register-option" element={<RegisterOptionPage />} />
            <Route path="/owner-login" element={<OwnerLoginPage />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route
              path="/profile-page"
              element={
                <OwnerProfilePage
                  name={name}
                  teamName={teamName}
                  paymentId={paymentId}
                  phone={phone}
                />
              }
            />
            <Route path="/admin-scanner" element={<AdminScanner />} />
            <Route path="/access-granted" element={<AccessGranted />} />
          </Routes>
          <Outlet />
          <Footer />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
