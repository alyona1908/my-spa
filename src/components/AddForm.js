/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { ADD_USER, UPDATE_USER } from '../store/actions/actions';
import userSchema from '../Validations/Validations';
import './AddForm.css';

export default function AddForm() {
  const { id } = useParams();

  const history = useHistory();
  const handleClose = () => { history.goBack(); };
  const dispatch = useDispatch();

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
  const [data, setData] = useState(inputValues);
  const handleChangeData = (value, key) => {
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
  useEffect(() => {
    const elInput = document.getElementById('input-email');
    elInput.addEventListener('change', event => handleChangeData(event.target.value, 'email'));
    const firstNameInput = document.getElementById('input-firstName');
    firstNameInput.addEventListener('change', event => handleChangeData(event.target.value, 'firstName'));
    const lastNameInput = document.getElementById('input-lastName');
    lastNameInput.addEventListener('change', event => handleChangeData(event.target.value, 'lastName'));
    const bDayInput = document.getElementById('input-bDay');
    bDayInput.addEventListener('change', event => handleChangeData(event.target.value, 'bDay'));
    const cityInput = document.getElementById('input-city');
    cityInput.addEventListener('change', event => handleChangeData(event.target.value, 'city'));
  });

  return (
    <Formik
      initialValues={{
        email: inputValues.email,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        bDay: inputValues.bDay,
        city: inputValues.city,
      }}
      validateOnBlur
      validationSchema={userSchema}
    >
      {({
        values, errors, touched, handleChange, handleBlur, isValid, dirty,
      }) => (
        <div className="input-container">
          <p>
            <label htmlFor="input-email">Email:</label>
            <br />
            <input
              className="input"
              id="input-email"
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </p>
          {errors.email && <p className="error">{errors.email}</p>}
          <p>
            <label htmlFor="input-firstName">First name:</label>
            <br />
            <input
              className="input"
              id="input-firstName"
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
          </p>
          { touched.firstName && errors.firstName && <p className="error">{errors.firstName}</p>}
          <p>
            <label htmlFor="input-lastName">Last name:</label>
            <br />
            <input
              className="input"
              id="input-lastName"
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
          </p>
          { touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
          <p>
            <label htmlFor="input-bDay">Date of birth:</label>
            <br />
            <input
              pattern="[0-9]{2}.[0-9]{2}.[0-9]{4}"
              className="input"
              id="input-bDay"
              type="text"
              name="bDay"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.bDay}
            />
          </p>
          { touched.bDay && errors.bDay && <p className="error">{errors.bDay}</p>}
          <p>
            <label htmlFor="input-city">City:</label>
            <br />
            <input
              className="input"
              id="input-city"
              type="text"
              name="city"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
          </p>
          { touched.city && errors.city && <p className="error">{errors.city}</p>}
          <div className="button">
            <button id="button-add" disabled={!isValid || !dirty} onClick={handleAdd} type="submit">
              Save
            </button>
            <button id="button-close" onClick={handleClose} type="button">
              Back
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
}
