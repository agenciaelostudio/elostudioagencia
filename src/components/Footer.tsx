import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <p className="text-lg font-bold">
          ELO <span className="gradient-text font-bold">STUDIO</span>
        </p>
        <p className="text-sm text-muted-foreground max-w-md">
          Produção de vídeos e gestão de tráfego pago para profissionais que querem lotar a agenda.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
          <a href="tel:+5511966342625" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            (11) 96634-2625
          </a>
          <a href="mailto:agenciaelostudio@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            agenciaelostudio@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} ELO <span className="gradient-text font-semibold">STUDIO</span>. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
