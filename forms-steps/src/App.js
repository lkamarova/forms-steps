import React, { useState } from "react";
import "./App.css";
import FormTrainingRecord from "./components/formTrainingRecord/FormTrainingRecord";
import TableResult from "./components/tableResult/TableResult";
import { prepareByDateArray } from "./components/utils";

function App() {
  const [data, setData] = useState([]);

  const deleteItem = id => {
    const newData = data.filter((el) => el.id !== id);
    setData(newData);
  }

  return (
    <div>
      <FormTrainingRecord onSetDate={setData} />
      <TableResult item={prepareByDateArray(data)} handleDelete={deleteItem} />
    </div>
  );
}

export default App;
