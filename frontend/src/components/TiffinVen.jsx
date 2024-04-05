import React, { useState } from "react";
import PropTypes from "prop-types";
import { MDBBtn, MDBIcon, MDBTooltip, MDBRadio, MDBInput } from "mdb-react-ui-kit";

const TiffinVen = ({ onTiffinData }) => {
 const [vegNonVeg, setVegNonVeg] = useState("V"); // Default to Veg
 const [deliversToLoc, setDeliversToLoc] = useState("Delivering Location");
 const [opensAt, setOpensAt] = useState("00:00:00");
 const [closesAt, setClosesAt] = useState("00:00:00");
 const [menuFile, setMenuFile] = useState(null);
 const [menuPreview, setMenuPreview] = useState(null);

 const handleMenuUpload = (e) => {
    const selectedFile = e.target.files[0];
    setMenuFile(selectedFile);
    setMenuPreview(URL.createObjectURL(selectedFile));
 };

 const handleDeleteMenu = () => {
    setMenuFile(null);
    setMenuPreview(null);
 };

 const handleSubmit = () => {
    // Call the onTiffinData function with the tiffin-specific data
    onTiffinData({


      type_of_food: vegNonVeg,
      // menu: menuFile,
      delivers_to_loc: deliversToLoc,
      OpensAt: opensAt,
      ClosesAt: closesAt,
      // longitude: 12.9716, // This should be dynamically set based on user input
      // latitude: 77.5946, // This should be dynamically set based on user input
    });
 };

 return (
    <>
      {/* Form fields for name, email, address, longitude, latitude, and other required fields */}
      <hr />
      <h5>Veg/Non-Veg</h5>
      <MDBRadio
        name="vegNonVeg"
        id="Veg"
        label="Veg"
        inline
        checked={vegNonVeg === "V"}
        onChange={() => setVegNonVeg("V")}
      />
      <MDBRadio
        name="vegNonVeg"
        id="NonVeg"
        label="Non-Veg"
        inline
        checked={vegNonVeg === "NV"}
        onChange={() => setVegNonVeg("NV")}
      />
      <hr />
      <h5>Delivering Location</h5>
      <MDBInput
        type="text"
        label="Delivering Location"
        value={deliversToLoc}
        onChange={(e) => setDeliversToLoc(e.target.value)}
      />
      <hr />
      <h5>Opening Time</h5>
      <MDBInput
        type="time"
        label="Opening Time"
        value={opensAt}
        onChange={(e) => setOpensAt(e.target.value)}
      />
      <hr />
      <h5>Closing Time</h5>
      <MDBInput
        type="time"
        label="Closing Time"
        value={closesAt}
        onChange={(e) => setClosesAt(e.target.value)}
      />
      <hr />
      <div className="d-flex justify-content-center mt-4">
        <MDBBtn rounded onClick={handleSubmit}>
          Submit
        </MDBBtn>
      </div>
    </>
 );
};

TiffinVen.propTypes = {
 onTiffinData: PropTypes.func.isRequired,
};

export default TiffinVen;