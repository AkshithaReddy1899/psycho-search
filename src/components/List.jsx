import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDataFromApi } from '../redux/person';

function List() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.person);

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  const personList = [];

  if (storeData.length > 0) {
    storeData.forEach((obj) => {
      const data = obj.data.person;
      data.forEach((item) => {
        personList.push(item);
      });
    });
  }

  return (
    <div>
      <ul>
        {
					(personList.length) !== 0 ? (
					  personList.map((item) => (
  <Link to="/person" key={item.id} state={{ id: item.id }}>
    <li key={item.id} className="container border">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <b>Crime: </b>
        {item.crime}
      </p>
      <p>
        <b>Region: </b>
        {item.country}
        ,&nbsp;
        {item.state}
      </p>
      <p>
        <b>Victims: </b>
        {item.victims}
      </p>
      <p>
        <b>Died at the age of: </b>
        {item.age_of_death}
      </p>
      <p>
        <b>Death: </b>
        {item.death}
      </p>
    </li>
  </Link>
					  ))) : (
  <div className="center">Oops! Something went wrong try again later</div>)
}
      </ul>
    </div>
  );
}

export default List;
