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

export const Config = () => {

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return <Grid>
        <Box sx={{ m: 2 }}>
            <Typography gutterBottom variant="body1">
                Select type
            </Typography>

            <Stack direction="row" spacing={1}><ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <Chip label="Extra Soft" />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <Chip color="primary" label="Soft" />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <Chip label="Medium" />
                </ToggleButton>
                <ToggleButton value="hard" aria-label="left aligned">
                    <Chip label="Hard" />
                </ToggleButton>
            </ToggleButtonGroup>

            </Stack>
        </Box>
    </Grid>
}