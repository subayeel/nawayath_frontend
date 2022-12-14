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
import Footer from "./Components/Footer/Footer";


import OurTeam from "./Components/OurTeam/OurTeam";
import OwnerLoginPage from "./Components/LoginPage/OwnerLoginPage";
import OwnerProfilePage from "./Components/ProfilePage/OwnerProfilePage";
import AdminScanner from "./Components/Admin/AdminScanner";
import AccessGranted from "./Components/Admin/AccessGranted";
import AuctionHandler from "./Components/Admin/AuctionHandler";
import PlayerProfile from "./Components/ProfilePage/PlayerProfile";
import MyTeam from "./Components/ProfilePage/MyTeam"
import LivePage from "./Components/Home/LivePage";
import DayPage from "./Components/Home/DayPage";
import Teams from "./Components/ProfilePage/Teams"
import TeamPage from "./Components/ProfilePage/TeamPage";

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
  const [imageUrl, setImageUrl] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  //get auth user details
  const getOwnerdetails = async (mobileNumber) => {
    const ownerRef = collection(db, "ownerDetails");
    // Create a query against the collection.
    const q = query(
      ownerRef,
      where("ownerContactNumber", "==", mobileNumber.slice(3))
    );
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setName(doc.data().ownerFullName);
      setTeamName(doc.data().teamName);
      setPaymentId(doc.data().razorpay_payment_id);
      setImageUrl(doc.data().ownerTeamLogo);
    });
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

  //check user auth
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (
          user.phoneNumber === "+919663786796" ||
          user.phoneNumber === "+919611767705"
        ) {
          setAdmin(true);
          setImageUrl(
            "https://firebasestorage.googleapis.com/v0/b/nawayath-foundation-2c872.appspot.com/o/ncl-logo.PNG?alt=media&token=6fe8663e-08b5-4ab4-9cba-3a42128b2e4c"
          );
        } else {
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Router>
        <Wrapper>
          <Sidebar isAuth={isAuth} isOpen={isOpen} toggle={toggle} />
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
            {/* <Route path="/player-register" element={<PlayerRegisterPage />} /> */}
            {/* <Route path="/owner-register" element={<OwnerRegisterPage />} /> */}
            {/* <Route
              path="/volunteer-register"
              element={<VolunteerRegisterPage />}
            /> */}
            {/* <Route path="/register-option" element={<RegisterOptionPage />} /> */}
            <Route path="/owner-login" element={<OwnerLoginPage />} />
            {/* <Route path="/paymentsuccess" element={<PaymentSuccess />} /> */}
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/live-page" element={<LivePage/>}/>
            <Route path="/live-page/:day" element={<DayPage/>}/>

            {/* Owner Routes */}
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
            <Route path="/my-team" element={<MyTeam phone={phone}/>} />
            <Route path="/teams" element={<Teams />}/>
            <Route path="/team-page/:team" element={<TeamPage />}/>

            {/* Admin routes */}
            <Route path="/admin-scanner" element={<AdminScanner isAuth={isAuth}/>} />
            <Route path="/access-granted" element={<AccessGranted isAuth={isAuth}/>} />
            <Route path="/auction-handler" element={<AuctionHandler isAuth={isAuth}/>} />


            {/* Player profile */}
            <Route path="/player-profile" element={<PlayerProfile/>}/>
            <Route path="/player-profile/:team/:id" element={<PlayerProfile/>}/>

          </Routes>
          <Outlet />
          <Footer />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
