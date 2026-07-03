"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  backdropOpacity?: number;
  preventClose?: boolean;
}

export function ModalOverlay({ isOpen, onClose, children, backdropOpacity = 0.92, preventClose = false }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.25, ease: "easeOut" } }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }}
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ background: `rgba(15, 13, 11, ${backdropOpacity})` }}
          onClick={!preventClose ? onClose : undefined}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { duration: 0.35, ease: "easeOut" } }}
            exit={{ y: "100%", transition: { duration: 0.25, ease: "easeIn" } }}
            className="w-full max-w-md rounded-t-2xl overflow-hidden"
            style={{ background: "#1A1612", border: "1px solid #2E2720", borderBottom: "none" }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
