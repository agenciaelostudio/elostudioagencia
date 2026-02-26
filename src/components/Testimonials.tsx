import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Finalmente uma agência que entende meu mercado. Comecei a receber contatos qualificados já na primeira semana.",
    name: "Dr. Rafael M.",
    role: "Advogado Trabalhista",
  },
  {
    text: "O vídeo institucional ficou incrível e os anúncios trouxeram pacientes novos pro consultório. Recomendo demais.",
    name: "Dra. Juliana S.",
    role: "Dentista — Ortodontia",
  },
  {
    text: "Profissionalismo absurdo. Os vídeos me ajudaram a divulgar meu trabalho e atrair shows e eventos.",
    name: "Lucas P.",
    role: "Músico Independente",
  },
];

const Testimonials = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map(({ text, name, role }) => (
          <div key={name} className="glass-card p-8 glow-purple">
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            <p className="text-foreground italic mb-6">"{text}"</p>
            <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
