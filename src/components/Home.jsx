import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import ReactTooltip from 'react-tooltip';
import { getDataFromApi } from '../redux/person';
import Map from './Map';

function Home() {
  const dispatch = useDispatch();
  const personStore = useSelector((store) => store.person);
  const markers = [];

  useEffect(() => {
    dispatch(getDataFromApi());
  }, []);

  if (personStore.data.length > 0) {
    personStore.data.forEach((obj) => {
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

  const [content, setContent] = useState('');

  return (
    <div className="px-16 pt-6 pb-16">
      <div className="container text-center px-16 m-2">
        <h3 className="text-2xl p-2">Fun facts about Psychopaths</h3>
        <div className="text-center w-2/5 p-8 mx-auto">
          <ul className="text-left pb-12 text-lg m-auto place-content-center list-disc leading-7 px-6">
            <li>Roughly one in every 200 of us is a psychopath.</li>
            <li>Psychopaths are people who do not recognize fear.</li>
            <li>People with psychopathy don&apos;t learn from their mistakes.</li>
            <li>Psychopaths don&apos;t respond to yawns well.</li>
            <li>People with psychopathic tendencies post tons of selfies.</li>
            <li>One of the classic traits of a psychopath is emotional poverty.</li>
            <li>Psychopaths are more likely to be night owls.</li>
          </ul>
        </div>
      </div>
      <h2 className="text-3xl p-4">Few of world&apos;s best known psychopaths</h2>
      <p className="text-slate-400 p-2">Click on the marker to know more about each of them</p>
      <div id="map" className="border-2 mt-8 x-0 place-content-center" style={{ width: '950px', height: '650px', margin: 'auto' }}>
        {
          markers.length > 0 ? (
            <div>
              <Map markers={markers} setTooltipContent={setContent} />
              <ReactTooltip>{content}</ReactTooltip>
            </div>
          ) : <p className="flex justify-center items-center m-auto mt-36"><RingLoader size="250px" color="white" /></p>
        }
      </div>
    </div>
  );
}

export default Home;
