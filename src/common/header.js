import React from 'react';

function Header(props) {
  return (
    <section className="Header">
      <div className="Center">
        <h1 className="white-title">
          {props.children}
        </h1>
      </div>
    </section>
  )
}

export default Header;