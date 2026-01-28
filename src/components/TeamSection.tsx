import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users } from "lucide-react";
import teamGroupPhoto from "@/assets/team/team.png";

const teamMembers =  [
  { id: 1, name: "Romeu Cajamba", role: "Chief Executive Officer",},
  { id: 2, name: "Bruno Paulo", role: "Designer Gráfico",},
  { id: 3, name: "Kalei Diogo", role: "Contabilista Sênior",},
  { id: 4, name: "Joel da Silva", role: "Full Stack Developer",},
  { id: 5, name: "Manuel Malanga", role: "Secretário Geral", },
  { id: 6, name: "Hélio Mendonça", role: "Contabilista Júnior", },
  { id: 7, name: "Osvaldo Pedro", role: "Backend Developer", },
];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Equipe
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Nosso <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conheça os profissionais dedicados que fazem a Yhanko acontecer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Group Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img 
              src={teamGroupPhoto} 
              alt="Equipe Yhanko" 
              className="w-full h-auto object-cover"
            />
            
            {/* Team overlay info */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold text-sm">5 Profissionais</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-card/80 backdrop-blur-sm border border-border rounded-xl px-4 py-3 hover:border-primary/50 transition-colors"
                  >
                    <p className="font-semibold text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}