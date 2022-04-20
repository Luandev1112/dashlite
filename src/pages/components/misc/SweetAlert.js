import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Swal from "sweetalert2";
import { Button } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
} from "../../../components/Component";

const SweetAlertPage = () => {
  const handleDefault = () => {
    Swal.fire({
      title: "A simple sweet content",
      focusConfirm: false,
    });
  };

  const handleDefault2 = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is around?",
      focusConfirm: false,
    });
  };

  const handleSuccess = () => {
    Swal.fire({
      icon: "success",
      title: "Good Job",
      text: "You clicked the button",
      focusConfirm: false,
    });
  };

  const handleInfo = () => {
    Swal.fire({
      icon: "info",
      title: "Good Job",
      text: "You clicked the button",
      focusConfirm: false,
    });
  };

  const handleWarning = () => {
    Swal.fire({
      icon: "warning",
      title: "Good Job",
      text: "You clicked the button",
      focusConfirm: false,
    });
  };

  const handleError = () => {
    Swal.fire({
      icon: "error",
      title: "Good Job",
      text: "You clicked the button",
      focusConfirm: false,
    });
  };

  const handleQuestion = () => {
    Swal.fire({
      icon: "question",
      title: "Good Job",
      text: "You clicked the button",
      focusConfirm: false,
    });
  };

  const handleAdvanced1 = (e) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong",
      focusConfirm: false,
      footer: "<a href=''> Why do I have this issue? </a>",
    });
    e.preventDefault();
  };

  const handleAdvanced2 = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAdvanced3 = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleAdvanced4 = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  const handleAdvanced5 = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  const handleAdvanced6 = () => {
    Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
          imageWidth: "120px",
        });
      }
    });
  };
  return (
    <React.Fragment>
      <Head title="Sweetalert"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Sweet Alert 2
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Inside React DashLite, we integrated the{" "}
                <a href="https://sweetalert2.github.io/" target="_blank" rel="noreferrer">
                  SweetAlert2
                </a>{" "}
                which is beautiful, responsive, highly customizable JavaScript's popup boxes.
              </p>
              <p>
                You can see full uses documentation details from{" "}
                <a href="https://sweetalert2.github.io/" rel="noreferrer" target="_blank">
                  here
                </a>
                .
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Sweetalert Basic Demo</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="primary" className="eg-swal-default" onClick={() => handleDefault()}>
                  Default
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-default-s2" onClick={() => handleDefault2()}>
                  Default S2
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const handleDefault2 = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is around?",
    });
  }; 
            
<Button color="primary" className="eg-swal-default" onClick={() => handleDefault()}>
    Default
</Button>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Sweetalert Basic Demo</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="success" className="eg-swal-success" onClick={() => handleSuccess()}>
                  Success
                </Button>
              </li>
              <li>
                <Button color="info" className="eg-swal-info" onClick={() => handleInfo()}>
                  Info
                </Button>
              </li>
              <li>
                <Button color="warning" className="eg-swal-warning" onClick={() => handleWarning()}>
                  Warning
                </Button>
              </li>
              <li>
                <Button color="danger" className="eg-swal-error" onClick={() => handleError()}>
                  Error
                </Button>
              </li>
              <li>
                <Button color="light" className="eg-swal-question" onClick={() => handleQuestion()}>
                  Question
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`const handleQuestion = () => {
    Swal.fire({
        icon: "question",
        title: "Good Job",
        text: "You clicked the button",
        focusConfirm: false,
    });
};
              
<Button color="light" className="eg-swal-question" onClick={() => handleQuestion()}>
    Question
</Button>`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Sweetalert Advanced Demo</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <ul className="align-center flex-wrap g-2">
              <li>
                <Button color="primary" className="eg-swal-av1" onClick={(e) => handleAdvanced1(e)}>
                  Advanced 01
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-av2" onClick={(e) => handleAdvanced2(e)}>
                  Advanced 02
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-av3" onClick={(e) => handleAdvanced3(e)}>
                  Advanced 03
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-av4" onClick={(e) => handleAdvanced4(e)}>
                  Advanced 04
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-av5" onClick={(e) => handleAdvanced5(e)}>
                  Advanced 05
                </Button>
              </li>
              <li>
                <Button color="primary" className="eg-swal-av6" onClick={(e) => handleAdvanced6(e)}>
                  Advanced 06
                </Button>
              </li>
            </ul>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`  const handleAdvanced3 = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    });
};

<Button color="primary" className="eg-swal-av3" onClick={(e) => handleAdvanced3(e)}>
    Advanced 03
</Button>`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default SweetAlertPage;
