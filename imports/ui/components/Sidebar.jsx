import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

import { Session } from 'meteor/session';

const drawerWidth = '30vh';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    //color: theme.palette.text.secondary,
}));

export const Sidebar = () => {

    const chartTypes = ['A', 'B', 'C'];

    const [selectedIndex, setSelectedIndex] = React.useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        /*Session.set('chartIndex', index);
        console.log(Session.get('chartIndex'));*/
    };


    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >        <Toolbar >Gráficas</Toolbar>
            <Divider />
            <List>

                {chartTypes.map((text, index) => {
                    return <ListItem key={text} disablePadding>
                        <ListItemButton
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index)}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>

                    </ListItem>
                })}
            </List>
        </Drawer>
    )
}

/*

                {chartTypes.map((text, index) => {
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                })}


                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
*/