import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/logo-dark2x.png";
import { Button, Icon, Block } from "../../../components/Component";
import { invoiceData } from "./Invoice";

const InvoicePrint = ({ match }) => {
  const [data] = useState(invoiceData);
  const [user, setUser] = useState();

  useEffect(() => {
    setTimeout(() => window.print(), 500);
  }, []);

  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  return (
    <body className="bg-white">
      <Head title="Invoice Print"></Head>
      {user && (
        <Content>
          <Block>
            <div className="invoice invoice-print">
              <div className="invoice-action">
                <Button
                  size="lg"
                  color="primary"
                  outline
                  className="btn-icon btn-white btn-dim"
                  onClick={() => window.print()}
                >
                  <Icon name="printer-fill"></Icon>
                </Button>
              </div>
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    <span className="overline-title">Invoice To</span>
                    <div className="invoice-contact-info">
                      <h4 className="title">{user.name}</h4>
                      <ul className="list-plain">
                        <li>
                          <Icon name="map-pin-fill"></Icon>
                          <span>
                            House #65, 4328 Marion Street
                            <br />
                            Newbury, VT 05051
                          </span>
                        </li>
                        <li>
                          <Icon name="call-fill"></Icon>
                          <span>{user.phone}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="invoice-desc">
                    <h3 className="title">Invoice</h3>
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Invoice ID</span>:<span>{user.orderId}</span>
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>{user.date.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="invoice-bills">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th className="w-150px">Item ID</th>
                          <th className="w-60">Description</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>24108054</td>
                          <td>Dashlite - Conceptual App Dashboard - Regular License</td>
                          <td>${user.invoiceItem1}</td>
                          <td>1</td>
                          <td>${user.invoiceItem1}</td>
                        </tr>
                        <tr>
                          <td>24108054</td>
                          <td>24 months premium support</td>
                          <td>${user.invoiceItem2}</td>
                          <td>1</td>
                          <td>${user.invoiceItem2}</td>
                        </tr>
                        <tr>
                          <td>23604094</td>
                          <td>Invest Management Dashboard - Regular License</td>
                          <td>${user.invoiceItem3}</td>
                          <td>1</td>
                          <td>${user.invoiceItem3}</td>
                        </tr>
                        <tr>
                          <td>23604094</td>
                          <td>6 months premium support</td>
                          <td>${user.invoiceItem4}</td>
                          <td>1</td>
                          <td>${user.invoiceItem4}</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Subtotal</td>
                          <td>
                            $
                            {Number(user.invoiceItem1) +
                              Number(user.invoiceItem2) +
                              Number(user.invoiceItem3) +
                              Number(user.invoiceItem4) +
                              ".00"}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Processing fee</td>
                          <td>$10.00</td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">TAX</td>
                          <td>$50.00</td>
                        </tr>
                        <tr>
                          <td colSpan="2"></td>
                          <td colSpan="2">Grand Total</td>
                          <td>${user.totalAmount}</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="nk-notes ff-italic fs-12px text-soft">
                      Invoice was created on a computer and is valid without the signature and seal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </body>
  );
};

export default InvoicePrint;
