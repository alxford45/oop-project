import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashCard from './DashCard';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import GridButton from './GridButton';

class CreateGrid extends React.Component {

    render() {
        return (
            <Grid container spacing={40} >
                <Grid item sm={6} md={4} lg={4}>
                    <GridButton />
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    <GridButton />
                </Grid>
                <Grid item sm={6} md={4} lg={4}>
                    <GridButton />
                </Grid>
            </Grid>
        );
    }
}

export default CreateGrid;
