import React, { useState } from "react";
import "./FormTrainingRecord.css";
import moment from "moment";
import { prepareDistanceArr } from "../utils";
import { v4 } from "uuid";

const FormTrainingRecord = ({ onSetDate }) => {
  const defaultValue = {
    date: moment(new Date()).format("YYYY.MM.DD"),
    distance: 0,
  };
  const [form, setForm] = useState(defaultValue);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newData = {
      date: moment(form.date).format("YYYY.MM.DD"),
      distance: Number(form.distance),
      id: v4(),
    };
    onSetDate((prev) => prepareDistanceArr(prev, newData));
    setForm(defaultValue);
  };

  const handleValueChanged = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bodyWrap">
        <div className="wrapInput">
          <label className="form__label" htmlFor="date">
            Дата
          </label>
          <input
            className="form__input"
            type="date"
            id="date"
            name="date"
            min="2018-01-01"
            max={moment(new Date()).format("DD.MM.YYYY")}
            value={form.date}
            onChange={handleValueChanged}
          />
        </div>
        <div className="wrapInput">
          <label className="form__label" htmlFor="distance">
            Пройдено км
          </label>
          <input
            className="form__input"
            placeholder="Пройдено км"
            step={0.1}
            id="distance"
            type="number"
            name="distance"
            min={0}
            value={form.distance}
            onChange={handleValueChanged}
          />
        </div>
        <div className="wrapInput">
          <button id="submit" className="btn" type="submit">
            Ok
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTrainingRecord;
