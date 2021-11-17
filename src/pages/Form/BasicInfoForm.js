import React, { Component } from 'react';
import ReactTelInput from 'react-telephone-input';
import ReactTooltip from 'react-tooltip';
import 'react-telephone-input/lib/withStyles';
import './dist/style.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BasicInfoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        firstname: {
          value: '',
          placeholder: 'e.g. Sunder',
          touched: false
        },
        lastname: {
            value: '',
            placeholder: 'e.g. Pichai',
            touched: false
          },
        
        my_email: {
          value: '',
          placeholder: 'e.g. sunder.pichai@gmail.com',
          touched: false
        },
        official_email: {
          value: '',
          placeholder: 'e.g. sunder.pichayi@gmail.com',
          touched: false
        },
        sub_domain_email: {
          value: '',
          placeholder: 'e.g. sunder.pichayi@gmail.co.in',
          touched: false
        },
        phoneno: {
            value: '',
            placeholder: 'Phone Number',
            touched: false
          },
        gender: {
          value: '',
          
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 'Chandigarh', label: 'Chandigarh' },
            { value: 'strawberry', label: 'Himachal Pardesh' },
            { value: 'vanilla', label: 'Vanilla' },
          ]
        },
        states: {
          value: '',
          
          touched: false,
         
          options: [
            { value: 'punjab', label: 'Punjab' },
            { value: 'Himachal Pardesh', label: 'Himachal Pardesh' },
            { value: 'Uttrakhand', label: 'Uttrakhand' },
            { value: 'Gujrat', label: 'Gujrat' }
          ]
        },
        password: {
            value: '',
            placeholder: 'Password',
            touched: false
          },
        cpassword: {
            value: '',
            placeholder: 'Confirm Password',
            touched: false
          },
      },
      dob: ""
    }
  }
  //on change for Date of Birth
  handleChange = date => {
    this.setState({
      dob: date
    });
  };
  
  onNameChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    if(event.target.checkValidity()){
        event.target.parentElement.classList.remove('has-error');
    }else{
        event.target.parentElement.classList.add('has-error');
    }
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...this.state.formControls[name]
    };
    updatedFormElement.value = value.replace(/  +/g, ' ');

    updatedControls[name] = updatedFormElement;
    this.setState({
      formControls: updatedControls,
    });
  }

  //on submit function
  formSubmitHandler = (e) => {
    e.preventDefault()
    const formData = {};
    const invalidElmsInput = document.querySelectorAll(".form-group input:invalid");
    const invalidElmsEmailInput = document.querySelectorAll(".form-group input[type=email]");
    let phoneNo = document.querySelector('input[type="tel"]')
    for (let i = 0; i < invalidElmsInput.length; i++) {
        invalidElmsInput[i].parentElement.classList.add("has-error")
        invalidElmsEmailInput[i].parentElement.classList.add("has-error")
    }
    ////////Date of birth//////////
    if(this.state.dob ===''){
      document.getElementById('dob').parentElement.parentElement.parentElement.classList.add('has-error')
    }
    else{
      document.getElementById('dob').parentElement.parentElement.parentElement.classList.remove('has-error')
    }
    ///////////password/////////////
    if(this.state.formControls.password.value === '' ){
      document.getElementById('password').parentElement.parentElement.classList.add('has-error')
    }else{
      document.getElementById('password').parentElement.parentElement.classList.remove('has-error')
    }
    ////////////confirm password/////////
    if(this.state.formControls.cpassword.value === '' ){
      document.getElementById('cpassword').parentElement.classList.add('has-error')
    }else{
      document.getElementById('cpassword').parentElement.classList.remove('has-error')
    }
    //////////phone number//////
    if(phoneNo.value.toString().length <= 3)
    {
      phoneNo.parentElement.parentElement.classList.add('has-error')
    }else{
      phoneNo.parentElement.parentElement.classList.remove('has-error')
    }
    for (let formElementId in this.state.formControls) {
          formData[formElementId] = this.state.formControls[formElementId].value;
    }
  }

  //on change for phone nuber input
  onPhoneInputChange(telNumber, selectedCountry, e){
    let phoneNo = document.querySelector('input[type="tel"]')
    document.getElementById('digitCount').innerHTML = selectedCountry.format.length -5
    phoneNo.setAttribute('maxlength', selectedCountry.format.length);
    if(telNumber.length !== selectedCountry.format.length){
      // phone.setCustomValidity('Please enter the valid phone number.');
      phoneNo.parentElement.parentElement.classList.add('has-error');
      }else{
          phoneNo.parentElement.parentElement.classList.remove('has-error');
      }
  }
  // onChange for email id's
  onEmailChange(e){
    const name = e.target.name;
    const value = e.target.value;
    if(e.target.checkValidity()){
      e.target.parentElement.classList.remove('has-error');
    }else{
      e.target.parentElement.classList.add('has-error');
    }
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...this.state.formControls[name]
    };
    updatedFormElement.value = value.replace(/  +/g, ' ');

    updatedControls[name] = updatedFormElement;
    this.setState({
      formControls: updatedControls,
    });
  }

  //onChange for password and confirm password
  handlePasswordChange(e){
    const name = e.target.name;
    const value = e.target.value;
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...this.state.formControls[name]
    };
    updatedFormElement.value = value;

    updatedControls[name] = updatedFormElement;
    this.setState({
      formControls: updatedControls,
    });
    if(e.target.checkValidity()){
        e.target.parentElement.parentElement.classList.remove('has-error');
            if(this.state.formControls.cpassword.value !== ''){
              this.checkPassword();
            }
    }
    else{ 
        e.target.parentElement.parentElement.classList.add('has-error');
    }
  }

  //function for change the type of password from password to text
  changePasswordType() {
    //to show and hide the password
    const password = document.getElementsByName('password')[0];
    const visibility = document.getElementsByClassName('password-outer');
    if (password.type === 'password') {
        password.setAttribute('type', 'text');
        visibility[0].childNodes[1].style.display = 'none';
        visibility[0].childNodes[2].style.display = 'block';
    } else {
        password.setAttribute('type', 'password');
        visibility[0].childNodes[1].style.display = 'block';
        visibility[0].childNodes[2].style.display = 'none';
    }
  }

  //comparing password and confirm password
  checkPassword(){
    const password = document.getElementsByName('password'),
        confirmPassword = document.getElementById('cpassword');
    if(password === confirmPassword ){
      document.getElementById('cpassword').parentElement.parentElement.classList.remove('has-error');
        return true
    }
    else{
      document.getElementById('cpassword').parentElement.parentElement.classList.add('has-error');
        return false
    }
  } 
  render() {
    return (
        <div className="dashboard-content-container">
            <h2>Registration Form</h2>
            <div className="row">

                <div className="col-8 col-md-8">
                
                <form onSubmit={this.formSubmitHandler.bind(this)} noValidate={true}>
                <div className="form-div">
                
                                    <div className="row">
                                        <div className="col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label>First Name<span className="req">*</span></label>
                                                <input name="firstname" 
                                                       className="form-ctrl"
                                                           type="text"
                                                           required={true}
                                                           minLength={3}
                                                           maxLength={40}
                                                           pattern={"([a-zA-Z]\.+\\s)*[a-zA-Z]+$"}
                                                           placeholder={this.state.formControls.firstname.placeholder}
                                                           value={this.state.formControls.firstname.value}
                                                           onChange={this.onNameChange.bind(this)}
                                                />
                                              <p className="error">
                                                    Only Alphabets are accepted.
                                                    (Min 3 characters required)
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label>Last Name<span className="req">*</span></label>
                                                <input name="lastname"  type="text"
                                                            required={true}
                                                            minLength={3}
                                                            maxLength={40}
                                                            className="form-ctrl"
                                                            pattern={"([a-zA-Z]\.+\\s)*[a-zA-Z]+$"}
                                                            placeholder={this.state.formControls.lastname.placeholder}
                                                            value={this.state.formControls.lastname.value}
                                                            onChange={this.onNameChange.bind(this)}
                                                            
                                                />
                                                <p className="error">
                                                    Only Alphabets are accepted.
                                                    (Min 3 characters required)
                                                </p>
                                            </div>
                                           
                                        </div>
                                       
                                        <div className="col-sm-4 col-md-4">
                                            <div className="form-group">
                                                <label>Date of Birth<span className="req">*</span></label>
                                                 
                                                    <DatePicker
                                                      selected={this.state.dob}
                                                      onChange={this.handleChange.bind(this)}
                                                      selectsStart
                                                      id="dob"
                                                      className="form-ctrl"
                                                      placeholderText="Date of Birth"
                                                      dateFormat="dd-M-yyyy"
                                                    />
                                             <p className="error">
                                                    Please enter your Date of Birth.
                                            </p>
                                            </div> 
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <div className="form-group">
                                      
                                                <label>Phone Number<span className="req">*</span></label>
                                                <ReactTelInput
                                                         flagsImagePath={require('../../static/images/flags.png')}
                                                         preferredCountries={['us', 'in', 'gb']}
                                                         defaultCountry={"in"}
                                                         onChange={this.onPhoneInputChange.bind(this)}
                                                    />
                                             <p className="error">
                                                    Please enter a valid phone number. Max <p style ={{display:"inline"}} id="digitCount"></p> digits allowed
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Email Address<span className="req">*</span></label>
                                                <input name="my_email" type="email"
                                                            placeholder={this.state.formControls.my_email.placeholder}
                                                            value={this.state.formControls.my_email.value}
                                                            onChange={this.onEmailChange.bind(this)}
                                                            pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)((\.[-\w\d]{2,3})))$"
                                                            className="form-ctrl"
                                                />
                                                <p className="error">
                                                    Please enter a valid email id.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Official Email Address<span className="req">*</span></label>
                                                <input name="official_email" type="email"
                                                            placeholder={this.state.formControls.official_email.placeholder}
                                                            value={this.state.formControls.official_email.value}
                                                            onChange={this.onEmailChange.bind(this)}
                                                            pattern="^([-\w\d]+)(\.[-\w\d]+)*@((?!gmail.)(?!yahoo.)(?!ymail.)(?!hotmail.)[-\w\d]+)(\.[-\w\d]{2,})$"
                                                            className="form-ctrl"
                                                />
                                                <p className="error">
                                                    Please enter a valid official email id.
                                                </p>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Official Email Address(with two subdomain)<span className="req">*</span></label>
                                                <input name="sub_domain_email" type="email"
                                                            placeholder={this.state.formControls.sub_domain_email.placeholder}
                                                            value={this.state.formControls.sub_domain_email.value}
                                                            onChange={this.onEmailChange.bind(this)}
                                                            pattern="^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)((\.[-\w\d]{2,3}){1,2}))$"
                                                            className="form-ctrl"
                                                />
                                                <p className="error">
                                                    Please enter a valid email id.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                        
                                            <div className="form-group" >
                                            <label>Password<span className="req">*</span></label>
                                            <div className="password-outer">
                                            <input type="password"
                                                       name="password"
                                                       outerClass="input-ctrl"
                                                       minLength={6}
                                                       required={true}
                                                       onChange={this.handlePasswordChange.bind(this)}
                                                       autocomplete="off"
                                                       placeholder="Password"
                                                       id="password"
                                                       className="form-ctrl"
                                                       value={this.state.formControls.password.value}
                                                       pattern={"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"}
                                            />
                                            <i className="material-icons"  data-tip data-for={"visibility_off"}
                                               onClick={this.changePasswordType.bind(this)}>visibility_off</i>
                                            <i className="material-icons" data-tip data-for={"visibility_on"} onClick={this.changePasswordType.bind(this)}
                                               style={{display: 'none'}}>visibility</i>
                                             <ReactTooltip id={"visibility_off"} type="dark" place="top" effect='solid'>
                                                 Show Password
                                             </ReactTooltip>
                                             <ReactTooltip id={"visibility_on"} type="dark" place="top" effect='solid'>
                                                 Hide Password
                                             </ReactTooltip>
                                            <p className="error" style={{color: "unset"}}>Enter your
                                                   password (<span
                                                       style={{color: `${this.state.formControls.password.value.length >= 8 ? "green" : "#f03030"}`}}>Min 8 char.</span>, <span
                                                       style={{color: `${this.state.formControls.password.value.match("(?=.*?[A-Z])") ? "#279627" : "#f03030"}`}}>at least one uppercase letter</span>, <span
                                                       style={{color: `${this.state.formControls.password.value.match("(?=.*?[a-z])") ? "#279627" : "#f03030"}`}}>one lowercase letter</span>, <span
                                                       style={{color: `${this.state.formControls.password.value.match("(?=.*?[0-9])") ? "#279627" : "#f03030"}`}}>one number and </span>
                                                   <span
                                                       style={{color: `${this.state.formControls.password.value.match("(?=.*?[#?!@$%^&*-])") ? "#279627" : "#f03030"}`}}>one special character required</span>).
                                              </p>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                            <div className="form-group">
                                             
                                                <label>Confirm Password<span className="req">*</span></label>
                                                <input name="cpassword" id="cpassword"  type="password"
                                                            className="form-ctrl"
                                                            placeholder={this.state.formControls.cpassword.placeholder}
                                                            value={this.state.formControls.cpassword.value}
                                                            onChange={this.handlePasswordChange.bind(this)}
                                                />
                                                <p className="error">Password doesn't match.</p>
                                            </div>
                                        </div>
                                      
                                    </div>
                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn mt-30">  Submit </button>
                            
                </div>
                </form>
                </div>
            </div>
      </div>
    );

  }
}

export default BasicInfoForm;
