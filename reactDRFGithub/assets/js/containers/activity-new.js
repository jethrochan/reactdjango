import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
//Project Specific
import {createActivity} from '../actions';

class ActivityNew extends Component {

  renderField(field) {
    const { meta: {touched, error} } = field; //destructuring
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  renderTextArea(field) {
    const { meta: {touched, error} } = field; //destructuring
    const className = `form-group ${ touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <textarea
          className="form-control"
          type="text"
          rows="6"
          placeholder="Enter a Description"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log("OnSubmit Called");
    console.log(values);
    this.props.createActivity(values, () => {
      this.props.history.push('/fistbump/');
    });
  }

  render() {

    const { handleSubmit } = this.props; //created through reduxform connect wrapper

    return(
      <div className="col-sm-10 col-sm-offset-1 expandedBox">
        <h2><strong>Create a new activity</strong></h2>

        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className="row">
            <div className="col-sm-12">
              <Field
                label="Title"
                name="title"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-12">
              <Field
                label="Description"
                name="description"
                component={this.renderTextArea}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <Field
                label="City"
                name="city"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-4">
              <Field
                label="State"
                name="state"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-4">
              <Field
                label="Country"
                name="country"
                component={this.renderField}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/fistbump/" className="btn btn-danger">Cancel</Link>
            </div>
          </div>

        </form>
      </div>
    ); //return
  }//render()

}//component ActivityNew

function validate(values) { //param by convention, all values user entered into form as an dict { title: 'abcd', description: 'dsa'}
  //return a object we create, if errors object {} empty, then no errors
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a Title";
  }
  if(!values.description) {
    errors.description = "Enter a description";
  }
  if(!values.city) {
    errors.city = "Enter a city";
  }
  if(!values.state) {
    errors.state = "Enter a state";
  }
  if(!values.country) {
    errors.country = "Enter a country";
  }
  return errors;
}

export default reduxForm({ //replaces generic "connect"
  validate, //ie: validate:validate shorthand
  form: 'ActivityNewForm' //specific naming of the value allows multiple forms to be in one screen
})(
  connect(null, { createActivity })(ActivityNew)
); //allows reduxForm to communicate directly with reducer
