import { motion } from "framer-motion";
 import { fadeIn } from "../../animation/animation";


const Wrapper = (props) => {
  return <motion.div variants={fadeIn}>
      { props.children}</motion.div>;
};
export default Wrapper;
