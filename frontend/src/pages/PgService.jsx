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
  const [pg, setPg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const image = "https://images.unsplash.com/photo-1608198399988-341f712c3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvc3RlbHxlbnwwfHwwfHx8MA%3D%3D"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          fetch('https://automatic-info-tracker-backend.onrender.com/data/pgs/'),
          fetch('https://automatic-info-tracker-backend.onrender.com/service/girls-pgs/'),
          fetch('https://automatic-info-tracker-backend.onrender.com/service/boys-pgs/')
        ]);

        if (!response1.ok ||!response2.ok ||!response3.ok) {
          throw new Error('Network response was not ok');
        }

        const [data1, data2, data3] = await Promise.all([
          response1.text(),
          response2.text(),
          response3.text()
        ]);

        const cleanedText1 = data1.replace(/NaN/g, 'null');
        const cleanedText2 = data2.replace(/NaN/g, 'null');
        const cleanedText3 = data3.replace(/NaN/g, 'null');

        const parsedData1 = JSON.parse(cleanedText1);
        const parsedData2 = JSON.parse(cleanedText2);
        const parsedData3 = JSON.parse(cleanedText3);

      
        setPg([...parsedData1,...parsedData2,...parsedData3]);
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
      {pg && pg.length > 0 && pg.map((x,idx) => (
        <Card
          key={x.idx}
          name={x.Name || x.name}
          rating={x.Rating}
          address={x.Address || x.address}
          phone={x.Phone || x.phone}
          thumbnail={x.Thumbnail || image}
          type={x.Type}
          latitude={x.Latitude || x.latitude}
          longitude={x.Longitude || x.longitude}
          amentities = {x.Amentities || x.amenities}
        />
      ))}
    </>
  );
};

export default PgService;
