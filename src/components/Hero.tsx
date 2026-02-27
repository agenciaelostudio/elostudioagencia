import { MessageCircle, Play, ChevronDown, Target, Sparkles, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_URL = "https://wa.me/5511966342625?text=Quero%20saber%20mais%20sobre%20os%20criativos";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <p className="text-sm font-semibold tracking-widest mb-4">ELO <span className="gradient-text font-semibold">STUDIO</span></p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          Vídeos e Anúncios que{" "}
          <span className="gradient-text">Lotam Sua Agenda</span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-foreground">
            — com Google e Meta Ads
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-10">
          Produção de vídeos + gestão de tráfego pago para{" "}
          <span className="text-foreground font-medium">
            advogados, dentistas, médicos, clínicas de estética e artistas independentes.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg transition-opacity glow-purple"
          >
            <MessageCircle className="w-5 h-5" />
            Fale no WhatsApp Agora
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 border border-border text-foreground hover:bg-secondary px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            <Play className="w-5 h-5" />
            Ver Modelos de Vídeo
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {[
            { icon: Target, label: "Google & Meta Ads" },
            { icon: Sparkles, label: "Saúde, Direito e Artes" },
            { icon: Globe, label: "Atendimento em SP e Brasil" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-secondary/50 border border-border px-4 py-2 rounded-full text-sm text-muted-foreground"
            >
              <Icon className="w-4 h-4 text-primary" />
              {label}
            </div>
          ))}
        </div>

        <a href="#dores" className="inline-block animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
