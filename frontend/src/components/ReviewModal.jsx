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
  MDBCard,
  MDBCardBody,
  MDBContainer
} from 'mdb-react-ui-kit';
import Rating from './Rating';
import UserInput from './UserInput';
import UserProfile from './UserProfile';

export default function ReviewModal() {
  const [basicModal, setBasicModal] = useState(false);
  const [selectedPhotoName, setSelectedPhotoName] = useState('');

  const toggleOpen = () => setBasicModal(!basicModal);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhotoName(file.name);
    }
  };

  const triggerFileSelect = () => {
    document.getElementById('upload-photo').click();
  };

  return (
    <>
      <MDBBtn onClick={toggleOpen} color='primary'>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog centered scrollable size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='text-center'>Hostel Name</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody style={{ overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none', maxHeight: '400px' }}>
              <MDBContainer className='d-flex flex-column align-items-center'>
                <UserProfile />
                <Rating />
                <UserInput styles={{ width: '100%', marginTop: '20px' }} />
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
              <MDBBtn color='secondary' onClick={toggleOpen}>Submit Review</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
