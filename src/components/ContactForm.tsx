import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", nicho: "", orcamento: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome}. WhatsApp: ${form.whatsapp}. Nicho: ${form.nicho}. Orçamento: ${form.orcamento}`;
    window.open(`https://wa.me/5511922029387?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Pronto para Anúncios que Vendem de Verdade?
        </h2>
        <p className="text-center text-muted-foreground mb-2">
          Preencha o formulário e receba um diagnóstico gratuito dos seus criativos.
        </p>
        <p className="text-center text-sm text-primary font-semibold mb-10">
          Vagas limitadas — Atendemos apenas 8 clientes por mês
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">WhatsApp</label>
            <input
              type="tel"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="(11) 99999-9999"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nicho do Negócio</label>
            <input
              type="text"
              required
              value={form.nicho}
              onChange={(e) => setForm({ ...form, nicho: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Ex: Dentista, Advogado..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Orçamento Mensal em Tráfego (aprox.)</label>
            <select
              required
              value={form.orcamento}
              onChange={(e) => setForm({ ...form, orcamento: e.target.value })}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Selecione...</option>
              <option value="Até R$ 2.000">Até R$ 2.000</option>
              <option value="R$ 2.000 - R$ 4.000">R$ 2.000 - R$ 4.000</option>
              <option value="Acima de R$ 4.000">Acima de R$ 4.000</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity glow-purple"
          >
            <Send className="w-5 h-5" />
            Enviar Diagnóstico Gratuito
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
