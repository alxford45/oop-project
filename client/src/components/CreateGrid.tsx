import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashCard from './DashCard';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class CreateGrid extends React.Component {
    state = {
        open: true,
        value: 0,
    };

    handleClick = () => {
        this.setState({ value: this.state.value + 1 });
    };


    render() {
        return (
            <Grid container spacing={40} >
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 0 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 0 ? <DashCard /> : null}
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 1 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 1 ? <DashCard /> : null}
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    {this.state.value > 2 ? null :
                        <Fab color="primary" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Fab>
                    }
                    {this.state.value > 2 ? <DashCard /> : null}
                </Grid>
            </Grid>
        );
    }
}

export default CreateGrid;
