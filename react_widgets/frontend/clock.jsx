import React from 'react';


class Clock extends React.Component {
    constructor (props) {
        super (props);
        const currentTime = new Date();
        this.state = {
            time: currentTime,
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds()
        }
    }

    tick() {
        // setInterval() {
        //     this.setSeconds()
        // }
        // this.setState({
        //     this.state.time
        // })
    }

    render () {
        return (
            console.log(this.state),
            <h1>This is our clock page</h1>
        )
    }


}

export default Clock;