/* eslint-disable consistent-return */
import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USER, UPDATE_USER } from '../store/actions/actions';
import userSchema from '../Validations/Validations';
import './AddForm.css';

export default function AddForm() {
  const { id } = useParams();

  const history = useHistory();
  const handleClose = () => { history.goBack(); };

  const dispatch = useDispatch();

  const inputValidation = async (event) => {
    event.preventDefault();
    const formInput = {
      email: event.target[0].value,
      firstName: event.target[1].value,
      lastName: event.target[2].value,
      bDay: event.target[3].value,
      city: event.target[4].value,
    };
    const isValid = await userSchema.isValid(formInput);
    // eslint-disable-next-line no-console
    console.log(isValid);
  };

  let inputValues;
  const storageData = useSelector(state => state.table);
  const lastId = storageData[storageData.length - 1].id;
  if (id) {
    storageData.map((el) => {
      // eslint-disable-next-line eqeqeq
      if (id == el.id) {
        inputValues = storageData[storageData.indexOf(el)];
      }
      return 1;
    });
  } else {
    inputValues = {
      id: '', email: '', firstName: '', lastName: '', bDay: '', city: '',
    };
  }
  const [data, setData] = React.useState(inputValues);
  const handleChange = (value, key) => {
    data[key] = value;
    setData(data);
    inputValues = data;
  };
  const handleAdd = () => {
    if (id) {
      dispatch({
        type: UPDATE_USER,
        payload: inputValues,
      });
      history.goBack();
    } else {
      data.id = lastId + 1;
      dispatch({
        type: ADD_USER,
        payload: data,
      });
      history.goBack();
    }
  };

  return (
    <div className="input-container">
      <div className="">
        <label htmlFor="choose">
          Please enter your Email:
          <input className="input" onChange={event => handleChange(event.target.value, 'email')} defaultValue={inputValues.email} type="text" id="choose" name="email" required />
        </label>
      </div>
      <div>
        <label htmlFor="choose">
          Please enter your First name:
          <input className="input" onChange={event => handleChange(event.target.value, 'firstName')} defaultValue={inputValues.firstName} type="text" id="choose" name="first_name" required />
        </label>
      </div>
      <div>
        <label htmlFor="choose">
          Please enter your Last name:
          <input className="input" onChange={event => handleChange(event.target.value, 'lastName')} defaultValue={inputValues.lastName} type="text" id="choose" name="last_name" required />
        </label>
      </div>
      <div>
        <label htmlFor="choose">
          Please enter your Date of birth:
          <input className="input" onChange={event => handleChange(event.target.value, 'bDay')} defaultValue={inputValues.bDay} type="text" id="choose" name="birth" required />
        </label>
      </div>
      <div>
        <label htmlFor="choose">
          Please enter your City:
          <input className="input" onChange={event => handleChange(event.target.value, 'city')} defaultValue={inputValues.city} ype="text" id="choose" name="city" required />
        </label>
      </div>
      <div onSubmit={inputValidation} className="button">
        <button onClick={handleClose} type="button">Back</button>
        <button onClick={handleAdd} type="submit">Save</button>
      </div>
    </div>
  );
}
