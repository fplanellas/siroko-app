import { useContext } from "react";
import { motion } from "framer-motion";
import { SirokoContext } from "../context/SirokoContext";
import { QuestionaryPass1 } from "./pass1/QuestionaryPass1";
import { QuestionaryPass2 } from "./pass2/QuestionaryPass2";
import { QuestionaryPass3 } from "./pass3/QuestionaryPass3";

export const Article = () => {
  const { moveToPassNext, moveToPassNext2, moveToPassNext3 } =
    useContext(SirokoContext);

  return (
    <>
      <motion.article
        animate={{ x: moveToPassNext }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
      >
        <QuestionaryPass1 />
      </motion.article>

      <motion.article
        className="pass2"
        animate={{ x: moveToPassNext2 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
      >
        <QuestionaryPass2 />
      </motion.article>

      <motion.article
        className="pass3"
        animate={{ x: moveToPassNext3 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1.2 }}
      >
        <QuestionaryPass3 />
      </motion.article>
    </>
  );
};
