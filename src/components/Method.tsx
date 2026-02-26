import { FileText, Camera, Film, BarChart3, Megaphone } from "lucide-react";

const steps = [
  { icon: FileText, step: 1, title: "Roteiro Estratégico", desc: "Baseado em técnicas de copywriting e storytelling. Cada palavra pensada para converter." },
  { icon: Camera, step: 2, title: "Gravação Profissional", desc: "Iluminação cinematográfica, áudio limpo e direção de arte que transmite autoridade." },
  { icon: Film, step: 3, title: "Edição Otimizada", desc: "Hook nos 3s, cortes rápidos, legendas dinâmicas e CTA visual. Pronto para anunciar." },
  { icon: BarChart3, step: 4, title: "Variações A/B", desc: "Múltiplas versões prontas para teste. Descubra o criativo campeão rapidamente." },
  { icon: Megaphone, step: 5, title: "Google & Meta Ads", desc: "Gestão completa das campanhas no Google e Meta Ads. Cada centavo otimizado." },
];

const Method = () => (
  <section id="metodo" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nosso Método Exclusivo para Resultados</h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        Um processo completo: da produção do vídeo à gestão dos anúncios.
      </p>

      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {steps.map(({ icon: Icon, step, title, desc }) => (
          <div key={step} className="glass-card p-6 text-center relative hover:border-primary/30 transition-colors">
            <span className="text-xs font-bold text-primary tracking-wider mb-3 block">Etapa {step}</span>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Method;
