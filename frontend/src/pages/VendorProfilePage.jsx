import  { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const VendorProfilePage = () => {
  const { vendor_id } = useParams();
  const [vendorDetails, setVendorDetails] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchVendorDetails = async () => {
      try {
        const response = await fetch(
          `https://automatic-info-tracker-backend.onrender.com/service/business/${vendor_id}/`
        );
        if (response.ok) {
          const data = await response.json();
          setVendorDetails(data); // Set vendor details state
        } else {
          // Handle error response
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchVendorDetails();
  }, [vendor_id]);

  // Fetch and set reviews similar to fetching vendor details

  if (!vendorDetails) {
    return <div>Your Service is registered successfully</div>;
  }

  // Function to handle edit button click
  const handleEditClick = () => {
    // Redirect to edit page or show edit modal
    console.log("Edit button clicked");
  };

  return (
    <MDBContainer className="mt-4">
      <MDBRow>
        <MDBCol>
          <h2>Vendor Profile</h2>
          <hr />

          {/* Vendor Details */}
          <h4>Details</h4>
          <MDBListGroup>
            <MDBListGroupItem>
              <strong>Name:</strong> {vendorDetails.name}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Email:</strong> {vendorDetails.email}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Phone Number:</strong> {vendorDetails.phoneNumber}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Address:</strong> {vendorDetails.address}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Type:</strong> {vendorDetails.type}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Shared Rooms:</strong>{" "}
              {vendorDetails.sharedRooms ? "Yes" : "No"}
            </MDBListGroupItem>
            {vendorDetails.sharedRooms && (
              <MDBListGroupItem>
                <strong>Roommates:</strong> {vendorDetails.roommates.join(", ")}
              </MDBListGroupItem>
            )}
            <MDBListGroupItem>
              <strong>AC Room:</strong> {vendorDetails.acRoom ? "Yes" : "No"}
            </MDBListGroupItem>
            <MDBListGroupItem>
              <strong>Food Included:</strong>{" "}
              {vendorDetails.foodIncluded ? "Yes" : "No"}
            </MDBListGroupItem>
          </MDBListGroup>

          {/* Prices */}
          <h4>Prices</h4>
          <MDBListGroup>
            {vendorDetails.prices.map((price, index) => (
              <MDBListGroupItem key={index}>
                <strong>{price.combination}:</strong> ₹{price.price}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>

          {/* Amenities */}
          <h4>Amenities</h4>
          <ul>
            {vendorDetails.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          {/* Rules and Regulations */}
          <h4>Rules and Regulations</h4>
          <p>{vendorDetails.rulesAndRegulations}</p>

          {/* Uploaded Documents */}
          <h4>Uploaded Documents</h4>
          <ul>
            {vendorDetails.documents.map((document, index) => (
              <li key={index}>{document}</li>
            ))}
          </ul>

          {/* Hostel Specific Details */}
          {vendorDetails.type === "Hostel" && (
            <>
              <h4>Hostel Details</h4>
              <MDBListGroup>
                <MDBListGroupItem>
                  <strong>Time Periods:</strong>{" "}
                  {vendorDetails.timePeriods.join(", ")}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <strong>Warden Present:</strong>{" "}
                  {vendorDetails.wardenPresent ? "Yes" : "No"}
                </MDBListGroupItem>
                {vendorDetails.wardenPresent && (
                  <MDBListGroupItem>
                    <strong>Number of Wardens:</strong>{" "}
                    {vendorDetails.wardenCount}
                  </MDBListGroupItem>
                )}
                <MDBListGroupItem>
                  <strong>In Time:</strong> {vendorDetails.inTime}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <strong>Longitude:</strong> {vendorDetails.longitude}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <strong>Latitude:</strong> {vendorDetails.latitude}
                </MDBListGroupItem>
              </MDBListGroup>
            </>
          )}

          {/* PG Specific Details */}
          {vendorDetails.type === "PG" && (
            <>
              <h4>PG Details</h4>
              <MDBListGroup>
                <MDBListGroupItem>
                  <strong>Deposit Options:</strong>{" "}
                  {vendorDetails.depositOptions.join(", ")}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <strong>Notice Periods:</strong>{" "}
                  {vendorDetails.noticePeriods.join(", ")}
                </MDBListGroupItem>
              </MDBListGroup>
            </>
          )}

          {/* Tiffin Service Specific Details */}
          {vendorDetails.type === "Tiffin Service" && (
            <>
              <h4>Tiffin Service Details</h4>
              <MDBListGroup>
                <MDBListGroupItem>
                  <strong>Vegetarian:</strong>{" "}
                  {vendorDetails.vegetarian ? "Yes" : "No"}
                </MDBListGroupItem>
                <MDBListGroupItem>
                  <strong>Delivery:</strong>{" "}
                  {vendorDetails.delivery ? "Yes" : "No"}
                </MDBListGroupItem>
              </MDBListGroup>
            </>
          )}

          {/* Reviews */}
          <h4>Reviews</h4>
          <MDBListGroup>
            {reviews.map((review) => (
              <MDBListGroupItem key={review.id}>
                <strong>{review.user}:</strong> {review.comment}
              </MDBListGroupItem>
            ))}
          </MDBListGroup>

          {/* Edit Button */}
          <MDBBtn color="primary" onClick={handleEditClick}>
            <MDBIcon fas icon="edit" /> Edit
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default VendorProfilePage;
