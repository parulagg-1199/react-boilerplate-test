import React, { Component } from 'react';
import { putData } from './actions';
import { getData, getDataWithId } from '../../integration/ListData/actions'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import '../dist/style.css'

class EditData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formControls: {
                title: {
                    value: '',
                    placeholder: 'Add image title',
                    touched: false
                },
                image: {
                    value: '',
                    placeholder: 'Add image URL',
                    touched: false
                },
            }
        }
    }

    componentDidMount() {
        console.log('component', this.props.dataWithId);
        const { id } = this.props.match.params;
        console.log('componentDidMount', id);
        // //this.props.getDataWithId(id);
        // //const { title, image } = this.props.dataWithId;
        // this.setState({
        //   title,
        //   image
        // });
    }

    formSubmitHandler = (e) => {
        e.preventDefault();

        const { title, image } = this.state

        const { id } = this.props.match.params;

        const updData = {
            id,
            title,
            image
        }

        this.props.putData(updData)
        alert("Image has been updated successfully")

        //To clear data
        this.setState({
            title: '',
            image: ''
        });
        this.props.getData()

        const invalidElmsInput = document.querySelectorAll(".form-group input:invalid");

        for (let i = 0; i < invalidElmsInput.length; i++) {
            invalidElmsInput[i].parentElement.classList.add("has-error")
        }
    }

    onTitleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        if (event.target.checkValidity()) {
            event.target.parentElement.classList.remove('has-error');
        } else {
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

    onImageChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        if (event.target.checkValidity()) {
            event.target.parentElement.classList.remove('has-error');
        } else {
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

    render() {
        const { title, image } = this.state;
        return (
            <div className="dashboard-content-container">
                <h2>Update Image</h2>
                <div className="row">

                    <div className="col-sm-8">

                        <form onSubmit={this.formSubmitHandler.bind(this)} noValidate={true}>
                            <div className="form-div">

                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label>Title<span className="req">*</span></label>
                                            <input name="title"
                                                className="form-ctrl"
                                                type="text"
                                                required={true}
                                                minLength={3}
                                                maxLength={40}
                                                pattern={"([a-zA-Z]\.+\\s)*[a-zA-Z]+$"}
                                                placeholder={this.state.formControls.title.placeholder}
                                                value={title}
                                                onChange={this.onTitleChange.bind(this)}
                                            />
                                            <p className="error">
                                                Only Alphabets are accepted.
                                                (Min 3 characters required)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-md-4">
                                        <div className="form-group">
                                            <label>Image URL<span className="req">*</span></label>
                                            <input name="image" type="text"
                                                required={true}
                                                minLength={3}
                                                maxLength={40}
                                                className="form-ctrl"
                                                pattern={"([a-zA-Z]\.+\\s)*[a-zA-Z]+$"}
                                                placeholder={this.state.formControls.image.placeholder}
                                                value={image}
                                                onChange={this.onImageChange.bind(this)}
                                            />
                                            <p className="error">
                                                Please enter valid URL
                                            </p>
                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn mt-30" >  Submit </button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }

}

function mapStateToProps(state) {
    const { data, dataWithId } = state.ImageEditReducer;
    return { data, dataWithId }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: get => dispatch(getData(get)),
        getDataWithId: gett => dispatch(getDataWithId(gett)),
        putData: put => dispatch(putData(put))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditData));



