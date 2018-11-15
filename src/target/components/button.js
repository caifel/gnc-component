import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
   const { children, onClick } = props;
   return (
      <div
         style={{
            borderStyle: 'solid',
            borderColor: 'orange',
            borderWidth: 1,
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            fontSize: 18,
            outline: 'none',
            padding: 10,
            cursor: 'default',
            userSelect: 'none'
         }}
         onClick={onClick}
         onKeyPress={() => {}}
         role="button"
         tabIndex={0}
      >
         {children}
      </div>
   );
}

Button.propTypes = {
   onClick: PropTypes.func.isRequired
};

export default Button;
