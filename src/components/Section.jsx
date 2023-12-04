import React from 'react'
import {easeIn, motion} from 'framer-motion';
const h3animation= {
  initial:{
    y:"-100%", opacity:0,
  },
  whileInView:{
    y:0,opacity:1,
  },
};
const panimation={
  ...h3animation,
  transition:{
    delay:0.2,
  }
};
const banimation={
  initial:{
    y:"100%", opacity:0,
  },
  whileInView:{
    y:0,opacity:1,
  },
  transition:{
    delay:0.3,
    ease:easeIn,
  },
};
const ianimation={
  initial:{
    scale:0.1, opacity:0,
  },
  whileInView:{
    scale:1,opacity:1,
  },
  transition:{
    delay:0.3,
  },
}
const Section = ({h3,text,btnText,ImgSrc,HasBtn,imgSize="70%",backgroundColor,headingColor,textColor,btnBgColor,btnColor}) => {
  return (
    <section style={{backgroundColor:backgroundColor}} className='section'>
        <div>
        <motion.h3 data-cursorpointer style={{color:headingColor}} {...h3animation}>{h3}</motion.h3>
        <motion.p data-cursorpointer {...panimation} style={{color:textColor}}>{text}</motion.p>
        {
            HasBtn && <motion.button {...banimation} data-cursorpointer style={{color:btnColor,backgroundColor:btnBgColor}}>{btnText}</motion.button>
        }
        <motion.div {...ianimation}>
            <img data-cursorpointer src={ImgSrc} alt="ImgSrc" style={{width:imgSize}} />
        </motion.div>
        </div>
    </section>
  )
}

export default Section