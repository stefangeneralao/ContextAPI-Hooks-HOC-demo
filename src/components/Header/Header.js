import React from 'react';
import { consumeHeaderStyle } from 'contexts/HeaderStyleContext';
import './Header.scss';

const Header = ({ label, color, backgroundColor }) => (
  <header style={ {
    backgroundColor,
    color,
  } }>
    <h1>
      { label }
    </h1>
  </header>
);

export default consumeHeaderStyle(Header);