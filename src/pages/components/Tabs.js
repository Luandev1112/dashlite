import React, { useState } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import Icon from "../../components/icon/Icon";
import classnames from "classnames";

import { Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, BackTo } from "../../components/block/Block";
import { PreviewCard, CodeBlock } from "../../components/preview/Preview";

const TabsPage = ({ ...props }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [activeIconTab, setActiveIconTab] = useState("5");
  const [activeAltTab, setActiveAltTab] = useState("9");
  const [verticalTab, setVerticalTab] = useState("1");
  const [verticalIconTab, setVerticalIconTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const toggleIconTab = (icontab) => {
    if (activeIconTab !== icontab) setActiveIconTab(icontab);
  };
  const toggleAltTab = (alttab) => {
    if (activeAltTab !== alttab) setActiveAltTab(alttab);
  };
  return (
    <React.Fragment>
      <Head title="Tabs" />
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Tabs
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Use the Reactstrap tab component, tabs and pills to create tabbable panes of local content, even via
                dropdown menus. To use it, import it such as{" "}
                <code>import {`{Nav, NavItem, NavLink, TabContent, TabPane }`} from "reactstrap"</code>
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Examples</BlockTitle>
              <p>
                You can simply activate a tab or pill navigation, add <code>tabs</code> or <code>pills</code> props to{" "}
                <code>Nav</code> component. Here is some basic tab component that you can use. Visit the{" "}
                <a href={"https://deploy-preview-2356--reactstrap.netlify.app/components/tabs"} target="_blank" rel="noreferrer">
                  Reactstrap
                </a>{" "}
                library for detailed instructions.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Nav tabs className="mt-n3">
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeTab === "1" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle("1");
                  }}
                >
                  Personal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeTab === "2" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle("2");
                  }}
                >
                  Security
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeTab === "3" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle("3");
                  }}
                >
                  Notifications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeTab === "4" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle("4");
                  }}
                >
                  Connect
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <p>
                  Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                  incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat
                  quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate
                  minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea
                  incid.
                </p>
              </TabPane>
              <TabPane tabId="2">
                <p>
                  Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute
                  magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris
                  ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip
                  labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do
                  sint minim consectetur qui.
                </p>
              </TabPane>
              <TabPane tabId="3">
                <p>
                  Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                  laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                  Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna
                  commodo est ea veniam consectetur.
                </p>
              </TabPane>
              <TabPane tabId="4">
                <p>
                  Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                  proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua
                  amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa
                  ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                </p>
              </TabPane>
            </TabContent>
          </PreviewCard>
          <CodeBlock language="jsx">
            {` const TabExample = () => {
    const [activeTab , setActivetab] = useState("1");

    const toggle = () => {setActivetab(!activeTab)};
    return (
      <Nav tabs>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeTab === "1" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggle("1");
            }}
          >
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeTab === "2" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggle("2");
            }}
          >
            Security
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeTab === "3" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggle("3");
            }}
          >
            Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeTab === "4" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggle("4");
            }}
          >
            Connect
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <p> Some text for tab 1 </p>
      </TabPane>
      <TabPane tabId="2">
        <p> Some text for tab 2 </p>
      </TabPane>
      <TabPane tabId="3">
        <p> Some text for tab 3 </p>
      </TabPane>
      <TabPane tabId="4">
        <p> Some text for tab 4 </p>
      </TabPane>
      </TabContent>
      )
    }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">With Icon</BlockTitle>
              <p>
                You can simply activate a tab or pill navigation, add <code>tabs</code> or <code>pills</code> props to{" "}
                <code>Nav</code> component. Here is some basic tab component that you can use.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Nav tabs>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeIconTab === "5" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleIconTab("5");
                  }}
                >
                  <Icon name="user" /> <span>Personal</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeIconTab === "6" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleIconTab("6");
                  }}
                >
                  <Icon name="lock-alt" /> <span>Security</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeIconTab === "7" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleIconTab("7");
                  }}
                >
                  <Icon name="bell" /> <span>Notifications</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeIconTab === "8" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleIconTab("8");
                  }}
                >
                  <Icon name="link" /> <span>Connect</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeIconTab}>
              <TabPane tabId="5">
                <p>
                  Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                  incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat
                  quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate
                  minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea
                  incid.
                </p>
              </TabPane>
              <TabPane tabId="6">
                <p>
                  Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute
                  magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris
                  ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip
                  labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do
                  sint minim consectetur qui.
                </p>
              </TabPane>
              <TabPane tabId="7">
                <p>
                  Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                  laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                  Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna
                  commodo est ea veniam consectetur.
                </p>
              </TabPane>
              <TabPane tabId="8">
                <p>
                  Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                  proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua
                  amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa
                  ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                </p>
              </TabPane>
            </TabContent>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const TabExample = () => {
    const [activeTab , setActivetab] = useState("1");

    const toggle = () => {setActivetab(!activeTab)};
    return (
    <Nav tabs>
      <NavItem>
        <NavLink
          tag="a"
          href="#tab"
          className={classnames({ active: activeIconTab === "5" })}
          onClick={(ev) => {
            ev.preventDefault();
            toggleIconTab("5");
          }}
        >
          <Icon name="user" /> <span>Personal</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag="a"
          href="#tab"
          className={classnames({ active: activeIconTab === "6" })}
          onClick={(ev) => {
            ev.preventDefault();
            toggleIconTab("6");
          }}
        >
          <Icon name="lock-alt" /> <span>Security</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag="a"
          href="#tab"
          className={classnames({ active: activeIconTab === "7" })}
          onClick={(ev) => {
            ev.preventDefault();
            toggleIconTab("7");
          }}
        >
          <Icon name="bell" /> <span>Notifications</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          tag="a"
          href="#tab"
          className={classnames({ active: activeIconTab === "8" })}
          onClick={(ev) => {
            ev.preventDefault();
            toggleIconTab("8");
          }}
        >
          <Icon name="link" /> <span>Connect</span>
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeIconTab}>
      <TabPane tabId="1">
        <p> Some text for tab 1 </p>
      </TabPane>
      <TabPane tabId="2">
        <p> Some text for tab 2 </p>
      </TabPane>
      <TabPane tabId="3">
        <p> Some text for tab 3 </p>
      </TabPane>
      <TabPane tabId="4">
        <p> Some text for tab 4 </p>
      </TabPane>
    </TabContent>
    )
  }
    `}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Alternet Tab style</BlockTitle>
              <p>
                You can simply activate add <code>.nav-tabs-s2</code> className in <code>Nav</code> component to make an
                alternet styled tab.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Nav tabs className="nav-tabs-s2">
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeAltTab === "9" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleAltTab("9");
                  }}
                >
                  Personal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeAltTab === "10" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleAltTab("10");
                  }}
                >
                  Security
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeAltTab === "11" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleAltTab("11");
                  }}
                >
                  Notifications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag="a"
                  href="#tab"
                  className={classnames({ active: activeAltTab === "12" })}
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggleAltTab("12");
                  }}
                >
                  Connect
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeAltTab}>
              <TabPane tabId="9">
                <p>
                  Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                  incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat
                  quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate
                  minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea
                  incid.
                </p>
              </TabPane>
              <TabPane tabId="10">
                <p>
                  Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute
                  magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris
                  ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip
                  labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do
                  sint minim consectetur qui.
                </p>
              </TabPane>
              <TabPane tabId="11">
                <p>
                  Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                  laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                  Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna
                  commodo est ea veniam consectetur.
                </p>
              </TabPane>
              <TabPane tabId="12">
                <p>
                  Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                  proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua
                  amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa
                  ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                </p>
              </TabPane>
            </TabContent>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const TabExample = () => {
    const [activeTab , setActivetab] = useState("1");

    const toggle = () => {setActivetab(!activeTab)};
    
    return ( 
      <Nav tabs className="nav-tabs-s2">
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeAltTab === "1" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggleAltTab("1");
            }}
          >
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeAltTab === "2" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggleAltTab("2");
            }}
          >
            Security
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeAltTab === "3" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggleAltTab("3");
            }}
          >
            Notifications
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            tag="a"
            href="#tab"
            className={classnames({ active: activeAltTab === "4" })}
            onClick={(ev) => {
              ev.preventDefault();
              toggleAltTab("4");
            }}
          >
            Connect
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeAltTab}>
        <TabPane tabId="1">
          <p> Some text for tab 1 </p>
        </TabPane>
        <TabPane tabId="2">
          <p> Some text for tab 2 </p>
        </TabPane>
        <TabPane tabId="3">
          <p> Some text for tab 3 </p>
        </TabPane>
        <TabPane tabId="4">
          <p> Some text for tab 4 </p>
        </TabPane>
      </TabContent>
      )
    }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Veritcal Tab style</BlockTitle>
              <p>
                You can simply activate add <code>.link-list-menu</code> className in <code>Nav</code> component to make
                a vertical styled tab.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col md={4}>
                <ul className="nav link-list-menu border border-light round m-0">
                  <li>
                    <a
                      href="#tab"
                      className={classnames({ active: verticalTab === "1" })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalTab("1");
                      }}
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({ active: verticalTab === "2" })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalTab("2");
                      }}
                    >
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({ active: verticalTab === "3" })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalTab("3");
                      }}
                    >
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({ active: verticalTab === "4" })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalTab("4");
                      }}
                    >
                      Connect
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={8}>
                <TabContent activeTab={verticalTab}>
                  <TabPane tabId="1">
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p>
                      Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit
                      aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis
                      laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et
                      elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse
                      anim eiusmod do sint minim consectetur qui.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p>
                      Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                      laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                      Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est
                      magna commodo est ea veniam consectetur.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p>
                      Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                      proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do.
                      Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt
                      amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const TabExample = () => {
  const [activeTab , setActivetab] = useState("1");

  const toggle = () => {setActivetab(!activeTab)};
    
  return ( 
    <Row className="g-gs">
      <Col md={4}>
        <ul className="nav link-list-menu border border-light round m-0">
          <li>
            <a
              href="#tab"
              className={classnames({ active: verticalTab === "1" })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalTab("1");
              }}
            >
              Personal
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({ active: verticalTab === "2" })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalTab("2");
              }}
            >
              Security
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({ active: verticalTab === "3" })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalTab("3");
              }}
            >
              Notifications
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({ active: verticalTab === "4" })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalTab("4");
              }}
            >
              Connect
            </a>
          </li>
        </ul>
      </Col>
      <Col md={8}>
        <TabContent activeTab={verticalTab}>
          <TabPane tabId="1">
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <p>
              Culpa dolor voluptate do laboris laboris irure
              reprehenderit id incididunt duis pariatur mollit aute
              magna pariatur consectetur. Eu veniam duis non ut dolor
              deserunt commodo et minim in quis laboris ipsum velit id
              veniam. Quis ut consectetur adipisicing officia excepteur
              non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco
              mollit occaecat dolore ipsum id officia mollit qui esse
              anim eiusmod do sint minim consectetur qui.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p>
              Fugiat id quis dolor culpa eiusmod anim velit excepteur
              proident dolor aute qui magna. Ad proident laboris ullamco
              esse anim Lorem Lorem veniam quis Lorem irure occaecat
              velit nostrud magna nulla. Velit et et proident Lorem do
              ea tempor officia dolor. Reprehenderit Lorem aliquip
              labore est magna commodo est ea veniam consectetur.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="4">
            <p>
              Eu dolore ea ullamco dolore Lorem id cupidatat excepteur
              reprehenderit consectetur elit id dolor proident in
              cupidatat officia. Voluptate excepteur commodo labore nisi
              cillum duis aliqua do. Aliqua amet qui mollit consectetur
              nulla mollit velit aliqua veniam nisi id do Lorem deserunt
              amet. Culpa ullamco sit adipisicing labore officia magna
              elit nisi in aute tempor commodo eiusmod.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
    }`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Veritcal Tab style</BlockTitle>
              <p>
                You can simply activate add <code>.link-list-menu</code> className in <code>Nav</code> component to make
                a vertical styled tab.
              </p>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <Col md={4}>
                <ul className="nav link-list-menu border border-light round m-0">
                  <li>
                    <a
                      href="#tab"
                      className={classnames({
                        active: verticalIconTab === "1",
                      })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalIconTab("1");
                      }}
                    >
                      <Icon name="user"></Icon>
                      <span>Personal</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({
                        active: verticalIconTab === "2",
                      })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalIconTab("2");
                      }}
                    >
                      <Icon name="lock-alt"></Icon>
                      <span>Security</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({
                        active: verticalIconTab === "3",
                      })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalIconTab("3");
                      }}
                    >
                      <Icon name="bell"></Icon>
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tab"
                      className={classnames({
                        active: verticalIconTab === "4",
                      })}
                      onClick={(ev) => {
                        ev.preventDefault();
                        setVerticalIconTab("4");
                      }}
                    >
                      <Icon name="link"></Icon>
                      <span>Connect</span>
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={8}>
                <TabContent activeTab={verticalIconTab}>
                  <TabPane tabId="1">
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="2">
                    <p>
                      Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit
                      aute magna pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis
                      laboris ipsum velit id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et
                      elit aliquip labore Lorem enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse
                      anim eiusmod do sint minim consectetur qui.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="3">
                    <p>
                      Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident
                      laboris ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla.
                      Velit et et proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est
                      magna commodo est ea veniam consectetur.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                  <TabPane tabId="4">
                    <p>
                      Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor
                      proident in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do.
                      Aliqua amet qui mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt
                      amet. Culpa ullamco sit adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.
                    </p>
                    <p>
                      Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis
                      incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua
                      occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et
                      voluptate minim reprehenderit mollit pariatur. Deserunt non laborum enim et cillum eu deserunt
                      excepteur ea incid.
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const TabExample = () => {
  const [activeTab , setActivetab] = useState("1");

  const toggle = () => {setActivetab(!activeTab)};
    
  return ( 
    <Row className="g-gs">
      <Col md={4}>
        <ul className="nav link-list-menu border border-light round m-0">
          <li>
            <a
              href="#tab"
              className={classnames({
                active: verticalIconTab === "1",
              })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalIconTab("1");
              }}
            >
              <Icon name="user"></Icon>
              <span>Personal</span>
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({
                active: verticalIconTab === "2",
              })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalIconTab("2");
              }}
            >
              <Icon name="lock-alt"></Icon>
              <span>Security</span>
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({
                active: verticalIconTab === "3",
              })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalIconTab("3");
              }}
            >
              <Icon name="bell"></Icon>
              <span>Notifications</span>
            </a>
          </li>
          <li>
            <a
              href="#tab"
              className={classnames({
                active: verticalIconTab === "4",
              })}
              onClick={(ev) => {
                ev.preventDefault();
                setVerticalIconTab("4");
              }}
            >
              <Icon name="link"></Icon>
              <span>Connect</span>
            </a>
          </li>
        </ul>
      </Col>
      <Col md={8}>
        <TabContent activeTab={verticalIconTab}>
          <TabPane tabId="1">
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <p>
              Culpa dolor voluptate do laboris laboris irure
              reprehenderit id incididunt duis pariatur mollit aute
              magna pariatur consectetur. Eu veniam duis non ut dolor
              deserunt commodo et minim in quis laboris ipsum velit id
              veniam. Quis ut consectetur adipisicing officia excepteur
              non sit. Ut et elit aliquip labore Lorem enim eu. Ullamco
              mollit occaecat dolore ipsum id officia mollit qui esse
              anim eiusmod do sint minim consectetur qui.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p>
              Fugiat id quis dolor culpa eiusmod anim velit excepteur
              proident dolor aute qui magna. Ad proident laboris ullamco
              esse anim Lorem Lorem veniam quis Lorem irure occaecat
              velit nostrud magna nulla. Velit et et proident Lorem do
              ea tempor officia dolor. Reprehenderit Lorem aliquip
              labore est magna commodo est ea veniam consectetur.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
          <TabPane tabId="4">
            <p>
              Eu dolore ea ullamco dolore Lorem id cupidatat excepteur
              reprehenderit consectetur elit id dolor proident in
              cupidatat officia. Voluptate excepteur commodo labore nisi
              cillum duis aliqua do. Aliqua amet qui mollit consectetur
              nulla mollit velit aliqua veniam nisi id do Lorem deserunt
              amet. Culpa ullamco sit adipisicing labore officia magna
              elit nisi in aute tempor commodo eiusmod.
            </p>
            <p>
              Cillum ad ut irure tempor velit nostrud occaecat ullamco
              aliqua anim Lorem sint. Veniam sint duis incididunt do
              esse magna mollit excepteur laborum qui. Id id
              reprehenderit sit est eu aliqua occaecat quis et velit
              excepteur laborum mollit dolore eiusmod. Ipsum dolor in
              occaecat commodo et voluptate minim reprehenderit mollit
              pariatur. Deserunt non laborum enim et cillum eu deserunt
              excepteur ea incid.
            </p>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
    }`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default TabsPage;
