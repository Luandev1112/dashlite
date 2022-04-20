import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import KanbanBoard from "./KanbanBoard";
import { columnData } from "./KanbanData";
import { Modal } from "reactstrap";
import {
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Button,
  Icon,
  Block,
} from "../../../components/Component";
import { KanbanBoardForm, KanbanTaskForm } from "./KanbanForms";

const Kanban = () => {
  const [columns, setColumns] = useState(columnData);
  const [smBtn, setSmBtn] = useState(false);
  const [boardModal, setBoardModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  const toggleBoardModal = () => {
    setBoardModal(!boardModal);
  };

  const toggleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  return (
    <React.Fragment>
      <Head title="Kanban Board"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Kanban Board</BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <a
                  href="#toggle"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setSmBtn(!smBtn);
                  }}
                  className="btn btn-icon btn-trigger toggle-expand mr-n1"
                >
                  <Icon name="menu-alt-r"></Icon>
                </a>
                <div className={`toggle-expand-content ${smBtn ? "expanded" : ""}`}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="light" outline className="btn-white" onClick={() => toggleTaskModal()}>
                        <Icon name="plus" />
                        <span>Add Task</span>
                      </Button>
                    </li>
                    <li>
                      <Button color="primary" onClick={() => toggleBoardModal()}>
                        <Icon name="plus" />
                        <span>Add Board</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <div className="nk-kanban">
            <KanbanBoard columns={columns} setColumns={setColumns} />
          </div>
        </Block>

        <Modal size="lg" isOpen={boardModal} toggle={toggleBoardModal}>
          <KanbanBoardForm toggle={toggleBoardModal} data={columns} setData={setColumns} />
        </Modal>

        <Modal size="lg" isOpen={taskModal} toggle={toggleTaskModal}>
          <KanbanTaskForm toggle={toggleTaskModal} data={columns} setData={setColumns} />
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default Kanban;
