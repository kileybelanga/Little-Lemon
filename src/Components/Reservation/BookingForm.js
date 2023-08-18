import React from "react";
import { useState } from "react";
import { validateEmail } from "./utils";
import './Booking.css';
import './AvailableTimes.js';
import AvailableTimes from "./AvailableTimes.js";


function BookingForm() {


      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] =useState("");
      const [numOfGuest, setNumOfGuest] = useState('')
      const[date, setDate]=useState();
      const[occassion,setOccassion]=useState();
      const[time]=useState(  [
        { id: 0, value: 'four', time: '4:00 PM' },
        { id: 1, value: 'five', time: '5:00 PM' },
        { id: 2, value: 'six', time: '6:00 PM' },
        { id: 3, value: 'seven', time: '7:00 PM' },
        { id: 4, value: 'eight', time: '8:00 PM' },
    ]);
      const getIsFormValid = () => {
        return (
          firstName &&
          validateEmail(email)
        )
      };

      const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setNumOfGuest("");
        setDate("");
        setOccassion("");
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your reservation!");
        clearForm();
      };

    return (
        <React.Fragment>

      <form id="reservation"onSubmit={handleSubmit}>
        <fieldset>
          <h2>Make a Reservation</h2>
         <div>
          <div className="Field">
            <label>
              First Name <sup>*</sup>
            </label>
            <input 
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="Field">
            <label>Last Name <sup>*</sup></label>
            <input placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          </div>
          <div>
          <div className="Field">
            <label>
              Email Address <sup>*</sup>
            </label>
            <input placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>Phone Number<sup>*</sup>
            </label>
            <input placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          </div>
          <div>
          <div className="Field">
            <label>Date<sup>*</sup></label>
            <input type="date"
            value={date}></input>
          </div>
          <div className="Field">
            <label>Time<sup>*</sup></label>
           <AvailableTimes time={time}/>
          </div>
          </div>

          <div>
            <div className="Field">
            <label>
              Number of Guest <sup>*</sup>
            </label>
            <input 
              placeholder="Number of Guest"
              type='number'
              value={numOfGuest}
              onChange={(e) => setNumOfGuest(e.target.value)} />
            </div>
            <div className="Field">
          <label>Occassion <sup>*</sup></label>
          <select value={occassion}>
            <option value="anniversay">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="specialOccassion">Special Occassion</option>
          </select>
          </div>
          </div>

          <button className="button-primary" type="submit" disabled={!getIsFormValid()}>
        Submit
     </button>
        </fieldset>
      </form>
     
    </React.Fragment>
    );
  }
  export default BookingForm;