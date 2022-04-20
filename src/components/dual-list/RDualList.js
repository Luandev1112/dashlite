import React, { useEffect, useState } from "react";
import DualListBox from "react-dual-listbox";
import { Icon } from "../Component";

const buttonText = {
  moveLeft: <span className="dual-listbox__button">Remove</span>,
  moveAllLeft: <span className="dual-listbox__button">Remove all</span>,
  moveRight: <span className="dual-listbox__button">Add</span>,
  moveAllRight: <span className="dual-listbox__button">Add all</span>,
  moveDown: <span className="fa fa-chevron-down" />,
  moveUp: <span className="fa fa-chevron-up" />,
  moveTop: <span className="fa fa-double-angle-up" />,
  moveBottom: <span className="fa fa-double-angle-down" />,
};

const buttonIcon = {
  moveLeft: (
    <span className="dual-listbox__button">
      <Icon name="chevron-left" />
    </span>
  ),
  moveAllLeft: (
    <span className="dual-listbox__button">
      <Icon name="chevrons-left" />
    </span>
  ),
  moveRight: (
    <span className="dual-listbox__button">
      <Icon name="chevron-right" />
    </span>
  ),
  moveAllRight: (
    <span className="dual-listbox__button">
      <Icon name="chevrons-right" />
    </span>
  ),
  moveDown: <span className="fa fa-chevron-down" />,
  moveUp: <span className="fa fa-chevron-up" />,
  moveTop: <span className="fa fa-double-angle-up" />,
  moveBottom: <span className="fa fa-double-angle-down" />,
};

const ReactDualList = ({ options, icon, canFilter, preSelected }) => {
  const [data, setData] = useState(options);
  const [filterText, setFilterText] = useState("");
  const [selected, setSelected] = useState(preSelected ? preSelected : []);
  const onListChange = (selected) => {
    setSelected(selected);
  };

  // Filtering users by search
  useEffect(() => {
    if (filterText !== "") {
      const filteredObject = options.filter((item) => {
        return item.label.toLowerCase().includes(filterText.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      setData([...options]);
    }
  }, [filterText, options]);

  return (
    <div className="dual-listbox">
      {canFilter && (
        <input className="dual-listbox__search" placeholder="Search" onChange={(e) => setFilterText(e.target.value)} />
      )}
      <DualListBox
        options={data}
        selected={selected}
        icons={icon ? buttonIcon : buttonText}
        onChange={onListChange}
        showHeaderLabels={true}
      ></DualListBox>
    </div>
  );
};

export default ReactDualList;
