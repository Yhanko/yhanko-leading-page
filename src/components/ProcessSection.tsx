import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageSquare, FileSearch, GitBranch, Search, Calendar, Palette, Code, TestTube, Rocket, Settings } from "lucide-react";

const phases = [
  { step: 1, name: "Conversa com Cliente", icon: MessageSquare, description: "Reunião inicial para entender necessidades" },
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
    <section id="processo" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Metodologia
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Processo de <span className="gradient-text">Desenvolvimento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            Nossa metodologia garante qualidade em cada fase do projeto
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">

          {/* Desktop Grid (lg+) — two rows of 5 */}
          <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-6 mb-8 xl:mb-10">
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
                    className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center mb-3 xl:mb-4 z-10 glow-effect"
                  >
                    <phase.icon className="w-6 h-6 xl:w-7 xl:h-7 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-xs text-primary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-xs xl:text-sm mt-1">{phase.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 xl:mt-2">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-4 xl:gap-6">
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
                    className="w-14 h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center mb-3 xl:mb-4 z-10 glow-effect-pink"
                  >
                    <phase.icon className="w-6 h-6 xl:w-7 xl:h-7 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-xs text-secondary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-xs xl:text-sm mt-1">{phase.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 xl:mt-2">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tablet Grid (sm–md) — two rows of 5 compact */}
          <div className="hidden sm:grid lg:hidden grid-cols-5 gap-3 mb-6">
            {phases.slice(0, 5).map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mb-2 z-10 glow-effect"
                  >
                    <phase.icon className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-[10px] text-primary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-[10px] md:text-xs mt-0.5 leading-tight">{phase.name}</h4>
                    <p className="text-[10px] text-muted-foreground mt-1 hidden md:block">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden sm:grid lg:hidden grid-cols-5 gap-3">
            {phases.slice(5).map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-11 h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mb-2 z-10 glow-effect-pink"
                  >
                    <phase.icon className="w-5 h-5 text-foreground" />
                  </motion.div>
                  <div className="text-center">
                    <span className="text-[10px] text-secondary font-semibold">Fase {phase.step}</span>
                    <h4 className="font-semibold text-[10px] md:text-xs mt-0.5 leading-tight">{phase.name}</h4>
                    <p className="text-[10px] text-muted-foreground mt-1 hidden md:block">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile List (xs only) */}
          <div className="sm:hidden space-y-3">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
              >
                <div className={`w-10 h-10 rounded-xl ${index < 5 ? 'from-primary to-secondary' : 'from-secondary to-primary'} flex items-center justify-center flex-shrink-0`}>
                  <phase.icon className="w-5 h-5 text-foreground" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-primary font-semibold">Fase {phase.step}</span>
                  <h4 className="font-semibold text-sm leading-tight">{phase.name}</h4>
                  <p className="text-xs text-muted-foreground">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}