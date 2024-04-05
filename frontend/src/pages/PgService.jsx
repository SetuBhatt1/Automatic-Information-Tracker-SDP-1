import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import Card from '../components/Card';
import NavBar from "../components/NavBar";

const PgService = () => {
  const [pg,setPg] = useState([]);

  useEffect(() => {
    console.log('Fetching data...'); // Log before the fetch request
    fetch('http://127.0.0.1:8000/data/pgs/') 
       .then(response => {
         console.log('Response received:', response); // Log the response object
         if (!response.ok) {
           throw new Error('Network response was not ok');
         }
         return response.json();
       })
       .then(data => {
         console.log('Data:', data); // Log the parsed data
         setPg(data); 
       })
       .catch(error => {
         console.error('Fetch error:', error); // Log any errors
       });
   }, []);
   

  return (
    <>
      <NavBar />
      {pg && pg.length > 0 && pg.map((x,idx) => (
        <Card
          key={x.idx}
          name={x.Name}
          rating={x.Rating}
          address={x.Address}
          phone={x.Phone}
          thumbnail={x.Thumbnail}
          type={x.Type}
          latitude={x.Latitude}
          longitude={x.Longitude}
          amentities = {x.Amentities}
        />
      ))}
    </>
  );
};

export default PgService;
