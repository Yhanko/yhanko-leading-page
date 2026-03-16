import { motion } from "framer-motion";
import { ArrowDown, Code, Database, Globe, Cpu, Cloud, Smartphone, Shield, Layers } from "lucide-react";
import yhankoLogo from "@/assets/yhanko-logo.png";

const technologies = [
  { icon: Code, name: "React", delay: 0 },
  { icon: Database, name: "Database", delay: 2 },
  { icon: Globe, name: "Web", delay: 4 },
  { icon: Cpu, name: "AI", delay: 6 },
  { icon: Cloud, name: "Cloud", delay: 8 },
  { icon: Smartphone, name: "Mobile", delay: 10 },
  { icon: Shield, name: "Security", delay: 12 },
  { icon: Layers, name: "API", delay: 14 },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Orbiting Technologies */}
          <div className="relative w-52 h-52 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mb-8 sm:mb-10 md:mb-12">
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />

            {/* Orbiting Icons */}
            {technologies.map((tech, index) => {
              const radiusBase = index % 2 === 0 ? 75 : 105;
              const radiusMd = index % 2 === 0 ? 100 : 135;
              const radiusLg = index % 2 === 0 ? 120 : 160;

              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute top-1/2 left-3.5"
                  style={{
                    animation: `orbit ${20 + index * 2}s linear infinite`,
                    animationDelay: `${-tech.delay}s`,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 -ml-4 -mt-4 xs:-ml-5 xs:-mt-5 sm:-ml-5.5 sm:-mt-5.5 md:-ml-6 md:-mt-6 lg:-ml-7 lg:-mt-7 rounded-lg sm:rounded-xl bg-card border border-border flex items-center justify-center shadow-lg hover:glow-effect transition-all cursor-pointer"
                    style={{
                      transform: `translateX(${radiusLg}px)`,
                    }}
                  >
                    <tech.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit Rings */}
            <div
              className="absolute inset-0 rounded-full border border-border/30"
              style={{ transform: "scale(0.75)" }}
            />
            <div className="absolute inset-0 rounded-full border border-border/20" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-2"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">
              Transformamos ideias em{" "}
              <span className="gradient-text">soluções digitais</span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-9 md:mb-10 max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl mx-auto">
              Desenvolvimento de software e soluções tecnológicas inovadoras multissectoriais.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#quem-somos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-1.5 sm:p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-pointer"
            >
              <ArrowDown size={20} className="sm:w-6 sm:h-6" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}