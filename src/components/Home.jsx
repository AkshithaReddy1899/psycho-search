import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RingLoader from 'react-spinners/RingLoader';
import ReactTooltip from 'react-tooltip';
import { getDataFromApi } from '../redux/person';
import Map from './Map';
import { ReactComponent as Svg } from '../home.svg';

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
      <div className="">
        <Svg className="mx-auto w-80 h-80" />
        <div className="w-1/2 mx-auto py-8">
          <p className="text-2xl">PsychoSearch is an online encyclopedia that aims to demystify psychopaths and their behavior by providing information about their motivations and intensions. They will also give you access to a large database of psychopaths for you to browse through.</p>
        </div>
      </div>
      <div className="text-red-500 border border-red-200 text-1xl p-8 text-left my-20">
        <h2 className="text-2xl">Warning</h2>
        <br />
        <p>
          This app contains violent disturbing content. We&apos;re not going to ask you to change anything about your browsing habits or the way you use these products, but we want you to know that these products are intended for responsible adult audiences only, and they should never be used by children or young adults under the age of 18.

          If your child is old enough to read this message, please let them know that if they use these products, it is at their own risk and responsibility. If they get in trouble with their parents for using them, it&apos;s not our responsibility.

          We appreciate your understanding and cooperation!

        </p>
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
