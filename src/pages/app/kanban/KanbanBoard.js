import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { KanbanColumn } from "./KanbanPartials";

const KanbanBoard = ({ columns, setColumns }) => {
  const handleOnDragEnd = (result) => {
    const { source, destination, draggableId, type } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(columns.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...columns,
        columnOrder: newColumnOrder,
      };
      setColumns(newState);
      return;
    }

    const home = columns.columns[source.droppableId];
    const foreign = columns.columns[destination.droppableId];

    // check for same column
    if (home === foreign) {
      const items = Array.from(home.tasks);
      items.splice(source.index, 1);
      items.splice(destination.index, 0, draggableId);

      const newState = {
        ...columns,
        columns: {
          ...columns.columns,
          [home.id]: {
            ...home,
            tasks: items,
          },
        },
      };

      setColumns(newState);
      return;
    } else {
      // moving from one list to another
      const items = Array.from(home.tasks);
      items.splice(source.index, 1);
      const newHome = {
        ...home,
        tasks: items,
      };

      const foreigntasks = Array.from(foreign.tasks);
      foreigntasks.splice(destination.index, 0, draggableId);
      const newForeign = {
        ...foreign,
        tasks: foreigntasks,
      };

      const newState = {
        ...columns,
        columns: {
          ...columns.columns,
          [newHome.id]: newHome,
          [newForeign.id]: newForeign,
        },
      };
      setColumns(newState);
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="kanban-container"
            id="kanban-container"
            style={{ width: `${columns.columnOrder.length * 320}px` }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {columns.columnOrder.map((columnId, index) => {
              const column = columns.columns[columnId];
              return <KanbanColumn data={columns} setData={setColumns} column={column} key={index} index={index} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
