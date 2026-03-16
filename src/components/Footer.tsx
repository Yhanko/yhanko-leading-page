import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp, MessageCircle } from "lucide-react";

import yhankoLogo from "@/assets/ee 1.svg";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/YhankoTech" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/yhankotech/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/yhanko-corporation/?viewAsMember=true" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/947315059" },
];

const quickLinks = [
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Soluções", href: "#solucoes" },
  { name: "Sectores", href: "#sectores" },
  { name: "Processo", href: "#processo" },
  { name: "FAQ", href: "#faq" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d2jfzul", "template_sl18u6i", e.target, "md-N74Y77bS9eGpsm")
      .then(
        () => {
          toast.success("Inscrição realizada com sucesso 🚀");
          e.target.reset();
        },
        () => {
          toast.error("Alguma coisa aconteceu, se persistir por favor nos contacte!");
        }
      );

    e.target.reset();
  };

  return (
    <footer id="contato" className="relative pt-16 sm:pt-20 md:pt-24 pb-6 sm:pb-8">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main grid: 1 col mobile → 2 col md → 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold gradient-text mb-4 sm:mb-6"
            >
              <img src={yhankoLogo} alt="logotipo yhanko" className="max-w-[140px] sm:max-w-[160px]" />
            </motion.h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base max-w-xs">
              Transformando ideias em soluções digitais inovadoras para um futuro melhor.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  target="_blank"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:pl-2 transition-all text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contato</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm sm:text-base">Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+244947315059"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  +244 947 315 059
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:geral@yhanko.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base break-all"
                >
                  geral@yhanko.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
              Receba novidades e atualizações sobre tecnologia.
            </p>
            <form onSubmit={sendEmail} className="flex flex-col gap-2 sm:gap-3">
              <input
                type="email"
                name="user_email"
                placeholder="Seu e-mail"
                className="px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none transition-colors text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-foreground font-semibold text-sm sm:text-base"
              >
                Inscrever
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Yhanko. Todos os direitos reservados.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}