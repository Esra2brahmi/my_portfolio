import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-0 rounded-3xl xs:w-[320px] w-full overflow-hidden flex flex-col items-center relative group'
      style={{ minHeight: 320 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ scale: hovered ? 1.08 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className='relative w-full flex justify-center items-center bg-white p-4'>
        <img
          src={image}
          alt={testimonial}
          className='w-auto h-auto max-w-full max-h-[200px] rounded-2xl shadow transition-transform duration-300 group-hover:opacity-60'
        />
        {hovered && (
          <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 z-10'>
            <img
              src={image}
              alt={testimonial}
              className='w-auto h-auto max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl border-4 border-white'
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
            />
          </div>
        )}
      </div>
      <div className='w-full flex flex-col items-center justify-center py-4 px-2'>
        <p className='text-white font-bold text-[16px] text-center'>{testimonial}</p>
        <p className='text-secondary text-[14px] text-center'>{name}</p>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-10`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
