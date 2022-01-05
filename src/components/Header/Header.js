import React from 'react';

const Header = (props) => {
  return (<div>
    <img src={props.logo} width={200} height={60}/>
  </div>);
}

export default Header;