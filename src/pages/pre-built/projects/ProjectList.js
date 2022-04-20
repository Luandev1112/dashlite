import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import DatePicker from "react-datepicker";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Progress,
  FormGroup,
  ModalBody,
  Modal,
  DropdownItem,
  Form,
} from "reactstrap";
import {
  Block,
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  Icon,
  Button,
  Col,
  UserAvatar,
  PaginationComponent,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
  RSelect,
} from "../../../components/Component";
import { projectData, teamList } from "./ProjectData";
import { findUpper, setDeadline, setDeadlineDays, calcPercentage } from "../../../utils/Utils";
import { useForm } from "react-hook-form";

export const ProjectListPage = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });
  const [editId, setEditedId] = useState();
  const [data, setData] = useState(projectData);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    lead: "",
    tasks: 0,
    team: [],
    totalTask: 0,
    date: new Date(),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(7);

  // OnChange function to get the input data
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // function to reset the form
  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      lead: "",
      tasks: 0,
      totalTask: 0,
      team: [],
      date: new Date(),
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ edit: false, add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (sData) => {
    const { title, subtitle, description, tasks, totalTask } = sData;
    let submittedData = {
      id: data.length + 1,
      avatarClass: "pink",
      title: title,
      subtitle: subtitle,
      desc: description,
      lead: formData.lead,
      team: formData.team,
      tasks: tasks,
      totalTask: totalTask,
      deadline: new Date(`${formData.date}`), // Format ** mm/dd/yyyy
    };
    setData((data) => [submittedData, ...data]);
    resetForm();
    setModal({ add: false });
  };

  // submit function to update a new item
  const onEditSubmit = (sData) => {
    const { title, subtitle, description, tasks, totalTask } = sData;
    let submittedData;
    let newitems = data;
    newitems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          id: item.id,
          avatarClass: item.avatarClass,
          title: title,
          subtitle: subtitle,
          desc: description,
          lead: formData.lead,
          tasks: tasks,
          totalTask: totalTask,
          deadline: new Date(`${formData.date}`), // Format ** mm/dd/yyyy
          team: formData.team,
        };
      }
    });
    let index = newitems.findIndex((item) => item.id === editId);
    newitems[index] = submittedData;
    resetForm();
    setModal({ edit: false });
  };

  // function that loads the want to editted data
  const onEditClick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        setFormData({
          title: item.title,
          subtitle: item.subtitle,
          description: item.desc,
          lead: item.lead,
          team: item.team,
          tasks: item.tasks,
          totalTask: item.totalTask,
          date: item.deadline,
        });
        setModal({ edit: true }, { add: false });
        setEditedId(id);
      }
    });
  };

  // function to change the complete a project property
  const completeProject = (id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].deadline = setDeadline(0);
    setData([...newData]);
  };

  // function to change the check property of an item
  const selectorCheck = (e) => {
    let newData;
    newData = data.map((item) => {
      item.checked = e.currentTarget.checked;
      return item;
    });
    setData([...newData]);
  };

  // function to change the complete property of an item
  const selectorCompleteProject = () => {
    let newData;
    newData = data.map((item) => {
      if (item.checked === true) item.deadline = setDeadline(0);
      return item;
    });
    setData([...newData]);
  };

  // function to delete the seletected item
  const selectorDeleteProject = () => {
    let newData;
    newData = data.filter((item) => item.checked !== true);
    setData([...newData]);
  };

  // function to change the check property of selected item
  const onSelectChange = (e, id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].checked = e.currentTarget.checked;
    setData([...newData]);
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Project List"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page> Projects</BlockTitle>
              <BlockDes className="text-soft">You have total {data.length} projects</BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon name="filter-alt" className="d-none d-sm-inline"></Icon>
                          <span>Filtered By</span>
                          <Icon name="chevron-right" className="dd-indc"></Icon>
                        </DropdownToggle>
                        <DropdownMenu right>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Open</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Closed</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Onhold</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt" onClick={() => setModal({ add: true })}>
                      <Button color="primary">
                        <Icon name="plus"></Icon>
                        <span>Add Project</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <DataTable className="card-stretch">
            <DataTableBody>
              <DataTableHead className="nk-tb-item nk-tb-head">
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input form-control"
                      id="pid-all"
                      onChange={(e) => selectorCheck(e)}
                    />
                    <label className="custom-control-label" htmlFor="pid-all"></label>
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span className="sub-text">Project Name</span>
                </DataTableRow>
                <DataTableRow size="xxl">
                  <span className="sub-text">Client</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Project Lead</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Team</span>
                </DataTableRow>
                <DataTableRow size="xxl">
                  <span className="sub-text">Status</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text">Progress</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Deadline</span>
                </DataTableRow>
                <DataTableRow className="nk-tb-col-tools text-right">
                  <UncontrolledDropdown>
                    <DropdownToggle tag="a" className="btn btn-xs btn-trigger btn-icon dropdown-toggle mr-n1">
                      <Icon name="more-h"></Icon>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <ul className="link-list-opt no-bdr">
                        <li onClick={() => selectorCompleteProject()}>
                          <DropdownItem
                            tag="a"
                            href="#markasdone"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="check-round-cut"></Icon>
                            <span>Mark As Done</span>
                          </DropdownItem>
                        </li>
                        <li onClick={() => selectorDeleteProject()}>
                          <DropdownItem
                            tag="a"
                            href="#remove"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="trash"></Icon>
                            <span>Remove Projects</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DataTableRow>
              </DataTableHead>
              {currentItems.length > 0
                ? currentItems.map((item) => {
                    var days = setDeadlineDays(item.deadline);
                    return (
                      <DataTableItem key={item.id}>
                        <DataTableRow className="nk-tb-col-check">
                          <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input
                              type="checkbox"
                              className="custom-control-input form-control"
                              defaultChecked={item.checked}
                              id={item.id + "pid-all"}
                              key={Math.random()}
                              onChange={(e) => onSelectChange(e, item.id)}
                            />
                            <label className="custom-control-label" htmlFor={item.id + "pid-all"}></label>
                          </div>
                        </DataTableRow>
                        <DataTableRow>
                          <a
                            href="#title"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                            className="project-title"
                          >
                            <UserAvatar className="sq" theme={item.avatarClass} text={findUpper(item.title)} />
                            <div className="project-info">
                              <h6 className="title">{item.title}</h6>
                            </div>
                          </a>
                        </DataTableRow>
                        <DataTableRow size="xxl">
                          <span>{item.subtitle}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.lead}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <ul className="project-users g-1">
                            {item.team.slice(0, 2).map((member, idx) => {
                              return (
                                <li key={idx}>
                                  <UserAvatar
                                    className="sm"
                                    text={findUpper(member.label)}
                                    theme={member.theme}
                                    image={member.image}
                                  />
                                </li>
                              );
                            })}
                            {item.team.length > 2 && (
                              <li>
                                <UserAvatar theme="light" className="sm" text={`+${item.team.length - 2}`} />
                              </li>
                            )}
                          </ul>
                        </DataTableRow>
                        <DataTableRow size="xxl">
                          <span>{days === 0 ? "Closed" : "Open"}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <div className="project-list-progress">
                            <Progress
                              className="progress-pill progress-md bg-light"
                              value={days === 0 ? 100 : calcPercentage(item.totalTask, item.tasks)}
                            ></Progress>
                            <div className="project-progress-percent">
                              {days === 0 ? 100 : calcPercentage(item.totalTask, item.tasks)}%
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <span
                            className={`badge badge-dim badge-${
                              days > 10
                                ? "light"
                                : days <= 10 && days >= 2
                                ? "warning"
                                : days === 1
                                ? "danger"
                                : days <= 0 && "success"
                            }`}
                          >
                            <Icon name="clock"></Icon>
                            <span>{days <= 0 ? "Done" : days === 1 ? "Due Tomorrow" : days + " Days Left"}</span>
                          </span>
                        </DataTableRow>
                        <DataTableRow className="nk-tb-col-tools text-right">
                          <ul className="nk-tb-actions gx-1">
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
                                  <Icon name="more-h"></Icon>
                                </DropdownToggle>
                                <DropdownMenu right>
                                  <ul className="link-list-opt no-bdr">
                                    <li onClick={() => onEditClick(item.id)}>
                                      <DropdownItem
                                        tag="a"
                                        href="#edit"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                        }}
                                      >
                                        <Icon name="edit"></Icon>
                                        <span>Edit</span>
                                      </DropdownItem>
                                    </li>
                                    {days !== 0 && (
                                      <li onClick={() => completeProject(item.id)}>
                                        <DropdownItem
                                          tag="a"
                                          href="#markasdone"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          <Icon name="check-round-cut"></Icon>
                                          <span>Mark As Done</span>
                                        </DropdownItem>
                                      </li>
                                    )}
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </DataTableRow>
                      </DataTableItem>
                    );
                  })
                : null}
            </DataTableBody>
            <div className="card-inner">
              {data.length > 0 ? (
                <PaginationComponent
                  itemPerPage={itemPerPage}
                  totalItems={data.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              ) : (
                <div className="text-center">
                  <span className="text-silent">No projects found</span>
                </div>
              )}
            </div>
          </DataTable>
        </Block>

        <Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Add Project</h5>
              <div className="mt-4">
                <Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={formData.title}
                        placeholder="Enter Title"
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        ref={register({
                          required: "This field is required",
                        })}
                      />
                      {errors.title && <span className="invalid">{errors.title.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Client</label>
                      <input
                        type="text"
                        name="subtitle"
                        defaultValue={formData.subtitle}
                        placeholder="Enter client name"
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        ref={register({
                          required: "This field is required",
                        })}
                      />
                      {errors.subtitle && <span className="invalid">{errors.subtitle.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <FormGroup>
                      <label className="form-label">Description</label>
                      <textarea
                        name="description"
                        defaultValue={formData.description}
                        placeholder="Your description"
                        onChange={(e) => onInputChange(e)}
                        className="form-control-xl form-control no-resize"
                        ref={register({
                          required: "This field is required",
                        })}
                      />
                      {errors.description && <span className="invalid">{errors.description.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Number of Tasks</label>
                      <input
                        type="number"
                        name="tasks"
                        defaultValue={formData.tasks}
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        ref={register({
                          required: "This field is required",
                        })}
                      />
                      {errors.tasks && <span className="invalid">{errors.tasks.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Total Tasks</label>
                      <input
                        type="number"
                        name="totalTask"
                        defaultValue={formData.totalTask}
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        ref={register({
                          required: "This field is required",
                        })}
                      />
                      {errors.totalTask && <span className="invalid">{errors.totalTask.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Deadline Date</label>
                      <DatePicker
                        selected={formData.date}
                        className="form-control"
                        onChange={(date) => setFormData({ ...formData, date: date })}
                        minDate={new Date()}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Team Members</label>
                      <RSelect options={teamList} isMulti onChange={(e) => setFormData({ ...formData, team: e })} />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Lead</label>
                      <RSelect options={formData.team} onChange={(e) => setFormData({ ...formData, lead: e.value })} />
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit">
                          Add Project
                        </Button>
                      </li>
                      <li>
                        <Button
                          onClick={(ev) => {
                            ev.preventDefault();
                            onFormCancel();
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>

        <Modal isOpen={modal.edit} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                onFormCancel();
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="p-2">
              <h5 className="title">Update Project</h5>
              <div className="mt-4">
                <Form className="row gy-4" onSubmit={handleSubmit(onEditSubmit)}>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={formData.title}
                        placeholder="Enter Title"
                        onChange={(e) => onInputChange(e)}
                        ref={register({
                          required: "This field is required",
                        })}
                        className="form-control"
                      />
                      {errors.title && <span className="invalid">{errors.title.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Client</label>
                      <input
                        type="text"
                        name="subtitle"
                        defaultValue={formData.subtitle}
                        placeholder="Enter client Name"
                        onChange={(e) => onInputChange(e)}
                        ref={register({
                          required: "This field is required",
                        })}
                        className="form-control"
                      />
                      {errors.subtitle && <span className="invalid">{errors.subtitle.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <FormGroup>
                      <label className="form-label">Description</label>
                      <textarea
                        name="description"
                        defaultValue={formData.description}
                        placeholder="Your description"
                        onChange={(e) => onInputChange(e)}
                        ref={register({
                          required: "This field is required",
                        })}
                        className="form-control no-resize"
                      />
                      {errors.description && <span className="invalid">{errors.description.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Number of Tasks</label>
                      <input
                        type="number"
                        name="tasks"
                        onChange={(e) => onInputChange(e)}
                        ref={register({
                          required: "This field is required",
                        })}
                        defaultValue={formData.tasks}
                        className="form-control"
                      />
                      {errors.tasks && <span className="invalid">{errors.tasks.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Total Tasks</label>
                      <input
                        type="number"
                        name="totalTask"
                        min={formData.totalTask}
                        defaultValue={formData.totalTask}
                        onChange={(e) => onInputChange(e)}
                        ref={register({
                          required: "This field is required",
                        })}
                        className="form-control"
                      />
                      {errors.totalTask && <span className="invalid">{errors.totalTask.message}</span>}
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Deadline Date</label>
                      <DatePicker
                        selected={formData.date}
                        className="form-control"
                        onChange={(date) => setFormData({ ...formData, date: date })}
                        minDate={new Date()}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Team Members</label>
                      <RSelect
                        options={teamList}
                        isMulti
                        defaultValue={formData.team}
                        onChange={(e) => setFormData({ ...formData, team: e })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <label className="form-label">Lead</label>
                      <RSelect
                        options={formData.team}
                        defaultValue={[{ value: formData.lead, label: formData.lead }]}
                        onChange={(e) => setFormData({ ...formData, lead: e.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit">
                          Update Project
                        </Button>
                      </li>
                      <li>
                        <Button
                          onClick={(ev) => {
                            ev.preventDefault();
                            onFormCancel();
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </Button>
                      </li>
                    </ul>
                  </Col>
                </Form>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default ProjectListPage;
