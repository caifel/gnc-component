import React from 'react';
import Proptypes from 'prop-types';
import Ttee from './ttteee/ttee';
import bookImg from './img/book.jpg';

class MyComponent extends React.Component {
   constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
   }

   onClick() {
      this.a = 5;
   }

   render() {
      const { test } = this.props;
      return (
         <div
            key="something"
            style={{
               backgroundColor: 'green',
               color: 'white',
               padding: 5
            }}
         >
            <span>
               {'This is a test component :::'}
               {test.toUpperCase()}
            </span>
            <Ttee />
            <button type="button" onClick={this.onClick}>
               {'Test'}
            </button>
            <img src={bookImg} alt="book" />
         </div>
      );
   }
}

MyComponent.propTypes = {
   test: Proptypes.string
};
MyComponent.defaultProps = {
   test: 'yes'
};

export default MyComponent;
