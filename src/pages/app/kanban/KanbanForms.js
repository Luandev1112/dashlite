import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { ModalBody, FormGroup, Col } from "reactstrap";
import { Icon, Button, RSelect } from "../../../components/Component";
import { getDateStructured } from "../../../utils/Utils";
import { useForm } from "react-hook-form";
import { ColorOptions } from "../../../components/partials/color-select-menu/ColorMenu";
import { tagSet, teamList, themes } from "./KanbanData";

export const KanbanTaskForm = ({ toggle, data, setData, taskToBoard, editTask }) => {
  const [formData, setFormData] = useState({
    title: editTask ? editTask.title : "",
    desc: editTask ? editTask.desc : "",
    category: editTask ? editTask.meta.category : "",
    date: new Date(),
    due: "",
    board: null,
    tags: editTask ? editTask.meta.tags : [tagSet[0]],
    users: editTask ? editTask.meta.users : [teamList[0]],
  });

  let boardOptions = [];

  Object.keys(data.columns).map((option) => {
    boardOptions = [
      ...boardOptions,
      {
        value: data.columns[option].text,
        label: data.columns[option].text,
        id: data.columns[option].id,
      },
    ];
  });

  const submitForm = (returnVal) => {
    let board = taskToBoard ? taskToBoard : formData.board === null ? boardOptions[0] : formData.board;
    if (editTask) {
      let defaultTask = {
        task: {
          ...data.task,
          [editTask.id]: {
            id: editTask.id,
            title: formData.title,
            desc: formData.desc,
            meta: {
              users: formData.users,
              tags: formData.tags,
              date: getDateStructured(formData.date),
              category: formData.category,
            },
          },
        },
      };
      setData({ ...data, task: defaultTask.task });
    } else {
      let defaultTask = {
        task: {
          ...data.task,
          [`task-newTask`]: {
            id: `task-newTask`,
            title: formData.title,
            desc: formData.desc,
            meta: {
              users: formData.users,
              tags: formData.tags,
              date: getDateStructured(formData.date),
              category: formData.category,
            },
          },
        },
      };

      let defaultColumns = {
        columns: {
          ...data.columns,
          [board.id]: {
            ...data.columns[board.id],
            tasks: [...data.columns[board.id].tasks, `task-newTask`],
          },
        },
      };

      setData({ columnOrder: data.columnOrder, task: defaultTask.task, columns: defaultColumns.columns });
    }

    toggle();
  };

  const deleteTask = () => {
    let defaultData = data;
    delete defaultData.task[editTask.id];

    defaultData.columns[taskToBoard.id].tasks = defaultData.columns[taskToBoard.id].tasks.filter(
      (item) => item !== editTask.id
    );

    setData({ ...defaultData });
  };

  const { errors, register, handleSubmit } = useForm();
  return (
    <ModalBody>
      <a
        href="#cancel"
        onClick={(ev) => {
          ev.preventDefault();
          toggle();
        }}
        className="close"
      >
        <Icon name="cross-sm"></Icon>
      </a>
      <div className="p-2">
        <h5 className="title">{editTask ? "Update" : "Add"} Task</h5>
        <div className="mt-4">
          <form className="row gy-4" onSubmit={handleSubmit(submitForm)}>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Task Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  className="form-control"
                  ref={register({ required: "This field is required" })}
                />
                {errors.title && <span className="invalid">{errors.title.message}</span>}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Select Board</label>
                <RSelect
                  defaultValue={taskToBoard ? boardOptions.find((item) => item.id === taskToBoard.id) : boardOptions[0]}
                  isDisabled={taskToBoard ? true : false}
                  options={boardOptions}
                  placeholder="Select a board"
                  onChange={(e) => {
                    setFormData({ ...formData, board: e });
                  }}
                />
              </FormGroup>
            </Col>
            <Col className="col-12">
              <FormGroup>
                <label className="form-label">Task Description</label>
                <textarea
                  name="desc"
                  value={formData.desc}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      desc: e.target.value,
                    })
                  }
                  className="form-control no-resize"
                  ref={register({ required: "This field is required" })}
                />
                {errors.desc && <span className="invalid">{errors.desc.message}</span>}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Task Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  className="form-control"
                  ref={register({ required: "This field is required" })}
                />
                {errors.category && <span className="invalid">{errors.category.message}</span>}
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Date</label>
                <DatePicker
                  selected={formData.date}
                  onChange={(date) => setFormData({ ...formData, date: date })}
                  className="form-control date-picker"
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Task Tags</label>
                <RSelect
                  options={tagSet}
                  isMulti
                  defaultValue={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e })}
                />
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <label className="form-label">Users Assigned</label>
                <RSelect
                  options={teamList}
                  isMulti
                  defaultValue={formData.users}
                  onChange={(e) => setFormData({ ...formData, users: e })}
                />
              </FormGroup>
            </Col>
            <Col className="col-12">
              <ul className="d-flex justify-content-between mt-3">
                <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                  <li>
                    <Button color="primary" size="md" type="submit">
                      {editTask ? "Update" : "Add"} Task
                    </Button>
                  </li>
                  <li>
                    <Button
                      onClick={(ev) => {
                        ev.preventDefault();
                        toggle();
                      }}
                      className="link link-light"
                    >
                      Cancel
                    </Button>
                  </li>
                </ul>
                {editTask && (
                  <ul>
                    <li>
                      <Button color="danger" size="md" onClick={() => deleteTask()}>
                        Delete Task
                      </Button>
                    </li>
                  </ul>
                )}
              </ul>
            </Col>
          </form>
        </div>
      </div>
    </ModalBody>
  );
};

export const KanbanBoardForm = ({ toggle, data, setData, editBoard }) => {
  const [formData, setFormData] = useState({
    title: editBoard ? editBoard.text : "",
    color: editBoard ? themes.find((item) => item.value === editBoard.theme) : themes[0],
  });
  
  const submitForm = (returnVal) => {
    if (editBoard) {
      let defaultVal = {
        ...data,
        columns: {
          ...data.columns,
          [editBoard.id]: {
            id: editBoard.id,
            text: formData.title === "" ? editBoard.text : returnVal.title,
            theme: formData.color.value,
            tasks: editBoard.tasks,
          },
        },
      };
      setData(defaultVal);
    } else {
      let defaultVal = {
        ...data,
        columns: {
          ...data.columns,
          ["column-" + returnVal.title]: {
            id: "column-" + returnVal.title,
            text: returnVal.title,
            theme: formData.color.value,
            tasks: [],
          },
        },
        columnOrder: [...data.columnOrder, `column-${returnVal.title}`],
      };
      setData(defaultVal);
      let container = document.getElementById("kanban-container");
      container.scrollTo(container.offsetWidth, 0);
    }
    toggle();
  };

  const { errors, register, handleSubmit } = useForm();
  return (
    <ModalBody>
      <a
        href="#cancel"
        onClick={(ev) => {
          ev.preventDefault();
          toggle();
        }}
        className="close"
      >
        <Icon name="cross-sm"></Icon>
      </a>
      <div className="p-2">
        <h5 className="title">{editBoard ? "Update" : "Add"} Board</h5>
        <div className="mt-4">
          <form className="row gy-4" onSubmit={handleSubmit(submitForm)}>
            <Col className="col-12">
              <FormGroup>
                <label className="form-label">Board Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  className="form-control"
                  ref={register({ required: "This field is required" })}
                />
                {errors.title && <span className="invalid">{errors.title.message}</span>}
              </FormGroup>
            </Col>
            <Col className="col-12">
              <FormGroup>
                <label className="form-label">Select Color</label>
                <div className="form-control-select">
                  <Select
                    className="react-select-container"
                    classNamePrefix="react-select"
                    formatOptionLabel={ColorOptions}
                    defaultValue={formData.color}
                    options={themes}
                    onChange={(e) => {
                      setFormData({ ...formData, color: e });
                    }}
                  />
                </div>
              </FormGroup>
            </Col>
            <Col className="col-12">
              <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                <li>
                  <Button color="primary" size="md" type="submit">
                    {editBoard ? "Update" : "Add"} Board
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={(ev) => {
                      ev.preventDefault();
                      toggle();
                    }}
                    className="link link-light"
                  >
                    Cancel
                  </Button>
                </li>
              </ul>
            </Col>
          </form>
        </div>
      </div>
    </ModalBody>
  );
};
