import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { MDBSpinner } from 'mdb-react-ui-kit';

const HostelGirls = () => {
 const [hostels, setHostels] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
    fetch('http://127.0.0.1:8000/data/girls-hostels/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        const cleanedText = text.replace(/NaN/g, 'null');
        return JSON.parse(cleanedText);
      })
      .then(data => {
        setHostels(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setIsLoading(false);
      });
 }, []);

 return (
    <>
      {/* <NavBarServices /> */}
      <NavBar/>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <MDBSpinner role='status'>
            <span className='visually-hidden'>Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        hostels.map((hostel, index) => (
          <Card
            key={index}
            name={hostel.Name}
            address={hostel.Address}
            rating={hostel.Rating}
            phone={hostel.Phone}
            thumbnail={hostel.Thumbnail}
            images={hostel.Images}
            latitude={hostel.Latitude}
            longitude={hostel.Longitude}
            type={hostel.Type}
            amentities = {hostel.Amentities}

          />
        ))
      )}
    </>
 );
};

export default HostelGirls;
