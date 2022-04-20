import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import CalenderApp from "../../../components/partials/calender/Calender";
import DatePicker from "react-datepicker";
import { Modal, ModalBody, FormGroup, ModalHeader, Button } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Icon,
  PreviewAltCard,
  Row,
  RSelect,
} from "../../../components/Component";
import { eventOptions, events } from "../../../components/partials/calender/CalenderData";
import { useForm } from "react-hook-form";
import { setDateForPicker } from "../../../utils/Utils";

const Calender = () => {
  const [modal, setModal] = useState(false);
  const [mockEvents, updateEvent] = useState(events);
  const [dates, setDates] = useState({
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    endDate: new Date(),
  });
  const [theme, settheme] = useState("");
  const toggle = () => {
    setModal(!modal);
  };
  const { errors, register, handleSubmit } = useForm();

  const handleFormSubmit = (formData) => {
    let newEvent = {
      id: "default-event-id-" + Math.floor(Math.random() * 9999999),
      title: formData.title,
      start: setDateForPicker(dates.startDate),
      end: setDateForPicker(dates.endDate),
      description: formData.description,
      className: theme.value,
      type: theme,
    };
    updateEvent([...mockEvents, newEvent]);
    settheme({
      value: "fc-event-primary",
      label: "Company",
    });
    toggle();
  };

  const editEvent = (formData) => {
    let newEvents = mockEvents;
    const index = newEvents.findIndex((item) => item.id === formData.id);
    events[index] = formData;
    updateEvent([...events]);
  };

  const deleteEvent = (id) => {
    let filteredEvents = mockEvents.filter((item) => item.id !== id);
    updateEvent(filteredEvents);
  };

  return (
    <React.Fragment>
      <Head title="Calender" />
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Calendar</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <Button color="primary" onClick={toggle}>
                <Icon name="plus" />
                <span>Add Event</span>
              </Button>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <PreviewAltCard>
            <CalenderApp events={mockEvents} onDelete={deleteEvent} onEdit={editEvent} />
          </PreviewAltCard>
        </Block>
      </Content>
      <Modal isOpen={modal} toggle={toggle} className="modal-md">
        <ModalHeader toggle={toggle}>Add Event</ModalHeader>
        <ModalBody>
          <form className="form-validate is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
            <Row className="gx-4 gy-3">
              <Col size="12">
                <FormGroup>
                  <label className="form-label" htmlFor="event-title">
                    Event Title
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      id="event-title"
                      name="title"
                      className="form-control"
                      ref={register({ required: true })}
                    />
                    {errors.title && <p className="invalid">This field is required</p>}
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label className="form-label">Start Date &amp; Time</label>
                  <Row className="gx-2">
                    <div className="w-55">
                      <div className="form-control-wrap">
                        <DatePicker
                          selected={dates.startDate}
                          onChange={(date) => setDates({ ...dates, startDate: date })}
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                    <div className="w-45">
                      <div className="form-control-wrap has-timepicker">
                        <DatePicker
                          selected={dates.startTime}
                          onChange={(date) => setDates({ ...dates, startTime: date })}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                  </Row>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <label className="form-label">End Date &amp; Time</label>
                  <Row className="gx-2">
                    <div className="w-55">
                      <div className="form-control-wrap">
                        <DatePicker
                          selected={dates.endDate}
                          onChange={(date) => setDates({ ...dates, endDate: date })}
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                    <div className="w-45">
                      <div className="form-control-wrap has-timepicker">
                        <DatePicker
                          selected={dates.endTime}
                          onChange={(date) => setDates({ ...dates, endTime: date })}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                  </Row>
                </FormGroup>
              </Col>
              <Col size="12">
                <FormGroup>
                  <label className="form-label" htmlFor="event-description">
                    Event Description
                  </label>
                  <div className="form-control-wrap">
                    <textarea
                      className="form-control"
                      id="event-description"
                      name="description"
                      ref={register({ required: true })}
                    ></textarea>

                    {errors.description && <p className="invalid">This field is required</p>}
                  </div>
                </FormGroup>
              </Col>
              <Col size="12">
                <FormGroup>
                  <label className="form-label">Event Category</label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={eventOptions}
                      defaultValue={{
                        value: "fc-event-primary",
                        label: "Company",
                      }}
                      onChange={(e) => settheme(e)}
                      //ref={register({ required: true })}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col size="12">
                <ul className="d-flex justify-content-between gx-4 mt-1">
                  <li>
                    <Button type="submit" color="primary">
                      Add Event
                    </Button>
                  </li>
                  <li>
                    <Button color="danger" className="btn-dim" onClick={toggle}>
                      Discard
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default Calender;
