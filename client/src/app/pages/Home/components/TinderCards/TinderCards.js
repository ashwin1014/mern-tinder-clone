import React, { memo, useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import axios from '@utils/axios';
import { Loader } from '@sharedComponents';

import './TinderCards.scss';

const TinderCards = () => {
  const [people, setPeople] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const resp = await axios.get('/tinder/card');
      setPeople(resp.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const swiped = (dir, nameToDelete, id) => {
    // setLastDirection(dir);
    console.log(`Removing ${nameToDelete}`);
    setPeople((prev) => prev.filter((person) => person._id !== id));
  };

  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className='tinderCards'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='tinderCards__container'>
            {people?.length === 0 && <h3>That's all folks!</h3>}
            {people?.map((person) => (
              <TinderCard
                onCardLeftScreen={() => outOfFrame(person.name)}
                onSwipe={(dir) => swiped(dir, person.name, person._id)}
                className='swipe'
                key={person._id}
                preventSwipe={['up', 'down']}>
                <div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default memo(TinderCards);
