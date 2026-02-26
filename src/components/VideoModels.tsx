const models = [
  {
    tag: "Autoridade e confiança",
    title: "Vídeo de Apresentação",
    desc: "Apresente quem você é, sua história e seus diferenciais. Gravado de forma simples e profissional — sem precisar de estúdio ou escritório.",
    badges: ["Advogados", "Dentistas", "Clínicas", "Artistas"],
  },
  {
    tag: "Focado em conversão",
    title: "Anúncio Direto",
    desc: "Vídeo curto (15–30s) com hook forte, oferta clara e CTA direto. Feito para gerar leads no Google e Meta Ads.",
    badges: ["Dentistas", "Clínicas de Estética", "Advogados"],
  },
  {
    tag: "Autoridade e engajamento",
    title: "Conteúdo Educativo",
    desc: "Dicas rápidas do profissional para gerar autoridade nas redes. Ideal para atrair seguidores qualificados e nutrir leads.",
    badges: ["Médicos", "Advogados", "Músicos", "Dentistas"],
  },
];

const VideoModels = () => (
  <section id="portfolio" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Modelos de Vídeo que Geram Resultados</h2>
      <p className="text-center text-muted-foreground mb-16">Cada formato é pensado para uma etapa da jornada do seu cliente.</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {models.map(({ tag, title, desc, badges }) => (
          <div key={title} className="glass-card p-8 hover:border-primary/30 transition-colors">
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">{tag}</span>
            <h3 className="text-xl font-bold mt-2 mb-4">{title}</h3>
            <p className="text-sm text-muted-foreground mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((b) => (
                <span key={b} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VideoModels;
