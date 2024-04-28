import React, { useState, useEffect } from 'react';

const UserComment = ({ hostel }) => {
 const [reviews, setReviews] = useState([]);

 useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://automatic-info-tracker-backend.onrender.com/service/search_reviews/?q=${hostel.name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
 }, [hostel.name]);

 const cardStyle = {
    width: '100%',
    maxWidth: '65vw',
    height: 'auto',
    background: '#f5f5f5',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    backdropFilter: 'blur(10px)',
    transition: '0.5s ease-in-out',
    padding: '10px',
    marginLeft: '30px',
    marginBottom: '20px',
 };

 const imgStyle = {
    width: '60px',
    height: '60px',
    marginRight: '20px',
    borderRadius: '10px',
    background: 'linear-gradient(#e0e0e0, #d7cfcf)',
 };

 const textBoxStyle = {
    width: 'calc(100% - 100px)',
    color: '#333',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
 };

 const textContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
 };

 const spanStyle = {
    fontSize: '14px',
    color: '#666',
 };

 const h1Style = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
 };

 const pStyle = {
    fontSize: '16px',
    fontWeight: 'lighter',
    color: '#666',
 };

 const starStyle = {
    fontSize: '24px',
    color: '#ffa723',
    marginRight: '5px',
 };

 return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} style={cardStyle}>
          <div style={imgStyle}></div>
          <div style={textBoxStyle}>
            <div style={textContentStyle}>
              <div>
                {[...Array(Math.floor(review.rating))].map((_, index) => (
                 <span key={index} style={starStyle}>★</span>
                ))}
              </div>
            </div>
            <p style={pStyle}>{review.experience}</p>
          </div>
        </div>
      ))}
    </div>
 );
};

export default UserComment;
