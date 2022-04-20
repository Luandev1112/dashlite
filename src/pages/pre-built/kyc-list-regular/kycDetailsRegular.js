import React, { useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Badge, Card } from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  UserAvatar,
} from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { kycData } from "./KycData";
import { Link } from "react-router-dom";

const KycDetailsRegular = ({ match }) => {
  const [data] = useState(kycData);
  const [user, setUser] = useState();

  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === id);
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  return (
    <React.Fragment>
      <Head title="KYC Details - Regular"></Head>
      {user && (
        <Content>
          <BlockHead size="sm">
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle page>
                  KYCs / <strong className="text-primary small">{user.name}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Application ID: <span className="text-base">KID000844</span>
                    </li>
                    <li>
                      Submitted At: <span className="text-base">{user.date}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/kyc-list-regular`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <Row className="gy-5">
              <Col lg="5">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Application Info</BlockTitle>
                    <p>Submission date, approve date, status etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Submitted By</div>
                        <div className="data-value">{user.id}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Submitted At</div>
                        <div className="data-value">{user.date}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Status</div>
                        <div className="data-value">
                          <Badge
                            size="sm"
                            color={
                              user.status === "Approved"
                                ? "outline-success"
                                : user.status === "Pending"
                                ? "outline-info"
                                : "outline-danger"
                            }
                            className="badge-dim"
                          >
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Checked</div>
                        <div className="data-value">
                          <div className="user-card">
                            <UserAvatar theme="orange-dim" text={findUpper(user.checked)}></UserAvatar>
                            <div className="user-info">
                              <span className="tb-lead">{user.checked}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Checked At</div>
                        <div className="data-value">{user.date}</div>
                      </div>
                    </li>
                  </ul>
                </Card>
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Uploaded Documents</BlockTitle>
                    <p>Here is user uploaded documents.</p>
                  </BlockHeadContent>
                </BlockHead>

                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Document Type</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Front Side</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Back Side</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Proof/Selfie</div>
                        <div className="data-value">{user.doc}</div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>

              <Col lg="7">
                <BlockHead>
                  <BlockHeadContent>
                    <BlockTitle tag="h5">Applicant Information</BlockTitle>
                    <p>Basic info, like name, phone, address, country etc.</p>
                  </BlockHeadContent>
                </BlockHead>
                <Card className="card-bordered">
                  <ul className="data-list is-compact">
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">First Name</div>
                        <div className="data-value">{user.name.split(" ")[0]}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Last Name</div>
                        <div className="data-value">{user.name.split(" ").pop()}</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Email Address</div>
                        <div className="data-value">info@softnio.com</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Phone Number</div>
                        <div className="data-value text-soft">
                          <em>Not available</em>
                        </div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Date of Birth</div>
                        <div className="data-value">28 Oct, 2015</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Country of Residence</div>
                        <div className="data-value">Kenya</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Full Address</div>
                        <div className="data-value">6516, Eldoret, Uasin Gishu, 30100</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Wallet Type</div>
                        <div className="data-value">Bitcoin</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Wallet Address</div>
                        <div className="data-value text-break">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</div>
                      </div>
                    </li>
                    <li className="data-item">
                      <div className="data-col">
                        <div className="data-label">Telegram</div>
                        <div className="data-value">
                          <span>@tokenlite</span>{" "}
                          <a href="https://t.me/tokenlite">
                            <Icon name="telegram"></Icon>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};
export default KycDetailsRegular;
