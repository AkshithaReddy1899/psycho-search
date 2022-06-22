import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../redux/person';

function Home() {
  const dispatch = useDispatch();
  const personStore = useSelector((store) => store.person);

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  console.log(personStore);
  return (
    <div>Home</div>
  );
}

export default Home;
