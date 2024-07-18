import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

export const Motiondiv = ({ children, direction, delay, initial, whileInView, once, amount}) => (
  <motion.div
    variants={fadeIn(direction, delay)}
    initial={initial}
    whileInView={whileInView}
    viewport={{ once: once, amount: amount }}
  >
    {children}
  </motion.div>
);