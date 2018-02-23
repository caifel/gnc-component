import React from 'react'
import MyComponent from './MyComponent'

export default class extends React.Component {
    render () {
        return (
            <div
                className='gnc-app'
            >
                Here set different use cases for the component
                <MyComponent/>
            </div>
        );
    }
}