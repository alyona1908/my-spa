/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { React } from 'react';
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

  const storageData = useSelector(state => state.table.filter(item => item.id === +id));
  const initialValues = storageData[0] || {};

  const onSubmit = (values) => {
    if (id) {
      dispatch({
        type: UPDATE_USER,
        payload: values,
      });
    } else {
      dispatch({
        type: ADD_USER,
        payload: values,
      });
    }
    handleClose();
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      validateOnChange={false}
      validateOnBlur
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
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
                  value={values?.email}
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
                  value={values?.firstName}
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
                  value={values?.lastName}
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
                  value={values?.bDay}
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
                  value={values?.city}
                />
              </p>
              { touched.city && errors.city && <p className="error">{errors.city}</p>}
              <div className="button">
                <button id="button-add" disabled={!isValid} type="submit">
                  Save
                </button>
                <button id="button-close" onClick={handleClose} type="button">
                  Back
                </button>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
