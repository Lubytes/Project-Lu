import React, {useContext, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {DarkMode, LightMode, Settings} from '@mui/icons-material';

enum ActionTypes {
    toggleMode = 'toggleMode'
}

type Props = {
    setMode: Function
}

const FAB = (props: Props) => {
    const theme = useTheme();
    const { setMode } = props;

    const actions = [
        { 
            icon: theme.palette.mode === 'light' ? <DarkMode /> : <LightMode />, 
            name: theme.palette.mode === 'light' ? 'Darkmode' : 'Lightmode', 
            action: ActionTypes.toggleMode
        }
      ];

    const handleAction = (action: ActionTypes) => {
        if (action === ActionTypes.toggleMode) {
            setMode(theme.palette.mode === 'light' ? 'dark' : 'light');
        }
    };

    return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
        ariaLabel="SpeedDial settings"
        sx={{ position: 'absolute', top: 16, right: 16 }}
        direction='down'
        icon={<Settings />}
        >
        {actions.map(action => (
            <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleAction(action.action)}
            />
        ))}
        </SpeedDial>
    </Box>
    );
};

export default FAB;