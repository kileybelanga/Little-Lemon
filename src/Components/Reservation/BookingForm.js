import React from "react";
import { useState } from "react";
import { validateEmail } from "./utils";

function BookingForm() {


      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] =useState("");
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
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
      };
      
    return (
        <React.Fragment>
            <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Make a Reservation</h2>
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
            <label>Last name</label>
            <input placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
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
    
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
      </div>
    </React.Fragment>
    );
  }
  export default BookingForm;