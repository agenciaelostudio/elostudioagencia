import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso aparecer no vídeo?", a: "Não necessariamente. Temos formatos que funcionam sem a sua presença, mas vídeos com o profissional tendem a converter mais." },
  { q: "Quanto tempo leva pra começar?", a: "Após a aprovação do roteiro, entregamos os primeiros vídeos em até 7 dias úteis. As campanhas sobem junto." },
  { q: "Preciso ter escritório ou clínica bonita?", a: "Não! Gravamos de forma que o fundo não importa — ou usamos cenários virtuais e edição criativa." },
  { q: "Vou receber relatórios?", a: "Sim! Dependendo do pacote, você recebe relatórios semanais ou mensais com todas as métricas das campanhas." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim, sem multa e sem burocracia. Acreditamos que você fica por resultado, não por contrato." },
  { q: "Vocês atendem fora de São Paulo?", a: "Sim! Atendemos todo o Brasil. As gravações podem ser feitas remotamente ou presencialmente em SP." },
];

const FAQ = () => (
  <section className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Perguntas Frequentes</h2>
      <p className="text-center text-muted-foreground mb-12">Tire suas dúvidas antes de falar com a gente.</p>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border-none">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
