import React, { useState } from 'react';
import {
 MDBBtn,
 MDBModal,
 MDBModalDialog,
 MDBModalContent,
 MDBModalHeader,
 MDBModalTitle,
 MDBModalBody,
 MDBModalFooter,
 MDBContainer
} from 'mdb-react-ui-kit';
import Rating from './Rating';
import UserInput from './UserInput';
import UserProfile from './UserProfile';

export default function ReviewModal({ isOpen, setOpen, hostel }) {
  const [reviewText, setReviewText] = useState('');
  const [selectedPhotoName, setSelectedPhotoName] = useState('');
  const [submittedReview, setSubmittedReview] = useState(null);
  const [rating, setRating] = useState(null); 
 
  const handleFileChange = (event) => {
     const file = event.target.files[0];
     if (file) {
       setSelectedPhotoName(file.name);
     }
  };
 
  const triggerFileSelect = () => {
     document.getElementById('upload-photo').click();
  };
 
  const handleRatingChange = (newRating) => {
     setRating(newRating);
  };
 
  const handleSubmit = async () => {
     if (!reviewText) {
       alert('Please fill out the review.');
       return;
     }
 
     const formData = new FormData();
     formData.append('experience', reviewText);
     formData.append('photos', null);
     formData.append('rating', rating);
     formData.append('type', hostel.type);
     formData.append('service_name', hostel.name);
 
     try {
       const response = await fetch('https://automatic-info-tracker-backend.onrender.com/service/add_review/', {
         method: 'POST',
         body: formData,
       });
 
       if (!response.ok) {
         throw new Error('Failed to submit review');
       }
 
       setSubmittedReview(reviewText);
       alert('Review submitted successfully');
       setOpen(false);
     } catch (error) {
       console.error('Error submitting review:', error);
       alert('Failed to submit review. Please try again.');
     }
  };
 
  return (
     <MDBModal open={isOpen} setOpen={setOpen} tabIndex="-1">
       <MDBModalDialog centered scrollable size="lg">
         <MDBModalContent>
           <MDBModalHeader>
             <MDBModalTitle className="text-center">{hostel.name}</MDBModalTitle>
             <MDBBtn className="btn-close" color="none" onClick={() => setOpen(false)}></MDBBtn>
           </MDBModalHeader>
           <MDBModalBody style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', maxHeight: '400px' }}>
             <MDBContainer className="d-flex flex-column align-items-center">
               <UserProfile />
               <Rating onRatingChange={handleRatingChange} /> 
               <UserInput
                 styles={{ width: '100%', marginTop: '20px' }}
                 onChange={(e) => setReviewText(e.target.value)}
               />
               {selectedPhotoName ? (
                 <p onClick={triggerFileSelect} style={{ cursor: 'pointer', color: 'blue' }}>
                  {selectedPhotoName}
                 </p>
               ) : (
                 <label htmlFor="upload-photo" className="btn btn-primary" style={{ marginTop: '10px' }}>
                  Upload Photos
                 </label>
               )}
               <input
                 type="file"
                 name="photo"
                 id="upload-photo"
                 style={{ display: 'none' }}
                 onChange={handleFileChange}
                 accept="image/jpeg, image/png, image/gif"
               />
             </MDBContainer>
           </MDBModalBody>
           <MDBModalFooter>
             <MDBBtn color="secondary" onClick={handleSubmit}>Submit Review</MDBBtn>
             {submittedReview && (
               <div>
                 <h3>Your Review:</h3>
                 <p>{submittedReview}</p>
               </div>
             )}
           </MDBModalFooter>
         </MDBModalContent>
       </MDBModalDialog>
     </MDBModal>
  );
 }