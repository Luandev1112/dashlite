import React, { useState, forwardRef } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import DatePicker from "react-datepicker";
import { FormGroup, Label, Row, Col } from "reactstrap";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
  CodeBlock,
  Icon,
} from "../../../components/Component";

const ExampleCustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
  <div onClick={onClick} ref={ref}>
    <div className="form-icon form-icon-left">
      <Icon name="calendar"></Icon>
    </div>
    <input className="form-control date-picker" type="text" value={value} onChange={onChange} />
  </div>
));

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startIconDate, setStartIconDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [rangeStart, setRangeStart] = useState(new Date());
  const [rangeEnd, setRangeEnd] = useState();
  const [rangeDate, setRangeDate] = useState({
    start: new Date(),
    end: null,
  });

  const onRangeChange = (dates) => {
    const [start, end] = dates;
    setRangeDate({ start: start, end: end });
  };

  return (
    <React.Fragment>
      <Head title="Date & Time Picker"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              Date & Time Picker
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                Examples and usage guidelines for date and time picker for forms. For further preview, visit the{" "}
                <a href="https://reactdatepicker.com/" target="_blank" rel="noreferrer">
                  React Datepicker
                </a>{" "}
                library.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Date Picker</BlockTitle>
              <BlockDes>
                To use the date picker component, import it such as{" "}
                <code>import DatePicker from "react-datepicker"</code>.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label>Datepicker</Label>
                  <div className="form-control-wrap">
                    <DatePicker selected={startDate} onChange={setStartDate} className="form-control date-picker" />{" "}
                  </div>
                  <div className="form-note">
                    Date Format <code>mm/dd/yyyy</code>
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label>Date Picker With Icon</Label>
                  <div className="form-control-wrap">
                    <div className="form-icon form-icon-left">
                      <Icon name="calendar"></Icon>
                    </div>
                    <DatePicker
                      selected={startIconDate}
                      className="form-control date-picker"
                      onChange={setStartIconDate}
                      customInput={<ExampleCustomInput />}
                    />
                  </div>
                  <div className="form-note">
                    Date Format <code>mm/dd/yyyy</code>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </PreviewCard>
        </Block>

        <Block>
          <CodeBlock language="jsx">{`<DatePicker selected={startDate} className="form-control date-picker" />`}</CodeBlock>
        </Block>

        <Block>
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Date Range Picker</BlockTitle>
              <BlockDes>
                To use the time component, add extra props to <code>{"<DatePicker />"}</code> component such as{" "}
                <code>selectsRange || startDate || endDate</code>.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm={6}>
                <FormGroup>
                  <Label>Datepicker Range Multiple Input</Label>
                  <div className="form-control-wrap">
                    <div className="input-daterange date-picker-range input-group">
                      <DatePicker
                        selected={rangeStart}
                        onChange={setRangeStart}
                        selectsStart
                        startDate={rangeStart}
                        endDate={rangeEnd}
                        wrapperClassName="start-m"
                        className="form-control"
                      />{" "}
                      <div className="input-group-addon">TO</div>
                      <DatePicker
                        selected={rangeEnd}
                        onChange={setRangeEnd}
                        startDate={rangeStart}
                        endDate={rangeEnd}
                        selectsEnd
                        minDate={rangeStart}
                        wrapperClassName="end-m"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="form-note">
                    Date Format <code>mm/dd/yyyy</code>
                  </div>
                </FormGroup>
              </Col>
              <Col sm={6}>
                <FormGroup>
                  <Label>Datepicker Range Single Input</Label>
                  <div className="form-control-wrap">
                    <DatePicker
                      selected={rangeDate.start}
                      startDate={rangeDate.start}
                      onChange={onRangeChange}
                      endDate={rangeDate.end}
                      selectsRange
                      className="form-control date-picker"
                    />{" "}
                  </div>
                  <div className="form-note">
                    Date Format <code>mm/dd/yyyy</code>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </PreviewCard>
        </Block>

        <Block>
          <CodeBlock language="jsx">{` <DatePicker
    selected={rangeDate.start}
    startDate={rangeDate.start}
    onChange={onRangeChange}
    endDate={rangeDate.end}
    selectsRange
    className="form-control date-picker"
/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Time Picker</BlockTitle>
              <BlockDes>
                To use the time component, add extra props to <code>{"<DatePicker />"}</code> component such as{" "}
                <code>showTimeSelect || showTimeSelectOnly || timeInterval</code>.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label>Timepicker</Label>
                  <div className="form-control-wrap has-timepicker focused">
                    <DatePicker
                      selected={startTime}
                      onChange={(date) => setStartTime(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className="form-control date-picker"
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </PreviewCard>
        </Block>
        <Block>
          <CodeBlock language="jsx">{` <DatePicker
    selected={startTime}
    onChange={(date) => setStartTime(date)}
    showTimeSelect
    showTimeSelectOnly
    timeIntervals={15}
    timeCaption="Time"
    dateFormat="h:mm aa"
    className="form-control date-picker"
/>`}</CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Month & Year Picker</BlockTitle>
              <BlockDes>
                To use the time component, add extra props to <code>{"<DatePicker />"}</code> component such as{" "}
                <code>showMonthYearPicker || showFullMonthYearPicker || showYearPicker</code>.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="gy-4">
              <Col sm="6">
                <FormGroup>
                  <Label>Month Picker</Label>
                  <div className="form-control-wrap">
                    <DatePicker
                      selected={month}
                      onChange={(date) => setMonth(date)}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      showFullMonthYearPicker
                      className="form-control date-picker"
                    />
                  </div>
                  <div className="form-note">
                    Date Format <code>mm/yyyy</code>
                  </div>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label>Year Picker</Label>
                  <div className="form-control-wrap">
                    <DatePicker
                      selected={year}
                      onChange={(date) => setYear(date)}
                      dateFormat="yyyy"
                      showYearPicker
                      yearItemNumber={15}
                      className="form-control date-picker"
                    />
                  </div>
                  <div className="form-note">
                    Date Format <code>yyyy</code>
                  </div>
                </FormGroup>
              </Col>
            </Row>
          </PreviewCard>
        </Block>
        <Block>
          <CodeBlock language="jsx">{` <DatePicker
  selected={year}
  onChange={(date) => setYear(date)}
  dateFormat="yyyy"
  showYearPicker
  yearItemNumber={15}
  className="form-control date-picker"
/>`}</CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};
export default DateTimePicker;
