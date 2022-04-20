import React, { useEffect, useState, useRef } from "react";
import InboxMessageHeader from "./InboxMessageHeader";
import SimpleBar from "simplebar-react";
import InboxReplyItem from "./InboxReply";
import Tags from "@yaireo/tagify/dist/react.tagify";
import { contacts, formTemplates } from "./InboxData";
import { Button, Icon, TooltipComponent } from "../../../components/Component";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { currentTime, getDateStructured } from "../../../utils/Utils";

const tagifySettings = {
  blacklist: ["xxx", "yyy", "zzz"],
  maxTags: 6,
  backspace: "edit",
  addTagOnBlur: false,
  placeholder: "",
  dropdown: {
    enabled: 0, // a;ways show suggestions dropdown
  },
};

const InboxMessages = ({
  mailId,
  data,
  setMailId,
  toggleMessageView,
  onFavoriteClick,
  deleteInbox,
  onArchiveClick,
  onSpamClick,
  outerLabels,
}) => {
  const [mailData, setMailData] = useState();
  const [inboxText, setInboxText] = useState("");
  const [templateList, setTemplateList] = useState(formTemplates);
  const [attachmentList, setAttachmentList] = useState([]);
  const [tagifyOptions, setTagifyOptions] = useState([{ value: "info@softnio.com" }]);
  const [ccTagify, setCCTagify] = useState({
    toggle: false,
    value: [""],
  });
  const [bccTagify, setBCCTagify] = useState({
    toggle: false,
    value: [""],
  });

  useEffect(() => {
    let defaultData = data.find((item) => item.id === mailId);
    let sentTo = defaultData.message.reply[0].to;
    let user = contacts.find((el) => el.id === sentTo.user);
    setMailData(defaultData);
    if (user) {
      setTagifyOptions([{ value: user.mail }]);
    } else {
      setTagifyOptions([{ value: sentTo.mail }]);
    }
  }, [mailId, data]);

  const removeTag = (text) => {
    let defaultData = mailData;
    let tags = defaultData.message.meta.tags.filter((item) => item.text !== text);
    defaultData.message.meta.tags = tags;
    setMailData({ ...defaultData });
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const scrollHeight = messagesEndRef.current.scrollHeight;
      const height = messagesEndRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  const sendInbox = () => {
    if (inboxText !== "") {
      let defaultData = mailData;
      let defaultReplyItem = defaultData.message.reply;
      const replyItemModel = {
        replyId: `rep_${Math.random()}`,
        userId: 1,
        to: {
          user: mailData.message.reply[0].to.user,
          mail: mailData.message.reply[0].to.mail,
          bcc: bccTagify.value[0].value,
          cc: ccTagify.value[0].value,
        },
        attachment: attachmentList.length === 0 ? null : attachmentList,
        date: `${getDateStructured(new Date())}`,
        time: currentTime(),
        replyMessage: [inboxText],
      };
      defaultReplyItem.push(replyItemModel);
      setInboxText("");
      setBCCTagify({ toggle: false, value: [""] });
      setCCTagify({ toggle: false, value: [""] });
      setAttachmentList([]);
      setMailData({ ...defaultData });
      setTimeout(() => scrollToBottom());
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

  const replyTo = (userMail) => {
    setTagifyOptions([{ value: userMail }]);
    scrollToBottom();
  };

  const forwardTo = () => {
    setTagifyOptions([""]);
    scrollToBottom();
  };

  const deleteMessage = (id) => {
    let defaultData = mailData;
    let defaultReply = defaultData.message.reply;
    if (defaultReply.length === 1) {
      //setMailData({ ...defaultData });
      deleteInbox(mailData.id);
    } else {
      defaultReply = defaultData.message.reply.filter((item) => item.replyId !== id);
      defaultData.message.reply = defaultReply;
      setMailData({ ...defaultData });
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

  const settings = {
    ...tagifySettings,
    addTagOnBlur: true,
  };

  return (
    <React.Fragment>
      {mailData && (
        <React.Fragment>
          <InboxMessageHeader
            toggleMessageView={toggleMessageView}
            deleteInbox={deleteInbox}
            onArchiveClick={onArchiveClick}
            onSpamClick={onSpamClick}
            msgId={mailData.id}
            setMailId={setMailId}
            localLabel={mailData.message.meta.tags}
            outerLabels={outerLabels}
            mailData={mailData}
            setMailData={setMailData}
          />
          <SimpleBar className="nk-ibx-reply nk-reply" scrollableNodeProps={{ ref: messagesEndRef }}>
            <div className="nk-ibx-reply-head">
              <div>
                <h4 className="title">{mailData.message.subject ? mailData.message.subject : "(no subject)"}</h4>
                <ul className="nk-ibx-tags g-1">
                  {mailData.message.meta.tags.map((tagItem, index) => (
                    <li className="btn-group is-tags" key={index}>
                      <Button color={tagItem.color} size="xs" className="btn-dim">
                        {tagItem.text}
                      </Button>
                      <Button
                        color={tagItem.color}
                        size="xs"
                        className="btn-icon btn-dim"
                        onClick={() => removeTag(tagItem.text)}
                      >
                        <Icon name="cross"></Icon>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="d-flex g-1">
                <li className="d-none d-sm-block">
                  <TooltipComponent
                    tag="a"
                    containerClassName="btn btn-icon btn-trigger btn-tooltip"
                    icon="printer"
                    id="ibx-msg-print"
                    direction="left"
                    text="Print"
                  />
                </li>
                <li className="mr-n1">
                  <div className="asterisk">
                    <a
                      href="#item"
                      className={`btn btn-trigger btn-icon btn-tooltip ${
                        mailData.message.meta.favourite ? "active" : ""
                      }`}
                      onClick={(ev) => {
                        ev.preventDefault();
                        onFavoriteClick(mailData.id);
                      }}
                    >
                      <Icon name={`${mailData.message.meta.favourite ? "star-fill" : "star"}`}></Icon>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="nk-ibx-reply-group">
              {mailData.message.reply.map((replyItem, index) => (
                <InboxReplyItem
                  reply={replyItem}
                  key={index}
                  deleteMessage={deleteMessage}
                  replyTo={replyTo}
                  forwardTo={forwardTo}
                />
              ))}
            </div>
            <div className="nk-ibx-reply-form nk-reply-form">
              <div className="nk-reply-form-header">
                <div className="nk-reply-form-group">
                  <div className="nk-reply-form-dropdown">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        tag="a"
                        href="#item"
                        onClick={(ev) => ev.preventDefault()}
                        className="btn btn-sm btn-trigger btn-icon"
                      >
                        <Icon name="curve-up-left"></Icon>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-md">
                        <ul className="link-list-opt no-bdr">
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="reply-fill"></Icon> <span>Reply to Abu Bin Ishtiyak</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="forward-arrow-fill"></Icon> <span>Forword</span>
                            </DropdownItem>
                          </li>
                          <li className="divider"></li>
                          <li>
                            <DropdownItem tag="a" href="#item" onClick={(ev) => ev.preventDefault()}>
                              <Icon name="edit-fill"></Icon> <span>Edit Subject</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
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
                    <div
                      className={`nk-reply-form-input nk-reply-form-input-bcc ${bccTagify.toggle ? "expanded" : ""}`}
                    >
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
                  <textarea
                    className="form-control form-control-simple no-resize"
                    placeholder="Hello"
                    value={inboxText}
                    onChange={(e) => setInboxText(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="nk-reply-form-attachment">
                {attachmentList.map((item, index) => (
                  <div
                    key={index}
                    className="nk-reply-form-attachment-list p-1 align-center justify-between m-2 d-flex"
                  >
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
                      <DropdownMenu className="dropdown-menu-md">
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
                                <span className="text-ellipsis">{item.text}</span>
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
              </div>
            </div>
          </SimpleBar>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default InboxMessages;
