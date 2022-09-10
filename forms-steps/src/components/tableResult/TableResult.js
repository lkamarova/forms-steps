import "./TableResult.css";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import moment from "moment";

const TableResult = ({ item, handleDelete }) => {
  return (
    <table className="table">

      <thead className="table-header">
        <tr className="table-row">
          <th className="header__item">Дата</th>
          <th className="header__item">Пройдено км</th>
          <th className="header__item">Удалить</th>
        </tr>
      </thead>

      <tbody className="table-content">
      {item?.length === 0 && <div className="table-data">Ходьба улучшает настроение. Давайте начнем!</div>}
        {item?.map((el) => (
          <tr key={v4()} className="table-row">
            <th className="table-data">{moment(el.date).format("DD.MM.YYYY")}</th>
            <th className="table-data">{el.distance}</th>
            <th className="table-data">
            <span onClick={() => handleDelete(el.id)} className="material-icons delete">delete_outline</span>
            </th>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

TableResult.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ),
};

export default TableResult;
