const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} ELO <span className="gradient-text font-semibold">STUDIO</span>. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
