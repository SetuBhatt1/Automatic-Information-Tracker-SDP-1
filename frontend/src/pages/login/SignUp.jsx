import { useState } from "react";
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.password2) {
      setMessage("Passwords don't match");
      return;
    }
  
    try {
      const response = await fetch("https://automatic-info-tracker-backend.onrender.com/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Registration successful");
        // Redirect or perform actions after successful registration
      } else {
        setMessage(data.password || data.username || "An error occurred. Please try again.");
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
              <h3 className="mb-3">Sign Up</h3>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  name="username"
                  className="mb-4"
                  label="Username"
                  value={formData.username}
                  onChange={handleChange}
                />

                <MDBInput
                  name="email"
                  className="mb-4"
                  type="email"
                  label="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  name="password"
                  className="mb-4"
                  type="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <MDBInput
                  name="password2"
                  className="mb-4"
                  type="password"
                  label="Confirm Password"
                  value={formData.password2}
                  onChange={handleChange}
                />

                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput
                      name="first_name"
                      label="First name"
                      value={formData.first_name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      name="last_name"
                      label="Last name"
                      value={formData.last_name}
                      onChange={handleChange}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBBtn type="submit" className="mb-4" block>
                  Sign up
                </MDBBtn>

                <div className="text-center">
                  <p>
                    Already a member? <a href="/login">Login</a>
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

export default SignUp;
