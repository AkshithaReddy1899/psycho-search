import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataFromApi } from '../redux/person';
import Map from './Map';

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
    <div className="">
      <div className="border-6">
        <h2 className="text-3xl font-bold underline border-8">Are psychopaths made or born ??</h2>
        <p>I guess we will never know the answer to this, but one thing is for sure a lot of them go unnoticed they live in between us like one of us but behind the closed curtains you never know what is happening.  In the past decade, the world hasn't seen any major incident, but does that imply that we don't have any psychopaths living between us or does it point towards them being so smart that we weren't able to catch one.<br/ >Either way, in today's world, on one is safe enough. You can never guess what happens the next minute. What if one of our neighbor, friend, colleague, partner is dangerous. I just want to remind every one to  be careful, to check on your friends and relatives ones in a while.  And be always cautious of your surroundings.<br />Did you know a recent analysis has estimated the prevalence of psychopathy in the general adult population to be 4.5% (or 1 in every 22), there is a high chance of us already knowing one of them. Did you ever think about the number of psychopaths the world has already seen? And about all them the world never had a chance to get familiar with. I present  you a few of the world's  well known psychopaths and their crimes.</p>
      </div>
      {
        markers.length > 0 ? <Map markers={markers} className="border-8" /> : <p>No maps</p>
      }
    </div>
  );
}

export default Home;
