import React from 'react';
import Grid from '@material-ui/core/Grid';
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
