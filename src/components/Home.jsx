/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../redux/person';
import Map from './Map';

const Home = () => {
  const dispatch = useDispatch();
  const personStore = useSelector((store) => store.person);
  const markers = [];

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  if (personStore.length > 0) {
    personStore.forEach((obj) => {
      const data = obj.data.person;
      data.forEach((item) => {
        const mark = {};
        mark.coordinates = [item.lat, item.long];
        mark.name = item.name;
        mark.id = item.id;
        markers.push(mark);
      });
    });
  }

  return (
    <div>
      <p>Home</p>
      {
        markers.length > 0 ? <Map markers={markers} /> : <p>Maps not available currently</p>
      }
    </div>
  );
};

export default Home;
