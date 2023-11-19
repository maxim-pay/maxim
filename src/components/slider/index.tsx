import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

const images = [
    'https://jekolo.com/jekolo1/wp-content/uploads/2021/12/c15-silver-1.jpg',
    'https://jekolo.com/jekolo1/wp-content/uploads/2021/12/c15-silver-1.jpg',
    'https://i.ibb.co/ncrXc2V/1.png',
    'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/217685/1.jpg?9403',
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);


  const imageIndex = (page % images.length + images.length) % images.length;


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        <ArrowRightRoundedIcon />
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <ArrowLeftRoundedIcon />
      </div>
    </>
  );
};
