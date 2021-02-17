import React from 'react';
import './RegistrationForm.css'
import  RegistrationService from '../../services/RegistrationService'

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            addressline1: '',
            addressline2: '',
            mobileNo: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit = e => {
        // e.preventDefault();
        console.log(this.state);
        RegistrationService.registerUser(this.state)
        .then(response=>{
            alert(response.data.msg);
        })
        .catch(err=>{
            alert("Registration was unsuccessful. Please try again later!");
        });
    }
    render() {
        const { name, email, addressline1, addressline2, mobileNo } = this.state;
        return (
            <div className="container-fluid main-content-div">
                <form onSubmit={this.handleFormSubmit}>
                    <div className="form-group row field-container">
                        <label htmlFor="name" className="col-sm-1 col-form-label">Name</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.changeHandler} placeholder="Name" autoFocus required></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label htmlFor="email" className="col-sm-1 col-form-label">Email</label>
                        <div className="col-sm-4">
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.changeHandler} placeholder="Email" required></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label htmlFor="addressline1" className="col-sm-1 col-form-label">Address</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="addressline1" name="addressline1" value={addressline1} onChange={this.changeHandler} placeholder="Address line 1" required></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="addressline2" name="addressline2" value={addressline2} onChange={this.changeHandler} placeholder="Address line 2" required></input>
                        </div>
                    </div>
                    <div className="form-group row field-container">
                        <label htmlFor="mobileNo" className="col-sm-1 col-form-label">Phone no.</label>
                        <div className="col-sm-4">
                            <input type="number" className="form-control" id="mobileNo" name="mobileNo" value={mobileNo} onChange={this.changeHandler} placeholder="Phone Number" required></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-1 submit-btn">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegistrationForm;