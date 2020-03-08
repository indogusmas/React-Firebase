import React, { useState } from 'react';
import firebase from '../firebase';

const AddTimeEntryForm = () =>{

    
    const [time, settime] = useState('')
    const [name, setname] = useState('')

    function onSubmit(e){
        e.preventDefault()
        console.log("submit");
        firebase
        .firestore()
        .collection('times')
        .add({
            name,
            time_second:parseInt(time)
        })
        .then(()=>{
            setname('')
            settime('')
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <h4>Add Time Entry</h4>
            <div className="form-group  row">
                <label className="col-sm-2">Title</label>
                <input type="text" value={name} className="col" onChange={
                    e => setname(e.currentTarget.value)
                }/>
            </div>
            <div className="form-group row">
                <label className="col-sm-2">Time</label>
                <input type="number" className="col" value={time} onChange={
                    e => settime(e.currentTarget.value)
                }/>
            </div>
            <div className="form-group row">
                <div className="col-sm-4">
            <button className="btn btn-primary">Add Time Entry</button>
            </div>
            </div>
        </form>
    )
}

export default AddTimeEntryForm;