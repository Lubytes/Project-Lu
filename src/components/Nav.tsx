import { useRef, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { motion, useInView } from 'framer-motion';

const Nav = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      drag
      animate={{ x: isInView ? 100 : 0, y: isInView ? 100 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ boxShadow: '0px 0px 15px rgba(0,0,0,0.2)' }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </motion.div>
  );
};

// const MotionNav = motion.create(Nav);

export default Nav;
