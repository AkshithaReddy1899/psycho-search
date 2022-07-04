/* eslint-disable max-len */
import React from 'react';

function Disclamer() {
  return (
    <div className="m-6 p-4 w-1/2 mx-auto font-serif leading-8">
      <h2 className="text-2xl text-red-500">Warning</h2>
      <div className="pt-6">
        Hello, I hope you are doing well.
        <br />
        <p className="text-left text-2xl leading-10">
          All the information presented here is from the internet, which might or might not be true. My intention behind this web application is purely educational. However, you can always mail me at
          <a href="mailto:akshithareddy1899@gmail.com" className="text-green-600 decoration-solid" onClick={() => navigator.clipboard.writeText('akshithareddy1899@gmail.com')}> akshithareddy1899@gmail.com </a>
          <br />
          <ul className="list-disc text-lg leading-8 p-8">
            <li>If there is any information that bothers you</li>
            <li>If you feel any information is incorrectly presented</li>
            <li>You have an idea that could make this application even better</li>
            <li>If you just want to let me know your thoughts on this</li>
          </ul>
          I would be pleased to hear more and correct any information or add more features to this web application that you think would be good.
        </p>
        <br />
        <p className="text-left text-lg">
          Best,
          <br />
          Akshitha Reddy.
        </p>
      </div>
    </div>
  );
}

export default Disclamer;
