import { useState } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://automatic-info-tracker-backend.onrender.com/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful");
        navigate("/");

        // Redirect or perform actions after successful login
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <MDBContainer fluid style={{ backgroundColor: "wheat" }}>
      <MDBRow>
        <MDBCol md="6">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3619/3619429.png"
                height="42"
                alt=""
                loading="lazy"
              />
              <h3 className="mb-3">Login</h3>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form2Example1"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form2Example2"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCheckbox
                    id="form2Example3"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <a href="/forgot" className="text-right">
                    Forgot password?
                  </a>
                </div>

                <MDBBtn type="submit" className="mb-4" block>
                  Log in
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Not a member? <a href="/register">Register</a>
                  </p>
                  <p>or sign up with:</p>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="google" />
                  </MDBBtn>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="twitter" />
                  </MDBBtn>

                  <MDBBtn floating color="secondary" className="mx-1">
                    <MDBIcon fab icon="github" />
                  </MDBBtn>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </MDBCol>
        <MDBCol
          md="6"
          className="d-flex align-items-center justify-content-center"
        >
          <MDBCarousel
            showControls
            interval={6000}
            className="mx-auto"
            style={{ maxHeight: "250px", width: "100%" }}
          >
            <MDBCarouselItem itemId={1}>
              <img
                src="https://mdbootstrap.com/img/new/slides/041.jpg"
                className="d-block w-100"
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img
                src="https://mdbootstrap.com/img/new/slides/042.jpg"
                className="d-block w-100"
                alt="..."
              />
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default EmailLogin;
