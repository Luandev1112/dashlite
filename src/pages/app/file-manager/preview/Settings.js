import React, { useContext, useState } from "react";
import ProfileUpdate from "../modals/ProfileUpdate";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  UserAvatar,
} from "../../../../components/Component";
import { Modal } from "reactstrap";
import { findUpper } from "../../../../utils/Utils";
import { FileManagerContext } from "../FileManagerContext";
import { pricingTableDataV2, selectDateFormat, selectLanguageOptions, selectTimezoneFormat } from "../Data";
import { Link } from "react-router-dom";

const SettingsPreview = ({ toggleScreenLg }) => {
  const { planData } = useContext(FileManagerContext);
  const [plan] = planData;

  const [tabs, setTab] = useState("General");
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "Abu Bin Ishtiak",
    displayName: "Ishtiak",
    email: "info@softnio.com",
    phone: "",
    dob: "1980-08-10",
    language: selectLanguageOptions[0].value,
    dateFormat: selectDateFormat[0].value,
    timezone: selectTimezoneFormat[0].value,
  });
  return (
    <React.Fragment>
      <BlockHead size="md">
        <BlockBetween className="position-relative">
          <BlockHeadContent>
            <BlockTitle page>Settings</BlockTitle>
          </BlockHeadContent>
          <BlockHeadContent>
            <ul className="nk-block-tools g-1">
              <li className="d-lg-none mr-n1">
                <a
                  href="#folder"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleScreenLg();
                  }}
                  className="btn btn-trigger btn-icon toggle"
                >
                  <Icon name="menu-alt-r"></Icon>
                </a>
              </li>
            </ul>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <ul className="nk-nav nav nav-tabs">
        <li className={`nav-item ${tabs === "General" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("General");
            }}
          >
            General
          </a>
        </li>
        <li className={`nav-item ${tabs === "Security" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("Security");
            }}
          >
            Security
          </a>
        </li>
        <li className={`nav-item ${tabs === "Billings" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("Billings");
            }}
          >
            Billings
          </a>
        </li>
        <li className={`nav-item ${tabs === "Notifications" ? "active current-page" : ""}`}>
          <a
            className="nav-link"
            href="#tabs"
            onClick={(ev) => {
              ev.preventDefault();
              setTab("Notifications");
            }}
          >
            Notifications
          </a>
        </li>
      </ul>

      <Block size="xs" className="pt-0">
        <div className="user-card user-card-md py-md-5 py-4">
          <UserAvatar size="md" text={findUpper(formData.name)}>
            <a href="#edit" onClick={(ev) => ev.preventDefault()} className="edit edit-upload">
              <Icon name="img"></Icon>
            </a>
          </UserAvatar>
          <div className="user-info">
            <span className="lead-text">
              {formData.displayName}
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="edit"
              >
                <Icon name="pen2"></Icon>
              </a>
            </span>
            <span className="sub-text">
              {formData.email}
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="edit"
              >
                <Icon name="pen2"></Icon>
              </a>
            </span>
          </div>
        </div>
        <div className="user-plan-wrap">
          <div className="nk-block-subhead">
            <h6 className="overline-title">Subscription Plan</h6>
          </div>
          <div className="user-plan">
            <div className="user-plan-info">
              <div className="user-plan-title">
                <Icon name="hard-drive"></Icon> <span>{plan} plan</span>
              </div>
              <div className="user-plan-status">
                12.47 GB / {pricingTableDataV2.find((item) => item.title === plan).memory}.00 GB
              </div>
            </div>
            <div className="user-plan-actions">
              <ul className="btn-toolbar align-center g-4">
                <li className="order-2 order-sm-1">
                  <Link to={`${process.env.PUBLIC_URL}/app-file-manager/pricing`} className="link link-primary">
                    See all plans
                  </Link>
                </li>
                <li className="order-1 order-sm-2">
                  <Link to={`${process.env.PUBLIC_URL}/app-file-manager/pricing`} className="btn btn-sm btn-primary">
                    Upgrade
                  </Link>
                </li>
              </ul>
            </div>
            <div className="user-plan-progress">
              <div className="progress progress-md bg-light">
                <div
                  className="progress-bar"
                  style={{ width: `${1200 / pricingTableDataV2.find((item) => item.title === plan).memory}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-data data-list">
          <div className="data-head">
            <h6 className="overline-title">Personal Basic</h6>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Recovery Email</span>
              <span className="data-value">{formData.email}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Edit
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Phone Number</span>
              <span className="data-value">{formData.phone}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Add number
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Date of birth</span>
              <span className="data-value">{formData.dob}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
        </div>
        <div className="nk-data data-list">
          <div className="data-head">
            <h6 className="overline-title">Preferences</h6>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Language</span>
              <span className="data-value">{formData.language}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Change Language
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Date Format</span>
              <span className="data-value">{formData.dateFormat}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
          <div className="data-item">
            <div className="data-col">
              <span className="data-label">Timezone</span>
              <span className="data-value">{formData.timezone}</span>
            </div>
            <div className="data-col data-col-end">
              <a
                href="#edit"
                onClick={(ev) => {
                  ev.preventDefault();
                  setModal(true);
                }}
                className="link link-primary"
              >
                Change
              </a>
            </div>
          </div>
        </div>
      </Block>

      <Modal isOpen={modal} className="modal-dialog-centered" size="lg" toggle={() => setModal(false)}>
        <ProfileUpdate formData={formData} setFormData={setFormData} setModal={setModal}></ProfileUpdate>
      </Modal>
    </React.Fragment>
  );
};

export default SettingsPreview;
