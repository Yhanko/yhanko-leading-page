import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Tablet } from "lucide-react";
import yhankoLogo from "@/assets/ee 1.svg";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    setTimeout(onComplete, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background overflow-hidden cursor-pointer"
          onClick={handleSkip}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-30"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)",
              backgroundSize: "200% 200%",
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/20"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
                y: (typeof window !== "undefined" ? window.innerHeight : 800) + 20,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: -20,
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear",
              }}
            />
          ))}

          {/* Main content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-5 sm:gap-6 md:gap-8 px-4 sm:px-6 text-center w-full max-w-sm sm:max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Logo with glow effect */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            >
              <motion.div
                className="absolute inset-0 blur-2xl bg-primary/30 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <img
                src={yhankoLogo}
                alt="Yhanko"
                className="relative w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain"
              />
            </motion.div>

            {/* Welcome text */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.h1
                className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-bold text-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                Bem-vindo à <span className="text-primary">Yhanko</span>
              </motion.h1>

              <motion.p
                className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md leading-relaxed mx-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                Para uma experiência completa e imersiva, recomendamos acessar em um
              </motion.p>

              {/* Device icons */}
              <motion.div
                className="flex items-center justify-center gap-4 sm:gap-6 pt-1 sm:pt-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Computador</span>
                </motion.div>

                <span className="text-muted-foreground text-base sm:text-lg">ou</span>

                <motion.div
                  className="flex flex-col items-center gap-1.5 sm:gap-2 text-primary"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <Tablet className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">Tablet</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-36 xs:w-40 sm:w-48 h-1 bg-muted rounded-full overflow-hidden mt-2 sm:mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Skip hint */}
            <motion.p
              className="text-[10px] sm:text-xs text-muted-foreground/60 mt-1 sm:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              Clique em qualquer lugar para continuar
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};