import React from "react";
import dateFns from "date-fns";
import { createStyles, Theme, withStyles, Button } from "@material-ui/core";
import "./Calendar.css";


class Calendar extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            name: this.props.name,
            start: this.props.start,
        };
    }

    logProps = () => {
        console.log(this.state.name);
        console.log(this.state.start);
        var dates = [""];
        var pieces = "";
        this.state.start.map((element) => {
            let pieces = element.split("-");
            console.log(dates);
            console.log(pieces);
            dates.push(pieces);


        });
        console.log(dates);
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
          </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [<div />];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }

    renderCells() {
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [<div />];

        let days = [<div />];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell`}
                        onClick={() => this.onDateClick(cloneDay.toString())}
                        key={cloneDay.toString()}

                    >
                        <span className="number">
                            {formattedDate}
                        </span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );

                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div key={day.toString() + "row"} className="row" >

                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }

    onDateClick = day => {
        const dateFormat = "D";
        let formattedDate = "";
        formattedDate = dateFns.format(day, dateFormat);

        console.log(formattedDate);

    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                {this.logProps()}
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default (Calendar);