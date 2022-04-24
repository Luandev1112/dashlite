import React, { useState } from "react";
import Logo from "../../images/logo_white.svg";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
  Row,
  Col,
} from "../../components/Component";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [passState, setPassState] = useState(false);
  const [errorVal, setError] = useState("");

  const onFormSubmit = (formData) => {
    setLoading(true);
    const loginName = "info@softnio.com";
    const pass = "123456";
    if (formData.name === loginName && formData.passcode === pass) {
      localStorage.setItem("accessToken", "token");
      setTimeout(() => {
        window.history.pushState(
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`,
          "auth-login",
          `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/"}`
        );
        window.location.reload();
      }, 2000);
    } else {
      setTimeout(() => {
        setError("Cannot login with credentials");
        setLoading(false);
      }, 2000);
    }
  };

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Login" />
      <PageContainer>
        <Block className="nk-block-middle nk-auth-body">
          <Row>
            <Col lg="8" className="auth-col">
              <Block className="text-center base-block" bodyClass="card-inner-lg">
                <BlockHead>
                  <BlockContent>
                    <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
                      <img className="logo-dark logo-img" src={Logo} alt="logo" />
                      <BlockTitle tag="h4">TrustBase</BlockTitle>
                    </Link>
                    <BlockTitle className="base-title" tag="h4">
                      <i>Ease </i> and <i>security </i> at <br />
                      your fingertips
                    </BlockTitle>
                    <BlockDes className="base-description">
                      TrustBase enables you to securely and <br />
                        easily borrow / lend money
                    </BlockDes>
                  </BlockContent>
                </BlockHead>
              </Block>
            </Col>
            <Col lg="4" className="auth-col">
              <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
                <BlockHead>
                  <BlockContent>
                    <BlockTitle tag="h4">Register</BlockTitle>
                    <BlockDes className="account">
                      New Account
                    </BlockDes>
                  </BlockContent>
                </BlockHead>
                {errorVal && (
                  <div className="mb-3">
                    <Alert color="danger" className="alert-icon">
                      {" "}
                      <Icon name="alert-circle" /> Unable to login with credentials{" "}
                    </Alert>
                  </div>
                )}
                <Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-01">
                        Email Address
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        id="default-01"
                        name="name"
                        ref={register({ required: "This field is required" })}
                        defaultValue="info@softnio.com"
                        placeholder="Enter your email address or username"
                        className="form-control-lg form-control"
                      />
                      {errors.name && <span className="invalid">{errors.name.message}</span>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="form-control-wrap">
                      <a
                        href="#password"
                        onClick={(ev) => {
                          ev.preventDefault();
                          setPassState(!passState);
                        }}
                        className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
                      >
                        <Icon name="eye" className="passcode-icon icon-show"></Icon>

                        <Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
                      </a>
                      <input
                        type={passState ? "text" : "password"}
                        id="password"
                        name="passcode"
                        defaultValue="123456"
                        ref={register({ required: "This field is required" })}
                        placeholder="Enter your passcode"
                        className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
                      />
                      {errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button size="lg" className="btn-block" type="submit" color="success">
                      {loading ? <Spinner size="sm" color="light" /> : "Register"}
                    </Button>
                  </FormGroup>
                </Form>
                <div className="form-note-s2 text-center pt-4">
                  {" "}
                  Aleady have an account? <Link className="link-success" to={`${process.env.PUBLIC_URL}/auth-login`}>Login</Link>
                </div>
              </PreviewCard>
            </Col>
          </Row>
          
        </Block>
      </PageContainer>
    </React.Fragment>
  );
};
export default Register;
