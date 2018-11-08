import React from 'react';
import Proptypes from 'prop-types';
import { Ttee } from './ttteee/ttee';
import bookImg from './img/book.jpg';

class MyComponent extends React.Component {
    static propTypes = {
        prop1: Proptypes.string.isRequired
    }
    static defaultProps = {
        prop1: "yes"
    }
    onClick = () => {
        console.log('On component clicked');
    }
    render () {
        const me = this;
        const {
            prop1
        } = me.props;
        return (
            <div
                style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: 5
                }}
                onClick={ me.onClick }
            >
                This is a test component: { prop1.toUpperCase() }
                <Ttee />
                <img src={bookImg} alt="book-image"/>
            </div>
        )
    }
}

export default MyComponent;