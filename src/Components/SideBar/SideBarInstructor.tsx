import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";


export const SideBarInstructor: React.FC = () => {

    return (
        <Drawer anchor="left" variant="permanent">
            <div>
                <List>
                    {/* Add your menu items here */}
                    <ListItem button>
                        <ListItemIcon><PersonIcon/></ListItemIcon>
                        <ListItemText primary="Sınavlar"/>
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon><SchoolIcon/></ListItemIcon>
                        <ListItemText primary="Dersler"/>
                    </ListItem> <ListItem button>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary="Sınavlar"/>
                </ListItem>

                    <ListItem button>
                        <ListItemIcon><SchoolIcon/></ListItemIcon>
                        <ListItemText primary="Dersler"/>
                    </ListItem> <ListItem button>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText primary="CustomList3"/>
                </ListItem>

                    <ListItem button>
                        <ListItemIcon><SchoolIcon/></ListItemIcon>
                        <ListItemText primary="CustomList4"/>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    );
};