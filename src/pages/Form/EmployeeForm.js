import React, { Component } from 'react';
import 'react-telephone-input/lib/withStyles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class EmployeeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      formControls: {
        
        companyName:{
          placeholder: 'e.g. Google',
          value:'',
        },
        jobTitle: {
          value: '',
          placeholder: 'e.g. UI Designer',
        },
        experience: {
          value: '',
          placeholder: 'e.g. 2years',
        },
        description: {
          value: '',
          placeholder: 'e.g. sunder.pichayi@gmail.co.in',
          touched: false
        },
      },
      startDate: "",
      endDate: ""
    }
  }
  
  //on change for Date of Birth
  setStartDate = date => {
    if(date === ''){
      document.getElementById('startDate').parentElement.parentElement.parentElement.classList.add('has-error')
    }else{
        document.getElementById('startDate').parentElement.parentElement.parentElement.classList.remove('has-error')
    }
    this.setState({
      startDate: date
    });
  };
  setEndDate = date => {
    if(date ===''){
      document.getElementById('endDate').parentElement.parentElement.parentElement.classList.add('has-error')
    }else{
        document.getElementById('endDate').parentElement.parentElement.parentElement.classList.remove('has-error')
    }
    this.setState({
      endDate: date
    });
  };
  onSubmit(e){
    e.preventDefault();
    const invalidElmsInput = document.querySelectorAll(".form-group input:invalid");
    for (let i = 0; i < invalidElmsInput.length; i++) {
        invalidElmsInput[i].parentElement.classList.add("has-error")
    }
    if(this.state.startDate ===''){
        document.getElementById('startDate').parentElement.parentElement.parentElement.classList.add('has-error')
    }else{
        document.getElementById('startDate').parentElement.parentElement.parentElement.classList.remove('has-error')
    }
    if(this.state.endDate === ''){
        document.getElementById('endDate').parentElement.parentElement.parentElement.classList.add('has-error')
    }else{
        document.getElementById('endDate').parentElement.parentElement.parentElement.classList.remove('has-error')
    }
  }
  onChange(e){
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
    updatedFormElement.value = value 

    updatedControls[name] = updatedFormElement; 
    this.setState({
      formControls: updatedControls,
    });
  }
  render() {
    return (
        <div className="dashboard-content-container">
            <div className="row">
                <div className="col-8 col-md-8">
                <h2>Employee Form</h2>
                <form onSubmit={this.onSubmit.bind(this)} noValidate={true}>
                <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 mar-xs-30">
                                <div className="section_content">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Job Title<span className="req">*</span></label>
                                                <input name="jobTitle" 
                                                       className="form-ctrl"
                                                           type="text"
                                                           required={true}
                                                           minLength={3}
                                                           maxLength={40}
                                                           placeholder={this.state.formControls.jobTitle.placeholder}
                                                           value={this.state.formControls.jobTitle.value}
                                                           onChange={this.onChange.bind(this)}
                                                />
                                              <p className="error">
                                                    Please give the job title.
                                                    (Min 3 characters required)
                                            </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label>Description<span className="req">*</span></label>
                                                <input name="description"  type="text"
                                                            required={true}
                                                            minLength={3}
                                                            maxLength={10}
                                                            className="form-ctrl"
                                                            // pattern={"([a-zA-Z]\.+\\s)*[a-zA-Z]+$"}
                                                            placeholder={this.state.formControls.description.placeholder}
                                                            value={this.state.formControls.description.value}
                                                            onChange={this.onChange.bind(this)}
                                                            
                                                />
                                                <p className="error">
                                                    Please give the description.
                                                    (Min 10 characters required)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-md-4">
                                      <div className="form-group">
                                                <label>Company Name<span className="req">*</span></label>
                                                    <input name="companyName" 
                                                          className="form-ctrl"
                                                              type="text"
                                                              required={true}
                                                              minLength={3}
                                                              maxLength={40}
                                                              placeholder={this.state.formControls.companyName.placeholder}
                                                              value={this.state.formControls.companyName.value}
                                                              onChange={this.onChange.bind(this)}
                                                    />
                                             <p className="error">
                                                    Please give company name.
                                            </p>
                                            </div> 
                                      </div>
                                        <div className="col-12 col-sm-12 col-md-12 mar-xs-30">
                                          
                                            <label><strong>Experience</strong></label>
                                            <div className="row">
                                        
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label>From<span className="req">*</span></label>
                                                    <DatePicker
                                                       selected={this.state.startDate}
                                                       onChange={this.setStartDate.bind(this)}
                                                       selectsStart
                                                       id="startDate"
                                                       placeholderText="Start Date"
                                                       startDate={this.state.startDate}
                                                       endDate={this.state.endDate}
                                                       showMonthDropdown className="form-ctrl" showYearDropdown
                                                    />
                                             <p className="error">
                                                    Please select start date.
                                            </p>
                                            </div> 
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                            
                                                <label>To<span className="req">*</span></label>
                                                    <DatePicker
                                                       selected={this.state.endDate}
                                                       onChange={this.setEndDate.bind(this)}
                                                       selectsEnd
                                                       id="endDate"
                                                       placeholderText="End Date"
                                                       endDate={this.state.endDate}
                                                       minDate={this.state.startDate}
                                                       showMonthDropdown className="form-ctrl" showYearDropdown
                                                    />
                                             <p className="error">
                                                    Please select end date.
                                            </p>
                                            </div> 
                                        </div>
                                     
                                        </div>
                                        </div>
                                    </div>
                                     
                            </div>
                            <div className="form-group">
                            <button type="submit" className="btn mt-30">  Submit </button>
                            </div>
                        </div>
                        
                    </div>
                </form>
                </div>
            </div>
      </div>
    );

  }
}

export default EmployeeForm;
