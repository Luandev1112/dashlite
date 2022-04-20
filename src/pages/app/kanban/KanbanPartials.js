import React, { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown } from "reactstrap";
import { Icon, UserAvatar } from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";
import { KanbanTaskForm, KanbanBoardForm } from "./KanbanForms";

export const KanbanCard = ({ data, setData, card, index, column }) => {
  const [open, setOpen] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  const deleteTask = (id) => {
    let defaultData = data;
    delete defaultData.task[id];

    defaultData.columns[column.id].tasks = defaultData.columns[column.id].tasks.filter((item) => item !== id);

    setData({ ...defaultData });
  };

  const { id, title, desc, meta } = card;
  return (
    <React.Fragment>
      <Draggable draggableId={id} key={id} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mt-2">
            <div className="kanban-item">
              <div className="kanban-item-title">
                <h6 className="title">{title}</h6>
                <Dropdown isOpen={open} toggle={toggleOpen}>
                  <DropdownToggle
                    tag="a"
                    href="#toggle"
                    className="dropdown-toggle"
                    onClick={(ev) => ev.preventDefault()}
                  >
                    <div className="user-avatar-group">
                      {meta.users.map((user, index) => (
                        <UserAvatar key={index} className="xs" theme={user.theme} text={user.value[0]}></UserAvatar>
                      ))}
                    </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <ul className="link-list-opt no-bdr p-3 g-2">
                      {meta.users.map((user, index) => (
                        <li key={index}>
                          <div className="user-card" onClick={toggleOpen}>
                            <UserAvatar className="sm" theme={user.theme} text={findUpper(user.value)}></UserAvatar>
                            <div className="user-name">
                              <span className="tb-lead">{user.value}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="kanban-item-text">
                <p>{desc}</p>
              </div>
              <ul className="kanban-item-tags">
                {meta.tags.map((tag, index) => (
                  <li key={index}>
                    <Badge color={tag.theme}>{tag.value}</Badge>
                  </li>
                ))}
              </ul>
              <div className="kanban-item-meta">
                <ul className="kanban-item-meta-list">
                  {meta.date ? (
                    <li>
                      <Icon name="calendar"></Icon>
                      <span>{meta.date}</span>
                    </li>
                  ) : (
                    <li className={Number(meta.due) < 5 ? "text-danger" : ""}>
                      <Icon name="calendar"></Icon>
                      <span>{meta.due}d Due</span>
                    </li>
                  )}
                  <li>
                    <Icon name="notes"></Icon>
                    <span>{meta.category}</span>
                  </li>
                </ul>
                <ul className="kanban-item-meta-list">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      href="toggle"
                      onClick={(ev) => ev.preventDefault()}
                      className="dropdown-toggle btn btn-xs btn-icon btn-trigger mr-n1"
                    >
                      <Icon name="more-v"></Icon>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleTaskModal();
                            }}
                          >
                            <Icon name="edit"></Icon>
                            <span>Edit Task</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              deleteTask(card.id);
                            }}
                          >
                            <Icon name="trash"></Icon>
                            <span>Delete Task</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Draggable>
      <Modal size="lg" isOpen={taskModal} toggle={toggleTaskModal}>
        <KanbanTaskForm toggle={toggleTaskModal} data={data} setData={setData} editTask={card} taskToBoard={column} />
      </Modal>
    </React.Fragment>
  );
};

export const KanbanCardList = ({ data, setData, tasks, column }) => {
  return tasks.length > 0 ? (
    tasks.map((task, index) => {
      const card = data.task[task];
      return <KanbanCard card={card} data={data} setData={setData} key={card.id} index={index} column={column} />;
    })
  ) : (
    <div className="kanban-drag"></div>
  );
};

export const KanbanColumn = ({ data, setData, column, index }) => {
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const deleteBoard = (item) => {
    let defaultData = data;
    delete defaultData.columns[item.id];
    defaultData.columnOrder = defaultData.columnOrder.filter((el) => el !== item.id);

    setData({ ...defaultData });
  };

  const emptyList = (item) => {
    let defaultData = data;
    defaultData.columns[item.id].tasks = [];

    setData({ ...defaultData });
  };

  return (
    <React.Fragment>
      <Draggable draggableId={column.id} key={column.id} index={index}>
        {(provided) => (
          <div className="kanban-board" ref={provided.innerRef} {...provided.draggableProps}>
            <div className={`kanban-board-header kanban-${column.theme}`} {...provided.dragHandleProps}>
              <div className="kanban-title-board">
                <div className="kanban-title-content">
                  <h6 className="title">{column.text}</h6>
                  <span className="badge badge-pill badge-outline-light text-dark">{column.tasks.length}</span>
                </div>
                <div className="kanban-title-content">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      href="toggle"
                      onClick={(ev) => ev.preventDefault()}
                      className="dropdown-toggle btn btn-sm btn-icon btn-trigger mr-n1"
                    >
                      <Icon name="more-h"></Icon>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <ul className="link-list-opt no-bdr">
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleEditModal();
                            }}
                          >
                            <Icon name="edit"></Icon>
                            <span>Edit Board</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              deleteBoard(column);
                            }}
                          >
                            <Icon name="trash"></Icon>
                            <span>Delete Board</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              emptyList(column);
                            }}
                          >
                            <Icon name="trash-empty"></Icon>
                            <span>Empty Board</span>
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem
                            tag="a"
                            href="#item"
                            onClick={(ev) => {
                              ev.preventDefault();
                              toggleModal();
                            }}
                          >
                            <Icon name="plus-sm"></Icon>
                            <span>Add Task</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
            <Droppable droppableId={column.id} type="task">
              {(provided) => (
                <div className="kanban-drag" {...provided.droppableProps} ref={provided.innerRef}>
                  <KanbanCardList data={data} setData={setData} tasks={column.tasks} column={column} />
                  <button className="kanban-add-task mt-2 btn btn-block" onClick={toggleModal}>
                    <Icon name="plus-sm"></Icon>
                    <span>{column.tasks.length > 0 ? "Add another " : "Add "} task</span>
                  </button>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
      <Modal size="lg" isOpen={open} toggle={toggleModal}>
        <KanbanTaskForm toggle={toggleModal} data={data} setData={setData} taskToBoard={column} />
      </Modal>

      <Modal size="lg" isOpen={editModal} toggle={toggleEditModal}>
        <KanbanBoardForm toggle={toggleEditModal} data={data} setData={setData} editBoard={column} />
      </Modal>
    </React.Fragment>
  );
};
