import React from 'react';
import ReactDOM from 'react-dom';
import Describe from './desc';
import './app.css'

var interval
class StopWatch extends React.Component {

    constructor() {
        super()
        this.state = {
            hour: 0,
            minutes: 0,
            second: 0,
            status: false
        }

    }

    startInterval = () => {
        if (this.state.status == false) {
            interval = setInterval(() => {

                this.setState({

                    second: this.state.second + 1
                })
                if (this.state.second == 10) {
                    this.setState({
                        second: 0,
                        minutes: this.state.minutes + 1
                    })
                }
                else if (this.state.minutes == 1) {
                    this.setState({
                        minutes: 0,
                        hour: this.state.hour + 1
                    })
                }

            }, 1000);
        }

    }

    stopInterval = () => {

        clearInterval(interval)

    }

    resetInterval = () => {
        this.stopInterval()
        this.setState({
            hour: 0,
            second: 0,
            minutes: 0

        })
    }

    render() {
        let h = this.state.hour, m = this.state.minutes, s = this.state.second

        let counter = `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' +m } : ${s > 9 ? s : '0' + s}`
        return (
            <div >

                <div id='divTimer'>
                    <span id="sHour">{counter}</span>

                </div>
                <Describe startInterval={this.startInterval} stopInterval={this.stopInterval} resetInterval={this.resetInterval} />
            </div>
        )
    }


}

export default StopWatch