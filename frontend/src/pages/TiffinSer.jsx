import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import CardTiffin from "../components/CardTiffin";
import NavBar from "../components/NavBar";

const TiffinSer = () => {
  const [tiffins, setTiffins] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data/tiffins/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTiffins(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <>
      <NavBar />
      {tiffins &&
        tiffins.length > 0 &&
        tiffins.map((tiffin) => (
          <CardTiffin
            key={tiffin.id}
            name={tiffin.Name}
            rating={tiffin.Rating}
            phone={tiffin.Phone}
            thumbnail={tiffin.Thumbnail}
            latitude={tiffin.Latitude}
            longitude={tiffin.Longitude}
          />
        ))}
    </>
  );
};

export default TiffinSer;
