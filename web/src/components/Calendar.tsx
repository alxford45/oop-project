import React from "react";
import dateFns from "date-fns";
import { createStyles, Theme, withStyles, Button, DialogTitle, Dialog, MenuItem, Menu, DialogContent, DialogActions, Divider } from "@material-ui/core";
import "./Calendar.css";
import { EventList } from "../list/EventList";
import { Link } from "react-router-dom";

let event = new EventList();

class Calendar extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            event: this.props.event,
            loaded: false,
            open: false,
            details: event,
        };
    }

    logProps = () => {
        var dates = [""];
        var months = [""];
        var eventDates = ["01-02-03"];
        this.state.event.get().map((item, index) => (
            eventDates.push(item.day)
        ))
        eventDates.map((element) => {
            let pieces = element.split("-");
            dates.push(pieces[2]);
            if (pieces[1] == "01") {
                pieces[1] = "Jan";
            }
            if (pieces[1] == "02") {
                pieces[1] = "Feb";
            }
            if (pieces[1] == "03") {
                pieces[1] = "Mar";
            }
            if (pieces[1] == "04") {
                pieces[1] = "Apr";
            }
            if (pieces[1] == "05") {
                pieces[1] = "May";
            }
            if (pieces[1] == "06") {
                pieces[1] = "Jun";
            }
            if (pieces[1] == "07") {
                pieces[1] = "Jul";
            }
            if (pieces[1] == "08") {
                pieces[1] = "Aug";
            }
            if (pieces[1] == "09") {
                pieces[1] = "Sep";
            }
            if (pieces[1] == "10") {
                pieces[1] = "Oct";
            }
            if (pieces[1] == "11") {
                pieces[1] = "Nov";
            }
            if (pieces[1] == "12") {
                pieces[1] = "Dec";
            }
            months.push(pieces[1]);
        });
        dates.splice(0, 2);
        months.splice(0, 2);
        let newEvent = {};
        this.state.event.get().map((display, index) => (
            newEvent = {
                name: display.name,
                day: dates[index],
                months: months[index],
                id: display.id,
                uri: display.uri,
                location: display.location,
                type: display.type,
                venue: display.venue,
                performance: display.performance
            },
            event.add(newEvent)
        ))

        this.setState({ event: event });
        this.setState({ loaded: true });
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
                let stringDate = dateFns.parse(cloneDay).toString();
                let splitDate = stringDate.split(" ");
                days.push(
                    <div
                        className={`col cell`}

                        key={cloneDay.toString()}
                    >
                        <span className="number">
                            {this.state.event.get().map((item, index) => (
                                item.day == splitDate[2] && item.months == splitDate[1] ? <Button onClick={() => this.onDateClick(splitDate[2], item)}>{item.name}</Button> : null
                            ))}
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

    onDateClick = (date, item) => {
        if (date == item.day) {
            this.setState({ details: item })
        }
        this.setState({ open: true });

    };

    handleClose = () => {
        this.setState({ open: false })
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
                {this.state.loaded ? null :
                    <Button onClick={this.logProps}>
                        Load Events
                </Button>}
                <Dialog
                    open={this.state.open} //{this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{this.state.details.type}</DialogTitle>
                    <DialogContent>
                        {this.state.details.name}
                        <div />
                        <Link to={this.state.details.uri} style={{ textDecoration: "none" }}>
                            {this.state.details.uri}
                        </Link>
                    </DialogContent>
                </Dialog>
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                <Divider />
                <div>
                    <Button />
                </div>
                <div>
                    <Button />
                </div>
            </div>
        );
    }
}

export default (Calendar);