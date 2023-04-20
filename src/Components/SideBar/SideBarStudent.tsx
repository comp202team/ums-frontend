import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import BookIcon from '@mui/icons-material/Book';
import {Box, Drawer, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";


export const SideBarStudent: React.FC = () => {

    return (
        <Box sx={{width: '80%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <nav aria-label="main mailbox folders">
                <Drawer anchor="left" variant="permanent">
                    <div>
                        <List>
                            {/* Add your menu items here */}
                            <ListItem button>
                                <ListItemIcon><BookIcon/></ListItemIcon>
                                <ListItemText primary="Sınavlar"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Dersler"/>
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon><SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Eklemeli bi şeyler"/>
                            </ListItem>

                            <ListItem button>
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
            </nav>
        </Box>
    );
};