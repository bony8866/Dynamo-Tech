import React from 'react';
import './RegistrationForm.css'

class RegistrationForm extends React.Component {
    render() {
        return(
            <div className="container-fluid main-content-div">
                <form>
                    <div className="form-group row field-container">
                        <label for="name" className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-4">
                        <input type="text" className="form-control" id="name" placeholder="Name" autoFocus></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label for="email" className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-4">
                        <input type="email" className="form-control" id="email" placeholder="Email"></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label for="addressline1" className="col-sm-1 col-form-label">Address</label>
                        <div className="col-sm-4">
                        <input type="text" className="form-control" id="addressline1" placeholder="Address line 1"></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="addressline2" placeholder="Address line 2"></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label for="mobileNo" className="col-sm-1 col-form-label">Phone no.</label>
                        <div className="col-sm-4">
                        <input type="number" className="form-control" id="mobileNo" placeholder="Phone Number"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-1 submit-btn">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegistrationForm;