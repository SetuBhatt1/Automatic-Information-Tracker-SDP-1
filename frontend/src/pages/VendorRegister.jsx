import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
  MDBBtn,
} from "mdb-react-ui-kit";
import HostelVen from "../components/HostelVen";
import HostelPGVen from "../components/HostelPGVen";
import TiffinVen from "../components/TiffinVen";
import PGVen from "../components/PGVen";

const VendorRegister = () => {
  const [selectedType, setSelectedType] = useState("");
  const [hostelData, setHostelData] = useState(null);
  const [hostelPGData, setHostelPGData] = useState(null);
  const [tiffinData, setTiffinData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name,
      email,
      phone,
      address,
      type_of_business: selectedType,
    };

    if (selectedType === "H") {
      formData = { ...formData, ...hostelData };
    } else if (selectedType === "Pg") {
      formData = { ...formData, ...hostelPGData };
    } else if (selectedType === "T") {
      formData = { ...formData, ...tiffinData };
    }

    try {
      const response = await fetch(
        "https://automatic-info-tracker-backend.onrender.com/service/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/vendorprofile");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <MDBContainer style={{ marginTop: 40 }}>
      <center>
        <h2>Enter Details</h2>
        <hr />
      </center>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </MDBCol>

          <MDBCol>
            <MDBInput
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol>
            <MDBRadio
              name="businessType"
              id="hostel"
              value="H"
              label="Hostel"
              inline
              checked={selectedType === "H"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "H" && <HostelVen onHostelData={setHostelData} />}
          </MDBCol>
          <MDBCol>
            <MDBRadio
              name="businessType"
              id="pg"
              value="Pg"
              label="PG"
              inline
              checked={selectedType === "Pg"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "Pg" && (
              <PGVen onHostelData={setHostelData} /> // Pass the onHostelData function here
            )}
          </MDBCol>

          <MDBCol>
            <MDBRadio
              name="businessType"
              id="tiffin"
              value="T"
              label="Tiffin Service"
              inline
              checked={selectedType === "T"}
              onChange={(e) => setSelectedType(e.target.value)}
            />
            {selectedType === "T" && <TiffinVen onTiffinData={setTiffinData} />}
          </MDBCol>
        </MDBRow>
        {/* <hr /> */}
        {/* <MDBBtn rounded type="submit">
          Submit
        </MDBBtn> */}
      </form>
    </MDBContainer>
  );
};

export default VendorRegister;
