import { UserX, TrendingDown, Eye, Clock } from "lucide-react";

const pains = [
  { icon: UserX, title: "Só vive de indicação?", desc: "Seu consultório ou escritório depende de quem te conhece. Novos clientes não chegam sozinhos." },
  { icon: TrendingDown, title: "Gastou e não voltou", desc: "Já investiu em anúncios mas os leads não apareceram — ou eram desqualificados." },
  { icon: Eye, title: "Sem presença digital", desc: "Seus concorrentes aparecem no Google e Instagram. Você ainda não." },
  { icon: Clock, title: "Sem tempo pra isso", desc: "Você precisa focar nos seus pacientes, clientes ou na sua arte — não em marketing." },
];

const PainPoints = () => (
  <section id="dores" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Você se Identifica com Alguma Dessas Situações?
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        A maioria dos profissionais perde clientes por não ter uma estratégia de anúncios no Google e Meta Ads.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {pains.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card p-6 hover:border-primary/30 transition-colors">
            <Icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-12 text-lg font-semibold gradient-text">
        Nós resolvemos isso com o Método Elo ↓
      </p>
    </div>
  </section>
);

export default PainPoints;
