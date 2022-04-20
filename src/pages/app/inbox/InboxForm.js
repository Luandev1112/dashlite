import React, { useEffect, useState } from "react";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { formTemplates } from "./InboxData";
import { Icon, Button, TooltipComponent } from "../../../components/Component";
import { Modal, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { getDateStructured, currentTime } from "../../../utils/Utils";

const tagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  backspace: "edit",
  addTagOnBlur: false,
  placeholder: "",
  dropdown: {
    enabled: 0, // shows suggestions dropdown
  },
};

const InboxForm = ({
  mailData,
  setMailData,
  currentItem,
  deleteInbox,
  editOnOpen,
  composeState,
  toggleModal,
  composeMail,
  draftData,
}) => {
  const [inboxText, setInboxText] = useState();
  const [inboxSubject, setInboxSubject] = useState();
  const [templateList, setTemplateList] = useState(formTemplates);
  const [attachmentList, setAttachmentList] = useState([]);
  const [tagifyOptions, setTagifyOptions] = useState([composeMail]);
  const [ccTagify, setCCTagify] = useState({
    toggle: false,
    value: [""],
  });
  const [bccTagify, setBCCTagify] = useState({
    toggle: false,
    value: [""],
  });

  useEffect(() => {
    setInboxSubject(draftData.subject);
    setInboxText(draftData.message);
  }, [draftData]);

  useEffect(() => {
    if (draftData.mail) {
      setTagifyOptions([draftData.mail]);
    } else {
      setTagifyOptions([composeMail]);
    }
  }, [composeMail]);

  const addMailFunc = (type) => {
    let defaultData = mailData;
    let dataModal = {
      id: mailData.length + 1,
      userId: 1,
      message: {
        subject: inboxSubject,
        meta: {
          tags: [],
          [type]: true,
        },
        reply: [
          {
            replyId: `rep_${Math.random()}`,
            userId: 1,
            to: {
              mail: tagifyOptions[0].value ? tagifyOptions[0].value : tagifyOptions[0],
              bcc: bccTagify.value[0].value,
              cc: ccTagify.value[0].value,
            },
            attachment: attachmentList.length === 0 ? null : attachmentList,
            date: `${getDateStructured(new Date())}`,
            time: currentTime(),
            replyMessage: [inboxText],
          },
        ],
      },
    };
    setInboxText("");
    setInboxSubject("");
    setAttachmentList([]);
    if (editOnOpen) {
      let item = defaultData.findIndex((item) => item.id === currentItem.id);
      defaultData[item].message.meta.trash = true;
      defaultData[item].message.meta.archive = false;
    }
    setMailData([...defaultData, dataModal]);
    toggleModal(false);
  };

  const sendInbox = () => {
    if (tagifyOptions[0] !== "") {
      addMailFunc("sent");
    }
  };

  const addToDraft = () => {
    if (inboxSubject !== "" || inboxText !== "") {
      if (editOnOpen) {
        let defaultData = mailData;
        let findIndex = defaultData.findIndex((el) => el.id === currentItem.id);
        let dataModal = {
          id: currentItem.id,
          userId: 1,
          message: {
            subject: inboxSubject,
            meta: {
              tags: currentItem.message.meta.tags,
              draft: true,
            },
            reply: [
              {
                replyId: `rep_${Math.random()}`,
                userId: 1,
                to: {
                  mail: tagifyOptions[0].value ? tagifyOptions[0].value : tagifyOptions[0],
                  bcc: bccTagify.value[0].value,
                  cc: ccTagify.value[0].value,
                },
                date: `${getDateStructured(new Date())}`,
                time: currentTime(),
                replyMessage: [inboxText],
              },
            ],
          },
        };
        defaultData[findIndex] = dataModal;
        setMailData([...defaultData]);
      } else {
        addMailFunc("draft");
      }
    }
  };

  const onTagifyChange = (e) => {
    if (e.detail.value !== "") {
      let arrayVal = JSON.parse(e.detail.value);
      setTagifyOptions(arrayVal);
    } else {
      setTagifyOptions([""]);
    }
  };

  const onCcChange = (e) => {
    if (e.detail.value !== "") {
      let arrayVal = JSON.parse(e.detail.value);
      setCCTagify({ toggle: true, value: arrayVal });
    } else {
      setCCTagify({ toggle: true, value: [""] });
    }
  };

  const onBccChange = (e) => {
    if (e.detail.value !== "") {
      let arrayVal = JSON.parse(e.detail.value);
      setBCCTagify({ toggle: true, value: arrayVal });
    } else {
      setBCCTagify({ toggle: true, value: [""] });
    }
  };

  const saveTemplate = () => {
    if (inboxText !== "") {
      let defaultList = templateList;
      let newObject = {
        id: defaultList.length + 1,
        text: inboxText,
      };
      setTemplateList([...defaultList, newObject]);
      setInboxText("");
    }
  };

  const onAttachmentClick = () => {
    const inputEl = document.getElementById("attachmentInput");
    inputEl.click();
    inputEl.onchange = onAttachmentChange;
  };

  const onAttachmentChange = (ev) => {
    if (ev.target.files.length > 0) {
      setAttachmentList([...attachmentList, { fileName: ev.target.files[0].name }]);
    }
  };

  const onImageClick = () => {
    const inputEl = document.getElementById("imageInput");
    inputEl.click();
    inputEl.onchange = onImageChange;
  };

  const onImageChange = (ev) => {
    if (
      ev.target.files.length > 0 &&
      (ev.target.files[0].type === "image/jpeg" ||
        ev.target.files[0].type === "image/png" ||
        ev.target.files[0].type === "image/jpg")
    ) {
      setAttachmentList([...attachmentList, { fileName: ev.target.files[0].name }]);
    }
  };

  const removeAttachment = (text) => {
    let defaultData = attachmentList;
    defaultData = defaultData.filter((item) => item.fileName !== text);
    setAttachmentList([...defaultData]);
  };

  const onDeleteClick = () => {
    if (editOnOpen) {
      deleteInbox(currentItem.id);
    }
    toggleModal();
  };

  const settings = {
    ...tagifySettings,
    addTagOnBlur: true,
  };

  return (
    <Modal isOpen={composeState} className="modal-lg" toggle={() => toggleModal()}>
      <div className="modal-header">
        <h6 className="modal-title">Compose Message</h6>
        <a
          href="#cancel"
          onClick={(ev) => {
            ev.preventDefault();
            addToDraft();
            toggleModal();
          }}
          className="close"
        >
          <Icon name="cross-sm"></Icon>
        </a>
      </div>
      <div className="modal-body p-0">
        <div className="nk-reply-form-header">
          <div className="nk-reply-form-group">
            <div className="nk-reply-form-title d-sm-none">Reply</div>
            <div className="nk-reply-form-input-group">
              <div className="nk-reply-form-input nk-reply-form-input-to">
                <label className="label">To</label>
                <Tags
                  className="input-mail"
                  mode="textarea"
                  value={tagifyOptions}
                  onChange={(e) => onTagifyChange(e)}
                  settings={settings}
                  showDropdown={false}
                />
              </div>
              <div className={`nk-reply-form-input nk-reply-form-input-cc ${ccTagify.toggle ? "expanded" : ""}`}>
                <label className="label">Cc</label>
                <Tags
                  className="input-mail"
                  mode="textarea"
                  value={ccTagify.value}
                  onChange={(e) => onCcChange(e)}
                  settings={settings}
                  showDropdown={false}
                />
                <a
                  className="toggle-opt active"
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setCCTagify({ ...ccTagify, toggle: !ccTagify.toggle });
                  }}
                >
                  <Icon name="cross"></Icon>
                </a>
              </div>
              <div className={`nk-reply-form-input nk-reply-form-input-bcc ${bccTagify.toggle ? "expanded" : ""}`}>
                <label className="label">Bcc</label>
                <Tags
                  className="input-mail"
                  mode="textarea"
                  value={bccTagify.value}
                  onChange={(e) => onBccChange(e)}
                  settings={settings}
                  showDropdown={false}
                />
                <a
                  className="toggle-opt active"
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setBCCTagify({ ...bccTagify, toggle: !bccTagify.toggle });
                  }}
                >
                  <Icon name="cross"></Icon>
                </a>
              </div>
            </div>
            <ul className="nk-reply-form-nav">
              <li>
                <a
                  className="toggle-opt"
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setCCTagify({ ...ccTagify, toggle: !ccTagify.toggle });
                  }}
                >
                  CC
                </a>
              </li>
              <li>
                <a
                  className="toggle-opt"
                  href="#item"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setBCCTagify({ ...bccTagify, toggle: !bccTagify.toggle });
                  }}
                >
                  BCC
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nk-reply-form-editor">
          <div className="nk-reply-form-field">
            <input
              type="text"
              className="form-control form-control-simple"
              placeholder="Subject"
              value={inboxSubject}
              onChange={(e) => setInboxSubject(e.target.value)}
            />
          </div>
          <div className="nk-reply-form-field">
            <textarea
              className="form-control form-control-simple no-resize ex-large"
              placeholder="Hello"
              value={inboxText}
              onChange={(e) => setInboxText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="nk-reply-form-attachment">
          {attachmentList.map((item, key) => (
            <div key={key} className="nk-reply-form-attachment-list p-1 align-center justify-between m-2 d-flex">
              <span>{item.fileName}</span>
              <a
                className="toggle-opt"
                href="remove"
                onClick={(ev) => {
                  ev.preventDefault();
                  removeAttachment(item.fileName);
                }}
              >
                <Icon name="cross"></Icon>
              </a>
            </div>
          ))}
        </div>
        <div className="nk-reply-form-tools">
          <ul className="nk-reply-form-actions g-1">
            <li className="mr-2">
              <Button color="primary" type="submit" onClick={() => sendInbox()}>
                Send
              </Button>
            </li>
            <li>
              <UncontrolledDropdown>
                <DropdownToggle
                  tag="a"
                  className="btn btn-icon btn-sm btn-tooltip"
                  href="#toggle"
                  onClick={(ev) => ev.preventDefault()}
                >
                  <Icon name="hash"></Icon>
                </DropdownToggle>
                <DropdownMenu>
                  <ul className="link-list-opt no-bdr link-list-template">
                    <li className="opt-head">
                      <span>Quick Insert</span>
                    </li>
                    {templateList.map((item) => (
                      <li key={item.id}>
                        <DropdownItem
                          href="#item"
                          tag="a"
                          onClick={(ev) => {
                            ev.preventDefault();
                            setInboxText(inboxText + item.text);
                          }}
                        >
                          <span>{item.text}</span>
                        </DropdownItem>
                      </li>
                    ))}
                    <li className="divider"></li>
                    <li onClick={() => saveTemplate()}>
                      <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                        <Icon name="file-plus"></Icon>
                        <span>Save as Template</span>
                      </DropdownItem>
                    </li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </li>
            <li onClick={() => onAttachmentClick()}>
              <TooltipComponent
                tag="a"
                containerClassName="btn btn-icon btn-sm"
                icon="clip-v"
                id="ibx-msg-attachment"
                direction="top"
                text="Upload Attachment"
              />
              <input type="file" id="attachmentInput" style={{ display: "none" }}></input>
            </li>
            <li onClick={() => onImageClick()}>
              <TooltipComponent
                tag="a"
                containerClassName="btn btn-icon btn-sm"
                icon="img"
                id="ibx-msg-images"
                direction="top"
                text="Upload Images"
              />
            </li>
            <input type="file" id="imageInput" accept=".png, .jpg, .jpeg" style={{ display: "none" }}></input>
          </ul>
          <ul className="nk-reply-form-actions g-1">
            <li onClick={() => onDeleteClick()}>
              <TooltipComponent
                tag="a"
                containerClassName="btn-trigger btn btn-icon"
                icon="trash"
                id="ibx-msg-dlt"
                direction="top"
                text="Delete"
              />
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default InboxForm;
