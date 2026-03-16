import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Event images
import workshopEducaRealiaza from "@/assets/events/educa-realiza.png";
import hackathonImg from "@/assets/events/workshop.jpg";
import meetupImg from "@/assets/events/yhankoEduca.jpeg";
import workshopImg from "@/assets/events/workshop.jpg";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  status: "past" | "upcoming";
}

const events: Event[] = [
  {
    id: 1,
    title: "Controle interno dentro das organizações",
    date: "15 Mar 2024",
    location: "Dom Bosco, Sambizanga, Luanda, Angola",
    image: workshopEducaRealiaza,
    status: "past",
  },
  {
    id: 2,
    title: "Workshop YhankoEduca",
    date: "29 Nov 2025",
    location: "Dom Bosco, Sambizanga, Luanda, Angola",
    image: meetupImg,
    status: "past",
  },
  {
    id: 3,
    title: "Workshop YhankoEduca",
    date: "29 Nov 2025",
    location: "Dom Bosco, Sambizanga, Luanda, Angola",
    image: workshopImg,
    status: "past",
  },
];

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="eventos" className="py-16 sm:py-20 md:py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Comunidade
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Nossos <span className="gradient-text">Eventos</span>
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Eventos passados e futuros que conectam a comunidade tech
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Desktop Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 lg:-translate-x-5 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-card border border-border items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 lg:translate-x-5 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-card border border-border items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-5 md:gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] xs:w-[75vw] sm:w-72 md:w-80 lg:w-96"
                >
                  <div className="rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden card-hover group h-full">
                    {/* Image */}
                    <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Status Badge */}
                      <div
                        className={`absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                          event.status === "upcoming"
                            ? "bg-primary/90 text-primary-foreground"
                            : "bg-muted/90 text-muted-foreground"
                        }`}
                      >
                        {event.status === "upcoming" ? "Em breve" : "Realizado"}
                      </div>
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-4 sm:p-5 md:p-6">
                      <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
                          <span className="line-clamp-1">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:hidden">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}