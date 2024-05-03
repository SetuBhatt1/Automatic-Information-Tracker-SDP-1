import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import { MDBSpinner } from 'mdb-react-ui-kit';
import NavBar from "../components/NavBar";


const HostelBoys = () => {
  const [hostels, setHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const image = "https://images.unsplash.com/photo-1608198399988-341f712c3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch('https://automatic-info-tracker-backend.onrender.com/data/boys-hostels/'),
          fetch('https://automatic-info-tracker-backend.onrender.com/service/boys-hostels/')
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error('Network response was not ok');
        }

        const [data1, data2] = await Promise.all([
          response1.text(),
          response2.text()
        ]);

        const cleanedText1 = data1.replace(/NaN/g, 'null');
        const cleanedText2 = data2.replace(/NaN/g, 'null');

        const parsedData1 = JSON.parse(cleanedText1);
        const parsedData2 = JSON.parse(cleanedText2);

     
        setHostels([...parsedData1, ...parsedData2]);
        setIsLoading(false);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
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
            name={hostel.Name || hostel.name}
            address={hostel.Address || hostel.address}
            rating={hostel.Rating}
            phone={hostel.Phone || hostel.phone}
            thumbnail={hostel.Thumbnail || image}
            images={hostel.Images || image}
            latitude={hostel.Latitude || hostel.latitude}
            longitude={hostel.Longitude || hostel.longitude}
            type={hostel.Type}
            amentities={hostel.Amentities || hostel.amenities }
          />
        ))
      )}
    </>
  );
};

export default HostelBoys;
