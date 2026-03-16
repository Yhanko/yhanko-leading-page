import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um software?",
    answer: "O tempo varia conforme a complexidade do projeto. Um MVP pode levar de 2 a 4 meses, enquanto sistemas mais complexos podem levar 6 meses ou mais. Fazemos uma análise detalhada para fornecer estimativas precisas.",
  },
  {
    question: "Quais tecnologias vocês utilizam?",
    answer: "Trabalhamos com as tecnologias mais modernas do mercado: React, Node.js, Python, TypeScript, Flutter, PostgreSQL, MongoDB, AWS, entre outras. Escolhemos a stack ideal para cada projeto.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! Oferecemos planos de manutenção e suporte contínuo para garantir que seu software funcione perfeitamente. Isso inclui correções, atualizações e melhorias evolutivas.",
  },
  {
    question: "Como funciona o processo de pagamento?",
    answer: "Trabalhamos com marcos de pagamento alinhados às entregas do projeto. Geralmente dividimos em: sinal inicial, entregas intermediárias e pagamento final na conclusão.",
  },
  {
    question: "Posso acompanhar o desenvolvimento do projeto?",
    answer: "Absolutamente! Utilizamos metodologias ágeis com sprints semanais e reuniões de acompanhamento. Você terá acesso a um ambiente de homologação para ver o progresso em tempo real.",
  },
  {
    question: "A Yhanko desenvolve aplicativos mobile?",
    answer: "Sim, desenvolvemos aplicativos nativos para iOS e Android, além de soluções híbridas com Flutter e React Native que funcionam em ambas as plataformas.",
  },
  {
    question: "Como funciona a academia da Yhanko?",
    answer: "O aluno escolhe a tecnologia que quer ou está a aprender, é lhe direcionado às aulas que ele precisará, semanalmente recebe desafio entre outras informações, no final de semana reunem para apresetação dos desafios, colaboram entre alunos em projetos reais e têm oportunidade de falar com pofissionais de diversas áreas.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl bg-card border border-border px-4 sm:px-6 data-[state=open]:glow-effect transition-all"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 sm:py-5 md:py-6 text-sm sm:text-base gap-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}