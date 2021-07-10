import React from 'react';

import { Head, Header } from '@sharedComponents';
// import strings from '@localization/home.locale';

import TinderCards from './components/TinderCards/TinderCards';
import SwipeButton from './components/SwipeButton/SwipeButton';

import './Home.style.scss';

const Home = () => (
  <>
    <Head>
      <title>Tinder</title>
    </Head>
    <div className='home'>
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  </>
);

export default Home;
