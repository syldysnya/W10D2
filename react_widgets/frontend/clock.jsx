import { time } from 'node:console';
import React from 'react';


class Clock extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            time: new Date()
        }
    }




    render () {
        return (
            <h1>This is our clock page</h1>
        )
    }


}

export default Clock;