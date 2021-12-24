import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Cottage, Backpack, Construction} from '@mui/icons-material';


const Navigation = () => {
    const [value, setValue] = useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction label="Home" value="home" icon={<Cottage />} />
                <BottomNavigationAction label="Travel" value="travel" icon={<Backpack />} />
                <BottomNavigationAction label="Tools" value="tools" icon={<Construction />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Navigation;
