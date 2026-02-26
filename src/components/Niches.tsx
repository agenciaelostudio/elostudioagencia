import { Scale, Smile, Heart, Music } from "lucide-react";

const niches = [
  { icon: Scale, title: "Advogados", desc: "Atraia clientes para seu escritório com anúncios no Google e Instagram." },
  { icon: Smile, title: "Dentistas", desc: "Preencha sua agenda com pacientes qualificados o mês todo." },
  { icon: Heart, title: "Médicos e Clínicas de Estética", desc: "Destaque seus procedimentos e conquiste novos pacientes." },
  { icon: Music, title: "Artistas e Músicos", desc: "Divulgue seu trabalho, atraia shows e construa sua audiência." },
];

const Niches = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nichos que Atendemos</h2>
      <p className="text-center text-muted-foreground mb-16">Estratégias personalizadas para cada tipo de profissional.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {niches.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Niches;
