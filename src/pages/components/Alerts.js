import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";

import { Alert, UncontrolledAlert } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, PreviewTable, CodeBlock } from "../../components/preview/Preview";

const AlertsPage = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Alerts" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Alerts
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Provide contextual feedback messages for typical user actions with the handful of available and flexible
                alert messages. To use it, import it such as <code>import {`{Alert}`} from "reactstrap"</code>. Visit
                the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/alerts"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Examples - Default Style</BlockTitle>
              <p>
                Alerts are available for any length of text. Use <code> {`Alert`}</code> component with{" "}
                <code>color</code> props to create alert messages.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <div className="gy-4">
              <div>
                <Alert className="alert-icon" color="primary">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. You will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="secondary">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. You will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="success">
                  <Icon name="check-circle" />
                  <strong>Thanks for your deposit</strong>. Your account balance has been updated accordingly.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="danger">
                  <Icon name="cross-circle" />
                  <strong>Update failed</strong>! There is some technical issues.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="warning">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="info">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. Your will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="gray">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <Alert className="alert-icon" color="light">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <UncontrolledAlert className="alert-icon" color="danger" fade={false}>
                  <Icon name="cross-circle" />
                  <strong>Update failed</strong>! There is some technical issues.
                </UncontrolledAlert>
              </div>
            </div>
          </PreviewCard>
          <PreviewCard>
            <div className="gy-4">
              <div>
                <Alert className="alert-fill alert-icon" color="primary">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. Your will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="secondary">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. Your will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="success">
                  <Icon name="check-circle" />
                  <strong>Thanks for your deposit</strong>. Your account balance has been updated accordingly.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="danger">
                  <Icon name="cross-circle" />
                  <strong>Update failed</strong>! There is some technical issues.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="warning">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="info">
                  <Icon name="alert-circle" />
                  <strong>Order has been placed</strong>. Your will be redirected to complete your payment.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="gray">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="light">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <Alert className="alert-fill alert-icon" color="dark">
                  <Icon name="alert-circle" />
                  Your credit card <strong>already expired</strong>. Please enter a valid &amp; up-to-date{" "}
                  <a href="#alert-link" className="alert-link">
                    credit card
                  </a>{" "}
                  to deposit your money.
                </Alert>
              </div>
              <div>
                <UncontrolledAlert className="alert-fill alert-icon" color="danger" fade={false}>
                  <Icon name="cross-circle" />
                  <strong>Update failed</strong>! There is some technical issues.
                </UncontrolledAlert>
              </div>
            </div>
          </PreviewCard>
          <PreviewTable>
            <thead className="thead-light">
              <tr>
                <th className="overline-title w-300px">Props & Classname Reference</th>
                <th className="overline-title">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>color={"{state}"}</code>
                </td>
                <td>
                  Use <code>{"{state}"}</code> as{" "}
                  <code>primary, secondary, success, info, warning, danger, gray, light</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.alert-icon</code>
                </td>
                <td>
                  <span>
                    Use with <code>{`Alert`}</code> component as a className for proper icon style.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.alert-fill</code>
                </td>
                <td>
                  <span>
                    Use with <code>{`Alert`}</code> component as a className for fill base style.
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <code>.alert-dismissible</code>
                </td>
                <td>
                  <span>
                    Use with <code>{`Alert`}</code> component as a className for dismissible alert.
                  </span>
                </td>
              </tr>
            </tbody>
          </PreviewTable>
          <CodeBlock language="jsx">
            {`<Alert className="alert-icon" color="primary">
  <Icon name="alert-circle" />
  <strong>Order has been placed</strong>. Your will be redirect
  for make your payment.
</Alert>
           `}
          </CodeBlock>
          <CodeBlock language="jsx">
            {`<UncontrolledAlert className="alert-icon" color="primary">
  <Icon name="alert-circle" />
  <strong>Order has been placed</strong>. Your will be redirect
  for make your payment.
</UncontrolledAlert>
            `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Examples - Style Pro</BlockTitle>
              <p>
                For following style, You can use the <code>.alert-pro</code> class with <code>Alert</code> component.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <div className="example-alerts">
            <div className="gy-4">
              <div className="example-alert">
                <Alert className="alert-pro" color="primary">
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="secondary">
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="success">
                  <div className="alert-text">
                    <h6>Payment Successfully Made</h6>
                    <p>
                      Thanks for your deposit. Now you can see your transaction history. Your account has been updated
                      accordingly.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="info">
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="warning">
                  <div className="alert-text">
                    <h6>Payment Information</h6>
                    <p>
                      Sorry! your credit card already expired. Please enter a valid &amp; up-to-date credit card to
                      deposit your money.
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="danger">
                  <div className="alert-text">
                    <h6>Order Cancelled</h6>
                    <p>Your order has been cancelled due to received your payment.</p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="gray">
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <Alert className="alert-pro" color="light">
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </Alert>
              </div>
              <div className="example-alert">
                <UncontrolledAlert className="alert-pro" color="success" fade={false}>
                  <div className="alert-text">
                    <h6>Your Order Placed</h6>
                    <p>
                      Your order has been successfully placed for deposit. You will be redirected to payment portal.{" "}
                    </p>
                  </div>
                </UncontrolledAlert>
              </div>
            </div>
          </div>
          <CodeBlock language="jsx">
            {`<Alert color="primary" className="alert-pro">Your order has been successfully placed for deposit.</Alert>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default AlertsPage;
