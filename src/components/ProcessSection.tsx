import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileSearch, GitBranch, Search, Calendar, Palette, Code, TestTube, Rocket, Settings } from "lucide-react";

const phases = [
  { step: 1, name: "Reunião", icon: MessageSquare, description: "Reunião inicial para entender necessidades" },
  { step: 2, name: "Levantamento de Requisitos", icon: FileSearch, description: "Documentação detalhada do projeto" },
  { step: 3, name: "Metodologias Ágeis", icon: GitBranch, description: "Escolha do framework de trabalho" },
  { step: 4, name: "Análise", icon: Search, description: "Estudo de viabilidade e escopo" },
  { step: 5, name: "Planejamento", icon: Calendar, description: "Cronograma e milestones" },
  { step: 6, name: "Design (Projeto)", icon: Palette, description: "UI/UX e arquitetura do sistema" },
  { step: 7, name: "Desenvolvimento", icon: Code, description: "Implementação do código" },
  { step: 8, name: "Testes e Validação", icon: TestTube, description: "QA e garantia de qualidade" },
  { step: 9, name: "Implantação (Deploy)", icon: Rocket, description: "Publicação em produção" },
  { step: 10, name: "Manutenção e Evolução", icon: Settings, description: "Suporte contínuo e melhorias" },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Processo de <span className="gradient-text">Desenvolvimento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa metodologia garante qualidade em cada fase do projeto
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary hidden lg:block" />
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-5 gap-4 mb-8">
            {phases.slice(0, 5).map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 z-10 glow-effect"
                  >
                    <phase.icon className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-xs text-primary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-sm mt-1">{phase.name}</h4>
                    <p className="text-xs text-muted-foreground mt-2">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {phases.slice(5).map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 z-10 glow-effect-pink"
                  >
                    <phase.icon className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-xs text-secondary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-sm mt-1">{phase.name}</h4>
                    <p className="text-xs text-muted-foreground mt-2">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile List */}
          <div className="lg:hidden space-y-4">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${index < 5 ? 'from-primary to-secondary' : 'from-secondary to-primary'} flex items-center justify-center flex-shrink-0`}>
                  <phase.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <span className="text-xs text-primary font-semibold">Fase {phase.step}</span>
                  <h4 className="font-semibold">{phase.name}</h4>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
