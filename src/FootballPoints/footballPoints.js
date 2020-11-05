import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addPoints, minusPoints} from './footballSlice';
const FootballPoints = () => {

    //const count =  useSelector(store => store.counter)

const points = useSelector(store => store.FootballPointsT.points)
const dispatchkar = useDispatch();

const addPointsToTable = (index) => {
    dispatchkar(addPoints(index))

}
    return <ul>
        {
            points.map((value, index) => (
            <li key={index}>{value.team} -- {value.points} <button onClick={() => addPointsToTable(index)}>+</button><button onClick={() => dispatchkar(minusPoints(index))}>-</button></li>
            ))
        }
        
    </ul>
}

export default FootballPoints;