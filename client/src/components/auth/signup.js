import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component{

    handleFormSubmit(formProps){
        //call action creator to sign up the user!
        this.props.signupUser(formProps);
    }

    renderAlert(){
        if(this.props.errorMessage){
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    render() {
        const {handleSubmit, fields: {email, password, confirmPassword}} = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" {...email} />
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" {...password} />
                    {password.touched && password.error && <div className="error">{password.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" {...confirmPassword} />
                    {confirmPassword.touched && confirmPassword.error && <div className="error">{confirmPassword.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign Up!</button>
            </form>
        )
    }
}

function validate(formProps){
    const errors = {};

    if(!formProps.email){
        errors.email = 'Please enter an Email';
    }

    if(!formProps.password){
        errors.password = 'Please enter a password';
    }

    if(!formProps.confirmPassword){
        errors.confirmPassword = 'Please enter a password confirmation'
    }

    /*console.log(formProps);*/
    if(formProps.password !== formProps.confirmPassword){
        errors.confirmPassword = 'Password must match!'
    }

    return errors;
}


function mapStateToProps(state) {
    return {errorMessage: state.auth.error}
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'confirmPassword'],
    validate
}, mapStateToProps, actions)(Signup)