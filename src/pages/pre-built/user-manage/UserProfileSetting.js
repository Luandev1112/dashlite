import React from "react";
import Head from "../../../layout/head/Head";
import { Card } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  InputSwitch,
  Button,
} from "../../../components/Component";

const UserProfileSettingPage = ({ sm, updateSm }) => {
  return (
    <React.Fragment>
      <Head title="User List - Profile"></Head>

      <BlockHead size="lg">
        <BlockBetween>
          <BlockHeadContent>
            <BlockTitle tag="h4">Security Settings</BlockTitle>
            <BlockDes>
              <p>These settings will help you to keep your account secure.</p>
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

      <Block>
        <Card className="card-bordered">
          <div className="card-inner-group">
            <div className="card-inner">
              <div className="between-center flex-wrap flex-md-nowrap g-3">
                <div className="nk-block-text">
                  <h6>Save my Activity Logs</h6>
                  <p>You can save your all activity logs including unusual activity detected.</p>
                </div>
                <div className="nk-block-actions">
                  <ul className="align-center gx-3">
                    <li className="order-md-last">
                      <div className="custom-control custom-switch mr-n2">
                        <InputSwitch checked id="activity-log" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-inner">
              <div className="between-center flex-wrap g-3">
                <div className="nk-block-text">
                  <h6>Change Password</h6>
                  <p>Set a unique password to protect your account.</p>
                </div>
                <div className="nk-block-actions flex-shrink-sm-0">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
                    <li className="order-md-last">
                      <Button color="primary">Change Password</Button>
                    </li>
                    <li>
                      <em className="text-soft text-date fs-12px">
                        Last changed: <span>Oct 2, 2019</span>
                      </em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="between-center flex-wrap flex-md-nowrap g-3">
                <div className="nk-block-text">
                  <h6>
                    2 Factor Auth &nbsp; <span className="badge badge-success ml-0">Enabled</span>
                  </h6>
                  <p>
                    Secure your account with 2FA security. When it is activated you will need to enter not only your
                    password, but also a special code using app. You will receive this code via mobile application.{" "}
                  </p>
                </div>
                <div className="nk-block-actions">
                  <Button color="primary">Disable</Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Block>
    </React.Fragment>
  );
};
export default UserProfileSettingPage;
