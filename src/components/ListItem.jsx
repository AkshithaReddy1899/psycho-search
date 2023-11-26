import React from 'react';
import { useLocation } from 'react-router-dom';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ReactPlayer from 'react-player/lazy';
import { data } from '../assets/data';

function ListItem() {
  const location = useLocation();
  const person = [];

  if (data.length > 0) {
    data.forEach((obj) => {
      if (obj.id === location.state.id) {
        person.push(obj);
      }
    });
  }

  return (
    <div>
      {
        person.length > 0 ? (
          person.map((item) => (
            <div key={item.id} className="p-4 md:p-16 m-12 w-3/4 mx-auto rounded-lg shadow-lg shadow-slate-700 bg-gray-900">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="border p-1 md:p-4">
                  <div className="flex justify-center items-center" style={{ width: '250px', height: 'auto' }}>
                    <img src={item.image} alt={item.name} style={{ width: '250px', height: 'auto' }} />
                  </div>
                  <h1 className="p-4 text-2xl">{item.name}</h1>
                </div>
                <div className="text-left text-base mb-6 md:px-16">
                  <p className="pt-2">
                    <b className="text-slate-400">Other Names: </b>
                    {item.other_names}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Crime: </b>
                    {item.crime}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Region: </b>
                    {item.country}
                    ,&nbsp;
                    {item.state}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Weapons: </b>
                    {item.weapons}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Victims: </b>
                    {item.victims}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Last words: </b>
                    {item.last_words}
                  </p>
                  <div className="flex-col md:flex-row">
                    <p className="pt-2">
                      <b className="text-slate-400">Date of birth: </b>
                      {item.d_o_b}
                    </p>
                    <p className="pt-2">
                      <b className="text-slate-400">Date of death: </b>
                      {item.d_o_d}
                    </p>
                  </div>
                  <p className="pt-2">
                    <b className="text-slate-400">Died at the age of: </b>
                    {item.age_of_death}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">Death: </b>
                    {item.death}
                  </p>
                  <p className="pt-2">
                    <b className="text-slate-400">More details: </b>
                    <a href={item.link} className="underline" target="_blank" rel="noreferrer">Wiki</a>
                  </p>
                </div>
              </div>
              <div className="m-4 flex justify-center items-center">
                <ReactPlayer url={item.video} />
              </div>
            </div>
          ))) : (<p><ScaleLoader size="20px" color="white" /></p>)
      }
    </div>
  );
}

export default ListItem;
