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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Orbiting Technologies */}
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] mb-12">
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse-glow backdrop-blur-sm border border-border/50 -top-5 left-3.5">
                <img src={yhankoLogo} alt="Yhanko" className="w-24 md:w-32 object-contain" />
              </div>
            </motion.div>

            {/* Orbiting Icons */}
            {technologies.map((tech, index) => {
              const angle = (index / technologies.length) * 360;
              const radius = index % 2 === 0 ? 120 : 160;
              
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
                    className="w-12 h-12 md:w-14 md:h-14 -ml-6 -mt-6 md:-ml-7 md:-mt-7 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg hover:glow-effect transition-all cursor-pointer"
                    style={{
                      transform: `translateX(${radius}px)`,
                    }}
                  >
                    <tech.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Orbit Rings */}
            <div className="absolute inset-0 rounded-full border border-border/30" style={{ transform: 'scale(0.75)' }} />
            <div className="absolute inset-0 rounded-full border border-border/20" />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transformamos ideias em{" "}
              <span className="gradient-text">soluções digitais</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Desenvolvimento de software e soluções tecnológicas inovadoras e multissectoriais, 
              focadas no bem-estar das pessoas e melhoria dos processos do dia a dia.
            </p>
            
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            href="#quem-somos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-pointer"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
