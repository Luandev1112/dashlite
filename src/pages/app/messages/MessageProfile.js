import React from "react";
import SimpleBar from "simplebar-react";
import { Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, Card } from "reactstrap";
import { findUpper } from "../../../utils/Utils";
import { Icon, UserAvatar, LinkList, LinkItem } from "../../../components/Component";

const MessageProfileSidebar = ({ sidebar, profile }) => {
  return (
    <SimpleBar className={`nk-msg-profile ${sidebar ? "visible" : ""}`}>
      <Card>
        <div className="card-inner-group">
          <div className="card-inner">
            <div className="user-card user-card-s2 mb-2">
              <UserAvatar className="md" theme={profile.theme} image={profile.image} text={findUpper(profile.name)} />
              <div className="user-info">
                <h5>{profile.name}</h5>
                <span className="sub-text">Customer</span>
              </div>
              <UncontrolledDropdown className="user-card-menu dropdown">
                <DropdownToggle tag="a" className="btn btn-icon btn-sm btn-trigger dropdown-toggle">
                  <Icon name="more-h"></Icon>
                </DropdownToggle>
                <DropdownMenu right>
                  <LinkList opt className="no-bdr">
                    <LinkItem link={"/user-details-regular/1"} icon="eye">
                      View Profile
                    </LinkItem>
                    <LinkItem link={""} tag="a" icon="na">
                      Block From System
                    </LinkItem>
                    <LinkItem link={""} tag="a" icon="repeat">
                      View Orders
                    </LinkItem>
                  </LinkList>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <Row className="text-center g-1">
              <Col xs={4}>
                <div className="profile-stats">
                  <span className="amount">23</span>
                  <span className="sub-text">Total Order</span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="profile-stats">
                  <span className="amount">20</span>
                  <span className="sub-text">Complete</span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="profile-stats">
                  <span className="amount">3</span>
                  <span className="sub-text">Progress</span>
                </div>
              </Col>
            </Row>
          </div>
          <div className="card-inner">
            <div className="aside-wg">
              <h6 className="overline-title-alt mb-2">User Information</h6>
              <ul className="user-contacts">
                <li>
                  <Icon name="mail"></Icon>
                  <span>info@softnio.com</span>
                </li>
                <li>
                  <Icon name="call"></Icon>
                  <span>+938392939</span>
                </li>
                <li>
                  <Icon name="map-pin"></Icon>
                  <span>
                    1134 Ridder Park Road <br />
                    San Fransisco, CA 94851
                  </span>
                </li>
              </ul>
            </div>

            <div className="aside-wg">
              <h6 className="overline-title-alt mb-2">Additional</h6>
              <Row className="gx-1 gy-3">
                <Col xs={6}>
                  <span className="sub-text">Ref ID: </span>
                  <span>TID-049583</span>
                </Col>
                <Col xs={6}>
                  <span className="sub-text">Requested:</span>
                  <span>Abu Bin Ishtiak</span>
                </Col>
                <Col xs={6}>
                  <span className="sub-text">Status:</span>
                  <span className={`lead-text text-${profile.closed ? "danger" : "success"}`}>
                    {profile.closed ? "Closed" : "Open"}
                  </span>
                </Col>
                <Col xs={6}>
                  <span className="sub-text">Last Reply:</span>
                  <span>{profile.reply.length === 0 ? "None" : profile.reply[profile.reply.length - 1].name}</span>
                </Col>
              </Row>
            </div>
            <div className="aside-wg">
              <h6 className="overline-title-alt mb-2">Assigned Account</h6>
              <ul className="align-center g-2">
                <li>
                  <UserAvatar theme="purple" text="IH" />
                </li>
                <li>
                  <UserAvatar theme="pink" text="ST" />
                </li>
                <li>
                  <UserAvatar theme="gray" text="SI" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </SimpleBar>
  );
};

export default MessageProfileSidebar;
