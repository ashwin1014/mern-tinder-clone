import React, { memo } from 'react';
import IconButton from '@material-ui/core/IconButton';

import { MdPerson, MdForum } from '@icons';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <IconButton className='header__icon'>
        <MdPerson />
      </IconButton>
      <img src='https://cdn.worldvectorlogo.com/logos/tinder-2.svg' className='header__logo' alt='logo' />
      <IconButton className='header__icon'>
        <MdForum />
      </IconButton>
    </div>
  );
};

export default memo(Header);
