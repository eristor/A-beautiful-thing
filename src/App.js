import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import Modal from "./components/Modal";
import Table from "./components/Table";

import "./app.css";


function App() {
  const [active, setActive] = useState(false);
  const [activeColumns, setActiveColumns] = useState([]);
  const [columns, setColumns] = useState([
    {
      label: "id",
      state: true,
    },
    {
      label: "name",
      state: true,
    },
    {
      label: "email",
      state: false,
    },
    {
      label: "website",
      state: false,
    },
    {
      label: "company",
      state: false,
    },
  ]);

  const onDragEnd = (result) => {
    console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    let add,
      current = columns,
      actived = activeColumns;

    if (source.droppableId === "AvalibleColumns") {
      add = current[source.index];
      add.state = true;
    }

    if (destination.droppableId === "ActiveColumns") {
      actived.splice(destination.index, 0, add);
    }
    const uSet = new Set(actived);
    setActiveColumns([...uSet]);
    setColumns(current);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="Wrapper">
          <div className="Button" onClick={() => setActive(true)}>
            Select columns
          </div>
            <Table order={columns}/>

          <Modal
            active={active}
            setActive={setActive}
            columns={columns}
            setColumns={setColumns}
            activeColumns={activeColumns}
            setActiveColumns={setActiveColumns}
          />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
