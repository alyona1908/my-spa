import React from 'react';
import './Table.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DELETE_USER } from '../store/actions/actions';

function Table(props) {
  const columnNames = ['Id', 'Email', 'First name', 'Last name', 'Date of birth', 'City', 'Operations'];
  const columnName = [];
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  function deleteUser(id) {
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
  }

  // eslint-disable-next-line no-unused-vars
  function editUser(id) {
    history.push(`/edit/${id}`);
  }

  columnNames.forEach((element) => { columnName.push(<th>{element}</th>); });
  const items = useSelector(state => state.table);
  const tdItem = items.map((element) => {
    // eslint-disable-next-line react/prop-types
    if (props.valueInput) {
      let isFined = false;
      Object.values(element).forEach((el) => {
        // eslint-disable-next-line react/prop-types
        if (el.toString().toLowerCase().includes(props.valueInput.toLowerCase())) {
          isFined = true;
          // eslint-disable next-line react/prop-types
        }
      });
      if (!isFined) {
        return '';
      }
    }
    return (
      <tr>
        <td>{element.id}</td>
        <td>{element.email}</td>
        <td>{element.firstName}</td>
        <td>{element.lastName}</td>
        <td>{element.bDay}</td>
        <td>{element.city}</td>
        <td>
          <button onClick={() => editUser(element.id)} className="edit-btn" type="button">
            <span className="material-icons">
              edit_note
            </span>
          </button>
          <button onClick={() => deleteUser(element.id)} className="delete-btn" type="button">
            <span className="material-icons">
              delete
            </span>
          </button>
        </td>
      </tr>
    );
  });
  console.log('1234', items);
  return (
    <>
      <table>
        <caption>Table Users</caption>
        <tr>
          {columnName}
        </tr>
        <tbody>
          {tdItem}
        </tbody>
      </table>
    </>
  );
}

export default Table;
