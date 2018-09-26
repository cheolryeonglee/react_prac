import React, { Component } from 'react';
import { SkiDayList } from './SkiDay/SkiDayList';
import { SkiDayCount } from './SkiDay/SkiDayCount';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allSkiDays: [
                {
                    resort: "Death Valley",
                    date: new Date("9/26/2018"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Yosemite",
                    date: new Date("10/11/2018"),
                    powder: false,
                    backcountry: false
                },
                {
                    resort: "Grand Canyon",
                    date: new Date("11/6/2018"),
                    powder: false,
                    backcountry: true
                },
            ]
        }
    }

    countDays(filter) {
        const { allSkiDays } = this.state;
        return allSkiDays.filter((day) => 
            filter ? day[filter] : day).length;
    }

    render() {
        return (
            <div className="app">
                <SkiDayList days={this.state.allSkiDays}/>
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays('powder')}
                             backcountry={this.countDays('backcountry')}/>
            </div>
        )
    }
}