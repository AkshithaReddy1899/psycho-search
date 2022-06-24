import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../redux/person';
import Map from './Map';
import styles from './Home.module.css';

function Home() {
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
        mark.coordinates = [item.long, item.lat];
        mark.name = item.name;
        mark.id = item.id;
        markers.push(mark);
      });
    });
  }

  return (
    <div className={styles.homeContainer}>
      <div className="">
        <div>Home</div>
        {
          markers.length > 0 ? <Map markers={markers} className={styles.map} /> : <p>No maps</p>
        }
      </div>
    </div>
  );
}

export default Home;
