import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import RiseLoader from 'react-spinners/RiseLoader';
import { getDataFromApi } from '../redux/person';

function List() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.person);

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  const personList = [];

  if (storeData.data.length > 0) {
    storeData.data.forEach((obj) => {
      const data = obj.data.person;
      data.forEach((item) => {
        personList.push(item);
      });
    });
  }

  return (
    <div>
      <ul className="flex flex-wrap flex-row justify-around align-center m-8">
        {(personList.length) !== 0 ? (personList.map((item) => (
          <Link
            to="/person"
            key={item.id}
            state={{ id: item.id }}
          >
            <li key={item.id} className="container bg-zinc-700 flex justify-center align-center flex-col w-96 m-8 shadow-2xl rounded-md">
              <img src={item.image} className="h-56 mx-auto mt-3 border-2" alt={item.name} />
              <h3 className="p-3"><b>{item.name}</b></h3>
              <div className="text-left m-4">
                <p>
                  <b>Crime: </b>
                  {`${item.crime.substring(0, 50)}...`}
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
                  <b>Death: </b>
                  {item.death}
                </p>
              </div>
            </li>
          </Link>
        ))) : (
          <div className="center p-20">
            <RiseLoader size="25px" color="white" />
          </div>
        )}
      </ul>
    </div>
  );
}

export default List;
