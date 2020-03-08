import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TimeList from './component/TimeList';
import AddTimeEntryForm from './component/AddTimeEntryForm';

function App() {
  return (
    <div className="container">
      <h1>Just Clock</h1>
      <TimeList/>
      <AddTimeEntryForm/>
      
    </div>
  );
}

export default App;
