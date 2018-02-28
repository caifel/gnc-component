import React from 'react'
import Proptypes from 'prop-types'

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
            </div>
        )
    }
}

export default MyComponent;