import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

export class Contact extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;

    return (
      <Form action="https://formspree.io/lkubok@gmail.com">
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
        <div className="container d-flex flex-column justify-content-center p-0">
          <button
            disabled={isSubmitting}
            className="btn btn-secondary mt-4 mb-4"
            type="submit"
          >
            Send
          </button>
        </div>
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
      .min(3)
      .required("Surname is required!"),
    email: Yup.string()
      .email()
      .required("Email is required!"),
    message: Yup.string()
      .min(10)
      .required("Message is required! :) ")
  }),
  handleSubmit(values, { setSubmitting, resetForm }) {
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 3000);
  }
})(Contact);
