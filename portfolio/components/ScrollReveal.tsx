import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
}

export const ScrollReveal = ({ children, width = "fit-content", className = "" }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
            style={{ width }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
