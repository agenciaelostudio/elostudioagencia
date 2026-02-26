import { Check, MessageCircle } from "lucide-react";

const packages = [
  {
    name: "Pacote Início",
    price: "R$ 1.000/mês",
    budget: "Verba sugerida: R$ 1.000 a R$ 2.000/mês",
    features: [
      "Gestão de anúncios no Instagram/Facebook e Google",
      "4 a 6 vídeos para anúncios (15–30s)",
      "Leads direto no seu WhatsApp",
      "Relatório mensal simples",
      "Instagram orgânico opcional (3 posts/semana)",
    ],
    cta: "Ideal para quem quer começar a atrair clientes sem gastar muito.",
    popular: false,
  },
  {
    name: "Pacote Crescimento",
    price: "R$ 1.800 – 2.200/mês",
    budget: "Verba sugerida: R$ 2.000 a R$ 4.000/mês",
    features: [
      "Tudo do Pacote Início",
      "Mais testes A/B nos anúncios",
      "8 a 10 vídeos e criativos por mês",
      "Ajustes semanais nas campanhas",
      "Relatório semanal curto",
      "Instagram orgânico opcional (3 posts/semana)",
    ],
    cta: "Ideal para quem já viu resultado e quer encher a agenda mais rápido.",
    popular: true,
  },
  {
    name: "Pacote Personalizado",
    price: "A partir de R$ 2.500 (sob consulta)",
    budget: "Verba sugerida: R$ 4.000+/mês",
    features: [
      "Tudo do Pacote Crescimento",
      "Mais volume de vídeos e campanhas",
      "Call rápida semanal de acompanhamento",
      "Instagram orgânico (máx. 3 posts/semana)",
    ],
    cta: "Para quem quer escalar de verdade e ter resultados maiores.",
    popular: false,
  },
];

const WHATSAPP_BASE = "https://wa.me/5511922029387?text=Quero%20o%20pacote%20";

const Pricing = () => (
  <section id="pacotes" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Pacotes</h2>
      <p className="text-center text-muted-foreground mb-16">Planos pensados para cada fase do seu negócio.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`glass-card p-8 relative ${pkg.popular ? "border-primary glow-purple" : ""}`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                MAIS POPULAR
              </span>
            )}
            <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
            <p className="text-2xl font-bold gradient-text mb-1">{pkg.price}</p>
            <p className="text-xs text-muted-foreground mb-6">{pkg.budget}</p>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground mb-6 italic">{pkg.cta}</p>

            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent(pkg.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              Quero Esse Pacote
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
