import React, { memo, useState } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.scss';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Ariadna Viana',
      url: 'https://randomuser.me/api/portraits/women/76.jpg',
      id: 1
    },
    {
      name: 'Maëlle Garcia',
      url: 'https://randomuser.me/api/portraits/women/57.jpg',
      id: 2
    },
    {
      name: 'Irene Chapman',
      url: 'https://randomuser.me/api/portraits/women/11.jpg',
      id: 3
    },
    {
      name: 'Clara Aguilar',
      url: 'https://randomuser.me/api/portraits/women/58.jpg',
      id: 4
    },
    {
      name: 'Milla Rintala',
      url: 'https://randomuser.me/api/portraits/women/45.jpg',
      id: 5
    },
    {
      name: 'Asta Larsen',
      url: 'https://randomuser.me/api/portraits/women/70.jpg',
      id: 6
    }
  ]);

  const swiped = (dir, nameToDelete, id) => {
    // setLastDirection(dir);
    console.log(`Removing ${nameToDelete}`);
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className='tinderCards'>
      <div className='tinderCards__container'>
        {people?.length === 0 && <h3>That's all folks!</h3>}
        {people?.map((person) => (
          <TinderCard
            onCardLeftScreen={() => outOfFrame(person.name)}
            onSwipe={(dir) => swiped(dir, person.name, person.id)}
            className='swipe'
            key={person.id}
            preventSwipe={['up', 'down']}>
            <div className='card' style={{ backgroundImage: `url(${person.url})` }}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default memo(TinderCards);
