import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DarkImage from "../../../images/logo-dark2x.png";
import Facebook from "../../../images/socials/facebook.png";
import Twitter from "../../../images/socials/twitter.png";
import Medium from "../../../images/socials/medium.png";
import Youtube from "../../../images/socials/youtube.png";
import KYCSub from "../../../images/email/kyc-progress.png";
import KYCPen from "../../../images/email/kyc-pending.png";
import KYCApp from "../../../images/email/kyc-success.png";
import SlideA from "../../../images/slides/slide-a.jpg";
import SlideB from "../../../images/slides/slide-b.jpg";
import SlideC from "../../../images/slides/slide-c.jpg";
import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  EmailBody,
  EmailBodyContent,
  EmailFooter,
  EmailHeader,
  EmailWrapper,
  PreviewCard,
} from "../../../components/Component";

const EmailTemplate = () => {
  return (
    <React.Fragment>
      <Head title="Email Templates"></Head>
      <Content page="component">
        <BlockHead>
          <BlockContent>
            <BlockTitle tag="h2" className="fw-normal">
              Email Templates
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                In DashLite, We included 10 clean and minimalist notification email templates that is ready to use for
                your application to send emails.{" "}
                <strong className="text-primary">Stand-Alone html files found in packages</strong>.
              </p>
            </BlockDes>
          </BlockContent>
        </BlockHead>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Basis Style - Simple Email Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody>
                <EmailBodyContent className="p-3 p-sm-5">
                  <p>
                    <strong>Hello User</strong>,
                  </p>
                  <p>
                    Let's face it, sometimes you have a simple message that doesn’t need much design—but still needs
                    flexibility and reliability. Select a basic email template. Write your message. Then send with
                    confidence.
                  </p>
                  <p>
                    Its clean, minimal and pre-designed email template that is suitable for multiple purposes email
                    template.
                  </p>
                  <p>
                    Hope you'll enjoy the experience, we're here if you have any questions, drop us a line at
                    info@yourwebsite.com anytime.{" "}
                  </p>
                  <p className="mt-4">
                    ---- <br /> Regards
                    <br />
                    Abu Bin Ishtiyak
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Centered Style - Welcome Type Email Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="p-3 p-sm-5">
                  <h5 className="email-heading email-heading-s1 mb-4">
                    Hi Candy
                    <br />
                    Purchase and get lifetime update!
                  </h5>
                  <p className="fs-16px text-base">
                    Say hello to version 1.1. Introducing email template with massaging application concept and as
                    always modern, clean and easier to use.
                  </p>
                  <p>
                    Hope you'll enjoy the experience, we're here if you have any questions, drop us a line at
                    info@yourwebsite.com anytime.{" "}
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - Confirmation Email Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-3">
                  <h2 className="email-heading">Confirm Your E-Mail Address</h2>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-2">
                  <p>Hi Ishtiyak,</p>
                  <p>
                    Welcome! <br /> You are receiving this email because you have registered on our site.
                  </p>
                  <p>Click the link below to active your DashLite account.</p>
                  <p className="mb-4">This link will expire in 15 minutes and can only be used once.</p>
                  <a
                    href="#verify"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="email-btn"
                  >
                    Verify Email
                  </a>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pt-4">
                  <h6 className="email-heading-s2">or</h6>
                  <p>If the button above does not work, paste this link into your web browser:</p>
                  <a
                    href="#link"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="link-block"
                  >
                    https://dashlite.com/account?login_token=dacb711d08a0ee7bda83ce1660918c31e8b43c30
                  </a>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pt-4 pb-3 pb-sm-5">
                  <p>If you did not make this request, please contact us or ignore this message.</p>
                  <p className="email-note">
                    This is an automatically generated email please do not reply to this email. If you face any issues,
                    please contact us at help@dashlite.com
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - Welcome Email Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody>
                <EmailBodyContent className="p-3 p-sm-5">
                  <p>
                    <strong>Hi Ishtiyak,</strong>
                  </p>
                  <p>We are pleased to have you as a member of Dashlite Family.</p>
                  <p>
                    Your account is now verified and you can purchase tokens for the ICO. Also you can submit your
                    documents for the KYC from my Account page.
                  </p>
                  <p>
                    Hope you'll enjoy the experience, we're here if you have any questions, drop us a line at{" "}
                    <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a> anytime.{" "}
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - Password Reset Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-3">
                  <h2 className="email-heading">Reset Password</h2>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-2">
                  <p>Hi Ishtiyak,</p>
                  <p>Click On The link blow to reset tour password.</p>
                  <a
                    href="#resetpassword"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="email-btn"
                  >
                    RESET PASSWORD
                  </a>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pt-4 pb-3 pb-sm-5">
                  <p>If you did not make this request, please contact us or ignore this message.</p>
                  <p className="email-note">
                    This is an automatically generated email please do not reply to this email. If you face any issues,
                    please contact us at help@dashlite.com
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - Password Changed Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-3">
                  <h2 className="email-heading text-success">Password Successfully Changed</h2>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5">
                  <p>Hi Ishtiyak,</p>
                  <p>You have successfully reseted your password. Thanks for being with us.</p>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pt-4 pb-3 pb-sm-5">
                  <p className="email-note">
                    This is an automatically generated email please do not reply to this email. If you face any issues,
                    please contact us at help@dashlite.com
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - KYC Submission Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-4">
                  <img className="w-100px" src={KYCSub} alt="In Process" />
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-3 pb-sm-5">
                  <h5 className="text-primary mb-3">Your application under varification process.</h5>
                  <p>
                    We are still working on your identity verification. Once our team verified your indentity, you will
                    be whitelisted and notified by email.
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - KYC Missing Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-4">
                  <img className="w-100px" src={KYCPen} alt="Pending" />
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5">
                  <p>Hi Ishtiyak,</p>
                  <p>You have successfully reseted your password. Thanks for being with us.</p>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-3 pb-sm-5">
                  <h5 className="text-warning mb-3">We found some information missing in application.</h5>
                  <p>
                    In our verification process, we found information are missing. It would great if you resubmit the
                    form. If face problem in submission please contact us with our best ever excelent support team.
                  </p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Notification - KYC Approved Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody centered>
                <EmailBodyContent className="px-3 px-sm-5 pt-3 pt-sm-5 pb-4">
                  <img className="w-100px" src={KYCApp} alt="Verified" />
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5">
                  <p>Hi Ishtiyak,</p>
                  <p>You have successfully reseted your password. Thanks for being with us.</p>
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-3 pb-sm-5">
                  <h5 className="text-success mb-3">Your Identity Verified.</h5>
                  <p>One fo our team verified your indentity. You are now in whitelisted for token sale.</p>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="socials" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>

        <Block>
          <PreviewCard>
            <h6 className="title text-soft mb-4 overline-title">Simple News - Basic Newsletter Template</h6>
            <EmailWrapper>
              <EmailHeader>
                <a
                  href="#logo"
                  onClick={(ev) => {
                    ev.preventDefault();
                  }}
                >
                  <img className="email-logo" src={DarkImage} alt="logo" />
                </a>
                <p className="email-title">Conceptual Base Modern Dashboard Theme</p>
              </EmailHeader>
              <EmailBody>
                <EmailBodyContent className="text-center px-3 px-sm-5 pt-3 pt-sm-5 pb-4">
                  <img src={SlideA} alt="slide" />
                </EmailBodyContent>
                <EmailBodyContent className="text-center px-3 px-sm-5 pb-5">
                  <h2 className="email-heading email-heading-sm">How to request a payment.</h2>
                  <p className="mgb-1-5x">
                    Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                    because there were thousands of bad Comma
                  </p>
                  <a
                    href="#readmore"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="email-btn email-btn-sm"
                  >
                    Read More
                  </a>
                </EmailBodyContent>
                <EmailBodyContent className="text-center px-3 px-sm-5 pb-4">
                  <img src={SlideB} alt="slide" />
                </EmailBodyContent>
                <EmailBodyContent className="text-center px-3 px-sm-5 pb-5">
                  <h2 className="email-heading email-heading-sm">How to request a payment.</h2>
                  <p>Lorem Ipsum decided to leave for the far World of Grammar.</p>
                  <p>
                    Wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her
                    seven versalia, put her initial into the belt and made herself on the way
                  </p>
                  <p>
                    Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                    because there were thousands of bad Commans.
                  </p>
                </EmailBodyContent>
                <EmailBodyContent className="text-center px-3 px-sm-5 pb-4">
                  <img src={SlideC} alt="slide" />
                </EmailBodyContent>
                <EmailBodyContent className="px-3 px-sm-5 pb-5">
                  <h2 className="email-heading email-heading-sm">Our New Update release.</h2>
                  <table className="w-100">
                    <tbody>
                      <tr>
                        <td className="w-100">
                          <ul className="email-ul email-ul-col2">
                            <li>Decenterlized</li>
                            <li>Faster Access</li>
                            <li>New Encryption</li>
                            <li>New App</li>
                            <li>Smart Payment</li>
                            <li>Extremely light</li>
                            <li>Strong Network</li>
                            <li>Updated UI</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="#readmore"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                    className="email-btn email-btn-sm mt-2"
                  >
                    Read More
                  </a>
                </EmailBodyContent>
              </EmailBody>
              <EmailFooter>
                <p className="email-copyright-text">
                  Copyright © 2020 DashLite. All rights reserved. <br /> Template Made By{" "}
                  <a href="https://themeforest.net/user/softnio/portfolio">Softnio</a>.
                </p>
                <ul className="email-social">
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Facebook} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Twitter} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Youtube} alt="socials" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#socials"
                      onClick={(ev) => {
                        ev.preventDefault();
                      }}
                    >
                      <img src={Medium} alt="socials" />
                    </a>
                  </li>
                </ul>
                <p className="fs-12px pt-4">
                  This email was sent to you as a registered member of <a href="https://softnio.com">softnio.com</a>. To
                  update your emails preferences{" "}
                  <a
                    href="#click"
                    onClick={(ev) => {
                      ev.preventDefault();
                    }}
                  >
                    click here
                  </a>
                  .
                </p>
              </EmailFooter>
            </EmailWrapper>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default EmailTemplate;
