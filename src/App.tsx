// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Blog from "./components/Blog/Blog";
import Privacy from "./components/Privacy/Privacy";
import Footer from "./globalSubComponents/Footer";
import CTA from "./globalSubComponents/CTA";
import ScrollToTop from "./globalSubComponents/ScrollToTop";
import { RootState } from "./store/store";
import PasswordReset from "./components/ForgetPassword/PasswordReset";
import TopBar from "./globalSubComponents/TopBar";
import Landing from "./components/Landing/Landing";
import Robinhood from "./components/Robinhood/Robinhood";
import InvestLanding from "./components/vanguard/InvestLanding";

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  return (
    <>
      <div>
        {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <TopBar />}
        {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<InvestLanding />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Services/*" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Blog/*" element={<Blog />} />
          <Route path="/Privacy" element={<Privacy />} /> */}
          {/* <Route path="/Landing" element={<Landing />} /> */}
          {/* <Route path="/ResetPassword" element={<PasswordReset />} /> */}
          <Route path="/Robinhood" element={<Robinhood />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {/* {curTab === "Auth" || curTab === "Password Reset" ? null : (
        <CTA text="❝ We Care for your Brand as Passionately as You Do. ❞" color="warning" showArrow={false} />
      )} */}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <Footer />}
    </>
  );
}

export default App;
