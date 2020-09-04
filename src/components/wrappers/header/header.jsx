import React from 'react';

const Header = (Wrapped) => (props) => {
  return (
    <header className="app-header">
      <Wrapped { ...props } />
    </header>
  )
}

export default Header;