import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HostelBoys from "./pages/HostelBoys";
import HostelGirls from "./pages/HostelGirls";
import TiffinSer from "./pages/TiffinSer";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import CustomerSupport from "./pages/CustomerSupport";
import BusinessSupport from "./pages/BusinessSupport";
import WelcomeSignUp from "./pages/login/WelcomeSignUp";
import EmailLogin from "./pages/login/EmailLogin";
import ForgotPassword from "./pages/login/ForgotPassword";
import SignUp from "./pages/login/SignUp";
import PgService from "./pages/PgService";
import VendorDash from "./pages/VendorDash";
import VendorRegister from "./pages/VendorRegister";
import ReviewModal from "./components/ReviewModal";
import Rating from "./components/Rating";
import UserProfile from "./components/UserProfile";
import OnClick from "./pages/OnClick";
import VendorProfilePage from "./pages/VendorProfilePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/customerSup" element={<CustomerSupport />} />
          <Route path="/businessSup" element={<BusinessSupport />} />

          <Route path="/pgs" element={<PgService />} />
          <Route path="/hostelboys" element={<HostelBoys />} />
          <Route path="/hostelgirls" element={<HostelGirls />} />
          <Route path="/tiffin" element={<TiffinSer />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/welcome" element={<WelcomeSignUp />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/vendordash" element={<VendorDash />} />
          <Route path="/vendorreg" element={<VendorRegister />} />
          <Route path="/vendorprofile" element={<VendorProfilePage />} />
          <Route path="/review" element={<ReviewModal />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/details" element={<OnClick />} />
          {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
