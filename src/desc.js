import React from 'react';
import ReactDOM from 'react-dom';
import './Desc.css'


class Describe extends React.Component {
    render() {
        return (
            <div id='div'>
                <button id='btnStart' onClick={this.props.startInterval}>Start</button>
                <button id='btnStop' onClick={this.props.stopInterval}>Stop</button>
                <button id='btnReset' onClick={this.props.resetInterval}>Reset</button>
            </div>
        )

    }



}

export default Describe