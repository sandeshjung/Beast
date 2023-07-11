import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { piechart } from '../assets';

const Piechart = () => {
  return (
    <>
      <div className="mt-20 flex justify-center">
        <img src={piechart} alt="Piechart" className="w-full max-w-[1000px]" />
      </div>
    </>
  );
};

export default Piechart;
