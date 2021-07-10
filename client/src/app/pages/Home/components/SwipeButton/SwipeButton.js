import React, { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';

import { MdClose, MdStar, MdFavorite, MdFlashOn, MdReplay } from '@icons';

import './SwipeButton.scss';

const SwipeButtons = () => {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButtons__repeat'>
        <MdReplay />
      </IconButton>
      <IconButton className='swipeButtons__left'>
        <MdClose />
      </IconButton>
      <IconButton className='swipeButtons__star'>
        <MdStar />
      </IconButton>
      <IconButton className='swipeButtons__right'>
        <MdFavorite />
      </IconButton>
      <IconButton className='swipeButtons__lightning'>
        <MdFlashOn />
      </IconButton>
    </div>
  );
};

export default memo(SwipeButtons);
