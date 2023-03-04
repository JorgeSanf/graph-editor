import React from "react";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';
import { useTracker } from 'meteor/react-meteor-data';
import Slider from '@mui/material/Slider';
import * as fs from 'fs';
import { Meteor } from 'meteor/meteor';

const Toggle = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    return <Stack direction="row" spacing={1}>
        <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                1
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                2
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                3
            </ToggleButton>
            <ToggleButton value="hard" aria-label="left aligned">
                4
            </ToggleButton>
        </ToggleButtonGroup>
    </Stack>
}

export const Config = () => {
    const [menu, setMenu] = React.useState(0);

    const chartIndex = useTracker(() => Session.get('chartIndex'));

    React.useEffect(() => {
        setMenu(chartIndex);
    }, [chartIndex]);

    return (
        <Grid>

            <Typography gutterBottom variant="body1">
                Select type
            </Typography>
            <Box sx={{ m: 2, display: "flex", alignItems: "center" }}>
                {menu ? <Toggle /> : ''}
                <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    sx={{ width: '10%' }}
                />
            </Box>
        </Grid>
    );
};

/*function retrieveOptions() {
    const chartIndex = Session.get('chartIndex');
    console.log(chartIndex);
    const mock = require('./../../../tests/mock.json');
    console.log(mock);
    const charType = mock[chartIndex];
    console.log(charType);
    return charType;
}*/
