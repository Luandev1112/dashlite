import React from "react";
import Head from "../../../layout/head/Head";
import {
  BlockBetween,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button,
} from "../../../components/Component";

const UserProfileNotificationPage = ({ sm, updateSm }) => {
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>

      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Notification Settings</BlockTitle>
            <BlockDes>
              <p>You will get only notification what have enabled.</p>
            </BlockDes>
          </BlockHeadContent>
          <BlockHeadContent className="align-self-start d-lg-none">
            <Button
              className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`}
              onClick={() => updateSm(!sm)}
            >
              <Icon name="menu-alt-r"></Icon>
            </Button>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <BlockHead size="sm">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h6">Security Alerts</BlockTitle>
            <BlockDes>
              <p>You will get only those email notification what you want.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <BlockContent>
        <div className="gy-3">
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch" checked label="Email me whenever encounter unusual activity" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch2" label="Email me if new browser is used to sign in" />
            </div>
          </div>
        </div>
      </BlockContent>

      <BlockHead size="sm">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h6">News</BlockTitle>
            <BlockDes>
              <p>You will get only those email notification what you want.</p>
            </BlockDes>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>

      <BlockContent>
        <div className="gy-3">
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="custom-switch3" checked label="Notify me by email about sales and latest news" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="feature-update" label="Email me about new features and updates" />
            </div>
          </div>
          <div className="g-item">
            <div className="custom-control custom-switch">
              <InputSwitch id="account-tips" checked label="Email me about tips on using account" />
            </div>
          </div>
        </div>
      </BlockContent>
    </React.Fragment>
  );
};
export default UserProfileNotificationPage;
