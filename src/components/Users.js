import { React, useState } from 'react';
import './pages.css';
import Table from './Table';
import Add from './Add';
import Search from './Search';

function Users() {
  const [valueInput, setValueInput] = useState();
  console.log(valueInput);
  return (
    <>
      <div className="add-container">
        <Add />
        <Search setValueInput={setValueInput} />
      </div>
      <Table valueInput={valueInput} />
    </>
  );
}

export default Users;
