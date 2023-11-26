import React from 'react';

import MapComponent from './Map';

function Home() {
  return (
    <div className="px-auto">
      <div className="bg-no-repeat bg-cover bg-center bg-hero_sm md:bg-hero_md lg:bg-hero_lg p-4 lg:px-20">
        <div className="backdrop-blur-sm bg-white/10 grid justify-center items-center" style={{ height: '90vh', width: '90vw z-0' }}>
          <div className="px-12 md:px-20 lg:px-auto lg:w-1/2 lg:h-3/4 lg:pt-20 col-start-1 row-start-1 ">
            <div className="text-center md:text-left lg:h-3/4 lg:p-3 lg:pt-14 md:pt-0">
              <h1 className="text-5xl lg:text-7xl font-noto ">Welcome to PsychoSearch,</h1>
              <br className="h-10 pt-44" />
              <p className="text-lg lg:text-xl h-auto">
                The ultimate destination for those seeking information on the world&apos;s most notorious psychopaths. our website is the go-to resource for true crime enthusiasts and psychology students alike. Dive into our comprehensive profiles, packed with detailed biographies, crime scenes, and chilling quotes from the killers themselves. Stay informed and stay safe with PsychoSearch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl p-4">Few of world&apos;s best known psychopaths</h2>
      <p className="text-slate-400 p-2">Click on the marker to know more about each of them</p>
      <MapComponent />
    </div>
  );
}

export default Home;
