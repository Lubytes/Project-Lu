import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Home, Translate, LinkedCamera } from '@mui/icons-material';
import { NearMe } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const actions = [
  { icon: <Home />, name: 'Home', link: 'home' },
  { icon: <Translate />, name: 'French Playground', link: 'french-playground' },
  { icon: <LinkedCamera />, name: 'Blog', link: 'blog' }
];

// TODO: Prevent throwing nav off screen. Something like animate={{ x: isInView ? 0 : 100, y: isInView ? 0 : 100 }}
const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const navigate = useNavigate();

  return (
    <motion.div drag>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, zIndex: 2 }}>
        <SpeedDial
          ariaLabel="Main Navigation"
          sx={{ position: 'absolute', bottom: '1em', right: '1em' }}
          icon={<SpeedDialIcon openIcon={<NearMe />} />}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => navigate(action.link)}
            />
          ))}
        </SpeedDial>
      </Box>
    </motion.div>
  );
};

export default Nav;
