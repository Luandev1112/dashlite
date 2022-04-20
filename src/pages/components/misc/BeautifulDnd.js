import React from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
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
import { Row } from "reactstrap";
import MultipleListDnd from "../../../components/partials/dnd/MultipleListDnd";
import SingleListDnd from "../../../components/partials/dnd/SingleListDnd";
import DragHandleDnd from "../../../components/partials/dnd/HandleDnd";

const BeautifulDnd = () => {
  return (
    <React.Fragment>
      <Head title="React Beautiful Dnd"></Head>
      <Content page="component">
        <BlockHead size="lg" wide="sm">
          <BlockHeadContent>
            <BackTo link="/components" icon="arrow-left">
              Components
            </BackTo>
            <BlockTitle tag="h2" className="fw-normal">
              React Beautiful Dnd
            </BlockTitle>
            <BlockDes>
              <p className="lead">
                React beautoful Dnd is a pure JavaScript plugin that is beautiful and accessible drag and drop for lists
                with. Click{" "}
                <a href="https://react-beautiful-dnd.netlify.app/" target="_blank" rel="noreferrer">
                  here
                </a>{" "}
                for examples and documentation.
              </p>
            </BlockDes>
          </BlockHeadContent>
        </BlockHead>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Dnd</BlockTitle>
              <BlockDes>We need to move div options between these two containers.</BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <MultipleListDnd />
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
    const [dndSet1, setDndSet1] = useState(dndDataSet1);
    const [dndSet2, setDndSet2] = useState(dndDataSet2);
  
    const move = (source, destination, droppableSource, droppableDestination) => {
      const sourceClone = Array.from(source);
      const destClone = Array.from(destination);
      const [removed] = sourceClone.splice(droppableSource.index, 1);
  
      destClone.splice(droppableDestination.index, 0, removed);
  
      const result = {};
      result[droppableSource.droppableId] = sourceClone;
      result[droppableDestination.droppableId] = destClone;
  
      return result;
    };
  
    const getList = (id) => {
      if (id === "droppable1") {
        return dndSet1;
      } else {
        return dndSet2;
      }
    };
  
    const handleOnDragEnd = (result) => {
      const { source, destination } = result;
      // dropped outside the list
      if (!destination) {
        return;
      }
  
      if (source.droppableId === destination.droppableId) {
        if (source.droppableId === "droppable1") {
          const items = Array.from(dndSet1);
          const [reorderedItem] = items.splice(result.source.index, 1);
          items.splice(result.destination.index, 0, reorderedItem);
  
          setDndSet1(items);
        } else {
          const items = Array.from(dndSet2);
          const [reorderedItem] = items.splice(result.source.index, 1);
          items.splice(result.destination.index, 0, reorderedItem);
  
          setDndSet2(items);
        }
      } else {
        const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
        setDndSet1(result.droppable1);
        setDndSet2(result.droppable2);
      }
    };
    
    return (
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable1">
        {(provided) => (
          <div ref={provided.innerRef} className="col-sm-6">
            <div className="card card-bordered p-4 h-100">
              {dndSet1.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-white border border-light round-lg mb-3"
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable2">
        {(provided) => (
          <div ref={provided.innerRef} className="col-sm-6">
            <div className="card card-bordered p-4 h-100">
              {dndSet2.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-white border border-light round-lg mb-3"
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
    );`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Basic Dnd with Single column</BlockTitle>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <SingleListDnd />
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { dndDataSet1 } from "./Data";

const SingleListDnd = () => {
  const [dndSet1, setDndSet1] = useState(dndDataSet1);

  const handleOnDragEnd = (result) => {
    const { destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    } else {
      const items = Array.from(dndSet1);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      setDndSet1(items);
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable1">
        {(provided) => (
          <div ref={provided.innerRef} className="col-sm-12">
            <div className="card card-bordered p-4 h-100">
              {dndSet1.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-white border border-light round-lg mb-3"
                    >
                      {item.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};`}
          </CodeBlock>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockHeadContent>
              <BlockTitle tag="h5">Drag Handle</BlockTitle>
              <BlockDes>
                Drag with <strong>handles</strong> to copy option from one container to another.
              </BlockDes>
            </BlockHeadContent>
          </BlockHead>
          <PreviewCard>
            <Row className="g-gs">
              <DragHandleDnd />
            </Row>
          </PreviewCard>
          <CodeBlock language="jsx">
            {`import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { dndDataSet1, dndDataSet2 } from "./Data";

const DragHandleDnd = () => {
  const [dndSet1, setDndSet1] = useState(dndDataSet1);
  const [dndSet2, setDndSet2] = useState(dndDataSet2);

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const getList = (id) => {
    if (id === "droppable1") {
      return dndSet1;
    } else {
      return dndSet2;
    }
  };

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "droppable1") {
        const items = Array.from(dndSet1);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setDndSet1(items);
      } else {
        const items = Array.from(dndSet2);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setDndSet2(items);
      }
    } else {
      const result = move(getList(source.droppableId), getList(destination.droppableId), source, destination);
      setDndSet1(result.droppable1);
      setDndSet2(result.droppable2);
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable1">
        {(provided) => (
          <div ref={provided.innerRef} className="col-sm-6">
            <div className="card card-bordered p-4 h-100">
              {dndSet1.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="p-3 bg-white border border-light round-lg mb-3 dragula-handle"
                    >
                      <span {...provided.dragHandleProps} className="handle"></span>
                      <span>{item.text}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable2">
        {(provided) => (
          <div ref={provided.innerRef} className="col-sm-6">
            <div className="card card-bordered p-4 h-100">
              {dndSet2.map((item, index) => (
                <Draggable draggableId={item.id} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="p-3 bg-white border border-light round-lg mb-3 dragula-handle"
                    >
                      <span {...provided.dragHandleProps} className="handle"></span>
                      <span>{item.text}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};`}
          </CodeBlock>
        </Block>
      </Content>
    </React.Fragment>
  );
};

export default BeautifulDnd;
