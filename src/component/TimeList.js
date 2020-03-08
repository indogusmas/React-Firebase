import React, {  useState, useEffect } from 'react'
import firebase from '../firebase';
function useTimes(){
    const [times, settimes] = useState([])

    useEffect(() => {
        firebase
        .firestore()
        .collection('times')
        .onSnapshot((shapshot)=>{
            const newTimes = shapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }))
            settimes(newTimes);
        })    
    }, [])
    return times;
}
const TimeList = () =>{
     const times = useTimes()
    return(
        <div>
            <h2>Time list</h2>
            <div>
                <label>Sort  by</label>{''}
                <select>
                    <option>Time(fast first)</option>
                    <option>Time(slow first)</option>
                    <option>Disabled</option>
                    <option>Title (a-z)</option>
                    <option>Title (z-a)</option>
                </select>
            </div>
            <ol>
               {times.map((time)=>
               <li key={time.id}>
                   <div className="time-entry">
                       {time.name}
                        <code>{time.time_second} second</code>
                   </div>
               </li>
               )}
            </ol>
        </div>
    )

}

export default TimeList;