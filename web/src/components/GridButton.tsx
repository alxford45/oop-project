import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashCard from './DashCard';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CreateGrid from './CreateGrid';

class GridButton extends React.Component {
    state = {
        open: true,
        value: 0,
        card: []
    };

    handleClick = () => {
        this.setState({ card: [this.state.card, <DashCard />] });
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                {this.state.card}
                {this.state.open ?
                    <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                        <AddIcon />
                    </Fab>
                    : null}
            </div>
        );
    }
}

export default GridButton;
