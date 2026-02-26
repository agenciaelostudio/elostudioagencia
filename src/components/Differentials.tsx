import { Target, Video, Headphones, BarChart } from "lucide-react";

const diffs = [
  { icon: Target, title: "Foco em Nichos Específicos", desc: "Não somos agência genérica. Entendemos as dores e oportunidades de advogados, dentistas, médicos e artistas." },
  { icon: Video, title: "Vídeo + Tráfego Integrados", desc: "Produzimos o criativo e gerenciamos os anúncios. Tudo conectado para gerar mais resultado." },
  { icon: Headphones, title: "Atendimento Próximo", desc: "Comunicação direta, sem burocracia. Você fala com quem realmente cuida da sua conta." },
  { icon: BarChart, title: "Google & Meta Ads", desc: "Estratégia pensada para as duas maiores plataformas de anúncios. Seus clientes te encontram onde procuram." },
];

const Differentials = () => (
  <section id="diferenciais" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Por que a Elo Studio?</h2>
      <p className="text-center text-muted-foreground mb-16">O que nos diferencia de qualquer outra agência.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {diffs.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card p-6 hover:border-primary/30 transition-colors">
            <Icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
