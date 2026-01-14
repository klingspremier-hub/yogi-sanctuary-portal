import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "In which language is this training taught?",
    answer:
      "The training is taught entirely in English. You do not need to be fluent. A basic understanding of spoken and written English is sufficient, and there is space for questions and clarification throughout the week.",
  },
  {
    question: "Do I need to be a certified yoga teacher to apply?",
    answer:
      "No. This training is open to certified yoga teachers, as well as dedicated practitioners and health or wellness professionals with relevant experience. An application is required to ensure the training is a good fit for you and the group.",
  },
  {
    question: "Is this training suitable for non-teachers or health professionals?",
    answer:
      "Yes. The training is designed for yoga teachers, bodyworkers, therapists, and committed practitioners who wish to deepen their understanding of Yin Yoga, functional anatomy, and the energetic body, whether or not they intend to teach.",
  },
  {
    question: "Can I join if I am pregnant?",
    answer:
      "This training is not recommended during pregnancy. The program includes long practice sessions, extended sitting, and intensive study days, which may not be appropriate or comfortable during pregnancy. We recommend joining at a later time when full participation is possible.",
  },
  {
    question: "Is the training fully Yoga Alliance acknowledged?",
    answer:
      "Yes. Upon successful completion, participants receive a 50-hour Yin Yoga Teacher Training certificate issued by AnneHathaYoga. Anne van Keulen is a Yoga Alliance Continuing Education Provider (YACEP), and the training is Yoga Alliance acknowledged and eligible for Continuing Education (CE) hours.",
  },
  {
    question: "What is the difference between TTC participants and retreat companions?",
    answer:
      "TTC participants attend the full training program, including all theoretical and practical modules. Retreat companions may join the morning and evening practice sessions, meals, and leisure time, but do not participate in training modules and do not receive certification.",
  },
  {
    question: "Can I join part of the program or arrive later?",
    answer:
      "No. To maintain the integrity of the group process and certification requirements, full attendance from start to finish is required for TTC participants.",
  },
  {
    question: "How does the application process work?",
    answer:
      "You submit an application via this page. Applications are personally reviewed. If accepted, you will receive confirmation and payment details to secure your place.",
  },
  {
    question: "Do I need to bring my own yoga mat or props?",
    answer:
      "No. Yoga mats and all necessary props, including bolsters, blankets, and blocks, are provided at the venue. You are welcome to bring your own mat if you prefer.",
  },
  {
    question: "Is travel included?",
    answer:
      "No. Flights and airport transfers are not included. After registration, you will receive a Travel Guide with detailed information on airports, transport options, and recommended taxis or car rentals.",
  },
  {
    question: "Do I need travel insurance?",
    answer:
      "Yes. Personal travel insurance is required, including coverage for health care and trip cancellation. Insurance is not included in the training package.",
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "Cancellation and refund conditions are outlined in our General Terms and Conditions.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 md:py-32 luxury-gradient-light texture-overlay overflow-hidden"
    >
      {/* Decorative elements - hidden on mobile for performance */}
      <div className="glow-orb w-96 h-96 -top-48 -right-48 opacity-30 hidden md:block" />
      <div className="glow-orb w-64 h-64 bottom-20 -left-32 opacity-20 hidden md:block" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <header className="text-center mb-10 md:mb-16 animate-fade-in">
          <span className="text-gold text-[11px] uppercase tracking-editorial font-bold mb-4 md:mb-6 block">
            The Essentials
          </span>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-4 md:mb-6"
          >
            Questions <span className="italic text-gold">& Answers</span>
          </h2>
          <div className="luxury-divider max-w-md mx-auto" />
        </header>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="yin-card-light rounded-lg px-4 md:px-6 border-none"
              >
                <AccordionTrigger className="text-left text-primary font-serif text-base md:text-xl hover:no-underline py-4 md:py-5 [&[data-state=open]]:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-lg pb-4 md:pb-5 leading-relaxed font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="http://yinyogattc.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wide"
          >
            View General Terms & Conditions →
          </a>
          <a
            href="https://yinyogattc.com/#faq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wide"
          >
            View full FAQ →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
