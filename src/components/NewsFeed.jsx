import React from 'react';

const NewsFeed = () => {
  return (
    <>
      <div className="col-sm-3">
        <h3>News Feed</h3>
        <div className="row ml-1 news-feed-card1 mb-4 no-gutters">
          <div className="col-sm-2 bg-color"></div>
          <div className="col-sm-10">
            <p className='ml-4'>CENTRALIZE</p>
            <span className='ml-4'>Oct 27, 2019</span>
            <span className="float-right mr-3">Jack</span>
          </div>
        </div>
        <div className="row ml-1 news-feed-card2 mb-4 no-gutters">
          <div className="col-sm-2 bg-color"></div>
          <div className="col-sm-10">
            <p className='ml-4'>OPTIMIZE</p>
            <span className='ml-4'>Oct 22, 2019</span>
            <span className="float-right mr-3">Benjamin</span>
          </div>
        </div>
        <div className="row ml-1 news-feed-card3 mb-4 no-gutters">
          <div className="col-sm-2 bg-color"></div>
          <div className="col-sm-10">
            <p className='ml-4'>TRACK</p>
            <span className='ml-4'>Oct 20, 2019</span>
            <span className="float-right mr-3">Vincent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsFeed;
