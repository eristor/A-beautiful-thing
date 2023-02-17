import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import "./modal.css";

function Modal({
  active,
  setActive,
  columns,
  setColumns,
  setActiveColumns,
  activeColumns,
}) {
  const [text, setText] = useState("");

  const swapColumns = () => {
    columns.map((column) => {
      if (column.state === true) {
        setActiveColumns((data) => [...data, column]);
      }
    });
  };

  useEffect(() => {
    swapColumns();
  }, []);

  const columnDelete = (label) => {
    columns.map((column) => {
      if (label === column.label) {
        column.state = false;
        setColumns([...columns]);
        activeColumns.filter((column) => {
          if (column.label !== label) {
            return column;
          }
        });
        setActiveColumns([...activeColumns]);
      }
    });
  };

  return (
    <div
      className={active ? "Modal active" : "Modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "Modal__content active" : "Modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className="Modal__content__search"
          placeholder="Search avaliable columns..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="Modal__content__columns">
          <Droppable droppableId="AvalibleColumns">
            {(provided) => (
              <div
                className="Modal__content__columns__container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div>Avaliable Columns</div>
                {columns
                  .filter((column) => {
                    if (text === "") {
                      return column;
                    } else if (
                      column.label.toLowerCase().includes(text.toLowerCase())
                    ) {
                      return column;
                    }
                  })
                  .map((column, index) => {
                    return column.state ? (
                      <></>
                    ) : (
                      <Draggable
                        draggableId={column.label}
                        index={index}
                        key={column.id}
                      >
                        {(provided) => (
                          <div
                            className="Modal__content__columns__container__cell"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            {column.label}
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="ActiveColumns">
            {(provided) => (
              <div
                className="Modal__content__columns__container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div>Selected Columns</div>
                {activeColumns.map((column) => {
                  return column.state ? (
                    <div
                      className="Modal__content__columns__container__cell"
                      key={column.id}
                    >
                      {column.label}
                      <div
                        onClick={() => {
                          columnDelete(column.label);
                        }}
                      >
                        <span className="close">X</span>
                      </div>
                    </div>
                  ) : (
                    <></>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className="Button__container">
          <div
            className="Button"
            onClick={() => {
              setActive(false);
              setColumns([...columns]);
            }}
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
