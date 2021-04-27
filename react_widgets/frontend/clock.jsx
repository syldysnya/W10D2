import React from 'react';


class Clock extends React.Component {
    constructor (props) {
        super (props);
        const currentTime = new Date();
        // console.log(currentTime);
        // console.log(this);
        this.state = {
            time: 10,
            // hours: currentTime.getHours(),
            // minutes: currentTime.getMinutes(),
            // seconds: currentTime.getSeconds()
        }
        debugger
    }

    incrementSeconds () {
        debugger
        this.setState({ seconds: this.state.seconds + 1 })

        if (this.state.seconds === 60) {
            this.setState({ seconds: 0, minutes: this.incrementMinutes }) 
        }
    }

    incrementMinutes () {
        this.setState({ minutes: this.state.minutes + 1 })

        if (this.state.minutes === 60) {
            this.setState({ minutes: 0, hours: this.state.hours + 1 }) 
        }
    }


    tick() {
        debugger
        this.setState({ seconds: this.incrementSeconds })

    }

    render () {
        return (
            console.log(this.state),
            <h1 onClick={this.tick}>This is our clock page</h1>
        )
    }


}

export default Clock;