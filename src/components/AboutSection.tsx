import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Soluções criativas e tecnológicas de ponta",
  },
  {
    icon: Target,
    title: "Foco",
    description: "Resultados orientados às necessidades do cliente",
  },
  {
    icon: Rocket,
    title: "Agilidade",
    description: "Entregas rápidas com metodologias ágeis",
  },
  {
    icon: Users,
    title: "Pessoas",
    description: "Compromisso com o bem-estar e experiência",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem <span className="gradient-text">Somos</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos uma empresa de desenvolvimento de software e soluções tecnológicas 
              inovadoras e multissectoriais com foco no bem-estar das pessoas e melhoria 
              no processo do dia a dia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa missão é transformar desafios complexos em soluções digitais elegantes, 
              utilizando as mais modernas tecnologias e metodologias de desenvolvimento.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <span className="text-4xl font-bold gradient-text">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projetos</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold gradient-text">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Anos</p>
              </div>
              <div className="text-center">
                <span className="text-4xl font-bold gradient-text">100%</span>
                <p className="text-sm text-muted-foreground mt-1">Dedicação</p>
              </div>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
