import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

export class Contact extends Component {
  render() {
    const { values, errors, touched, isSubmitting } = this.props;

    return (
      <Form>
        <div className="form-row">
          <div className="form-group col-md-12 mt-3">
            {touched.name && errors.name ? (
              <p className="alert alert-danger"> {errors.name} </p>
            ) : (
              <p>First name:</p>
            )}
            <Field
              className="form-control"
              type="text"
              name="name"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            {touched.sname && errors.sname ? (
              <p className="alert alert-danger"> {errors.sname} </p>
            ) : (
              <p>Surname:</p>
            )}
            <Field
              className="form-control"
              type="text"
              name="sname"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            {touched.email && errors.email ? (
              <p className="alert alert-danger"> {errors.email} </p>
            ) : (
              <p>Email:</p>
            )}
            <Field
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            {touched.message && errors.message ? (
              <p className="alert alert-danger"> {errors.message} </p>
            ) : (
              <p>Message:</p>
            )}
            <Field
              className="form-control"
              component="textarea"
              name="message"
              placeholder="Message"
            />
          </div>
        </div>
        <button type="submit">submit</button>
      </Form>
    );
  }
}

export const ContactFormik = withFormik({
  mapPropsToValues({ name, sname, email, message }) {
    return {
      name: name || "",
      sname: sname || "",
      email: email || "",
      message: message || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3)
      .required("Name is required!"),
    sname: Yup.string()
      .min("Surname is required")
      .required("Password is required!"),
    email: Yup.string()
      .email()
      .required("Email is required!"),
    message: Yup.string()
      .min(10)
      .required("Message is required! :) ")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(Contact);
