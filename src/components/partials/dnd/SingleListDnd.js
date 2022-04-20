import React, { useState } from "react";
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
};
export default SingleListDnd;
