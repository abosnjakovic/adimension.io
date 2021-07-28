import React from 'react';
import styled from 'styled-components';

const IconLogo = () => (
  <Header>
    <div className="logo">
      <h1 className="logo_symbol">▲</h1>
    </div>
  </Header>
);

const Header = styled.div`
  .logo {
    display: flex;
    align-items: center;
    margin-top: -10px;
  }
  .logo_symbol {
    display: inline-block;
    font-size: 3em;
    background: url('https://media.giphy.com/media/uAuUFMMwy2tqXLyuFB/giphy-downsized.gif');
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: cover;
    background-position: center;
  }
`;

export default IconLogo;
