import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  MDBBtn,
  MDBIcon,
  MDBTooltip,
  MDBRadio,
  MDBInput,
} from "mdb-react-ui-kit";

const PGVen = ({ onHostelData }) => {
  const [roomType, setRoomType] = useState("");
  const [roomShared, setRoomShared] = useState("");
  const [amenities, setAmenities] = useState("");
  const [inTime, setInTime] = useState("");
  const [wardenPresent, setWardenPresent] = useState("");
  const [noOfWardens, setNoOfWardens] = useState("");
  const [foodIncluded, setFoodIncluded] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [securityPresent, setSecurityPresent] = useState("");
  const [forGender, setForGender] = useState("");
  const [rules, setRules] = useState("");

  const handleSubmit = () => {
    const PGData = {
      room_type: roomType,
      room_shared: roomShared,
      amenities: amenities,
      in_time: inTime,
      warden_present: wardenPresent,
      no_of_wardens: noOfWardens,
      food_included: foodIncluded,
      longitude: longitude,
      latitude: latitude,
      security_present: securityPresent,
      for_gender: forGender,
      rules: rules,
    };
    console.log(PGData);
    onHostelData(PGData);
  };

  return (
    <>
      <MDBInput
        label="Room Type"
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Room Shared"
        value={roomShared}
        onChange={(e) => setRoomShared(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Amenities"
        value={amenities}
        onChange={(e) => setAmenities(e.target.value)}
      />
      <hr />
      <MDBInput
        label="In Time"
        type="time"
        value={inTime}
        onChange={(e) => setInTime(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Warden Present"
        value={wardenPresent}
        onChange={(e) => setWardenPresent(e.target.value)}
      />
      <hr />
      <MDBInput
        label="No of Wardens"
        value={noOfWardens}
        onChange={(e) => setNoOfWardens(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Food Included"
        value={foodIncluded}
        onChange={(e) => setFoodIncluded(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Security Present"
        value={securityPresent}
        onChange={(e) => setSecurityPresent(e.target.value)}
      />
      <hr />
      <MDBInput
        label="For Gender"
        value={forGender}
        onChange={(e) => setForGender(e.target.value)}
      />
      <hr />
      <MDBInput
        label="Rules"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
      />
      <hr />
      <MDBBtn rounded onClick={handleSubmit}>
        Submit
      </MDBBtn>
    </>
  );
};

export default PGVen;
