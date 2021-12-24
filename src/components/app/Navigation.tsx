import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Cottage, Backpack, Celebration} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState('home');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        navigate(newValue);
      };

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction label="Home" value="home" icon={<Cottage />} />
                <BottomNavigationAction label="Celebrations" value="celebrations" icon={<Celebration />} />
                <BottomNavigationAction label="Sack o' Tools" value="tools" icon={<Backpack />} />
            </BottomNavigation>
        </Paper>
    );
};

export default Navigation;
