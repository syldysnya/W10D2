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
        this.tick = this.tick.bind(this);
    }
    
    componentDidMount() {
        const inter = setInterval(this.tick, 1000)
    }

    componentWillUnmount () {
        clearInterval(inter)
    }
    
    tick() {
        // debugger
        this.setState({ seconds: this.incrementSeconds() });
    }

    incrementSeconds () {
        this.setState({ seconds: this.state.seconds + 1 })

        if (this.state.seconds === 60) {
            this.setState({ seconds: 0, minutes: this.incrementMinutes() }) 
        }
        return this.state.seconds
    }

    incrementMinutes () {
        this.setState({ minutes: this.state.minutes + 1 })

        if (this.state.minutes === 60) {
            this.setState({ minutes: 0, hours: this.state.hours + 1 }) 
        }
        return this.state.minutes
    }
    
    render () {
        return (
            <div className="widget">
                <h1 className="title">*This is Our Clock*</h1>
                <h2 className="time">{[this.state.hours, this.state.minutes, this.state.seconds].join(":")}</h2>
            </div>
        )
        
    }
}

    
    export default Clock;
    

    