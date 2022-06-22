import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../slices/personSlice';

function Home() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.person);

  useEffect(() => {
    dispatch(getDataFromApi());
  }, [dispatch]);

  console.log(storeData);

  return (
    <div>Home</div>
  );
}

export default Home;
