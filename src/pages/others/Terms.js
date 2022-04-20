import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { Block, BlockDes, BlockHead, BlockHeadContent, BlockTitle, PreviewCard } from "../../components/Component";

const Terms = ({ ...props }) => {
  return (
    <React.Fragment>
      <Head title="Terms &amp; Conditions" />
      <Content>
        <div className="content-page wide-md m-auto">
          <BlockHead size="lg" wide="xs" className="mx-auto">
            <BlockHeadContent className="text-center">
              <BlockTitle tag="h2" className="fw-normal">
                Terms &amp; Policy
              </BlockTitle>
              <BlockDes>
                <p className="lead">
                  We are on a mission to make the web a better place. The following terms, as well as our Policy and
                  Terms of Service, apply to all users.
                </p>
                <p className="text-soft ff-italic">Last Update: Nov 12, 2019</p>
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <Block>
            <PreviewCard className="card-bordered">
              <div className="entry">
                <h3>Terms and Conditions</h3>
                <p>
                  We’ve decided to make these Terms available under a <strong>Creative Commons</strong> license. You can
                  grab a copy of these Terms and other legal documents on Github. You’re more than welcome to copy them,
                  adapt them, and repurpose them for your own use.
                </p>
                <h4>Introduction</h4>
                <p>
                  These Website Standard Terms and Conditions written on this webpage shall manage your use of our
                  website, Webiste Name accessible at Website.com.
                </p>
                <p>
                  These Terms will be applied fully and affect to your use of this Website. By using this Website, you
                  agreed to accept all terms and conditions written in here. You must not use this Website if you
                  disagree with any of these Website Standard Terms and Conditions.
                </p>
                <p>Minors or people below 18 years old are not allowed to use this Website.</p>
                <h4>Intellectual Property Rights</h4>
                <p>
                  Other than the content you own, under these Terms, Company Name and/or its licensors own all the
                  intellectual property rights and materials contained in this Website.
                </p>
                <p>
                  You are granted limited license only for purposes of viewing the material contained on this Website.
                </p>
                <h4>Restrictions</h4>
                <p>You are specifically restricted from all of the following:</p>
                <ul className="list list-sm list-checked">
                  <li>Publishing any Website material in any other media;</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
                  <li>Publicly performing and/or showing any Website material;</li>
                  <li>Using this Website in any way that is or may be damaging to this Website;</li>
                  <li>Using this Website in any way that impacts user access to this Website;</li>
                  <li>
                    Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the
                    Website, or to any person or business entity;
                  </li>
                  <li>
                    Engaging in any data mining, data harvesting, data extracting or any other similar activity in
                    relation to this Website;
                  </li>
                  <li>Using this Website to engage in any advertising or marketing.</li>
                  <li>
                    Certain areas of this Website are restricted from being access by you and Company Name may further
                    restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user
                    ID and password you may have for this Website are confidential and you must maintain confidentiality
                    as well.
                  </li>
                </ul>
                <h4>Your Content</h4>
                <p>
                  In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text,
                  images or other material you choose to display on this Website. By displaying Your Content, you grant
                  Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt,
                  publish, translate and distribute it in any and all media.
                </p>
                <p>
                  Your Content must be your own and must not be invading any third-party"s rights. Company Name reserves
                  the right to remove any of Your Content from this Website at any time without notice.
                </p>
                <h4>No warranties</h4>
                <p>
                  This Website is provided “as is,” with all faults, and Company Name express no representations or
                  warranties, of any kind related to this Website or the materials contained on this Website. Also,
                  nothing contained on this Website shall be interpreted as advising you.
                </p>
                <h4>Limitation of liability</h4>
                <p>
                  In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable
                  for anything arising out of or in any way connected with your use of this Website whether such
                  liability is under contract. Company Name, including its officers, directors and employees shall not
                  be held liable for any indirect, consequential or special liability arising out of or in any way
                  related to your use of this Website.
                </p>
                <h4>Indemnification</h4>
                <p>
                  You hereby indemnify to the fullest extent Company Name from and against any and/or all liabilities,
                  costs, demands, causes of action, damages and expenses arising in any way related to your breach of
                  any of the provisions of these Terms.
                </p>
                <h4>Severability</h4>
                <p>
                  If any provision of these Terms is found to be invalid under any applicable law, such provisions shall
                  be deleted without affecting the remaining provisions herein.
                </p>
                <h4>Variation of Terms</h4>
                <p>
                  Company Name is permitted to revise these Terms at any time as it sees fit, and by using this Website
                  you are expected to review these Terms on a regular basis.
                </p>
                <h4>Assignment</h4>
                <p>
                  The Company Name is allowed to assign, transfer, and subcontract its rights and/or obligations under
                  these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract
                  any of your rights and/or obligations under these Terms.
                </p>
                <h4>Entire Agreement</h4>
                <p>
                  These Terms constitute the entire agreement between Company Name and you in relation to your use of
                  this Website, and supersede all prior agreements and understandings.
                </p>
                <h4>Governing Law &amp; Jurisdiction</h4>
                <p>
                  These Terms will be governed by and interpreted in accordance with the laws of the State of Country,
                  and you submit to the non-exclusive jurisdiction of the state and federal courts located in Country
                  for the resolution of any disputes.
                </p>
              </div>
            </PreviewCard>
          </Block>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Terms;
