"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqData = [
  {
    question: "O que torna seus produtos sustentáveis?",
    answer: "Todos os nossos produtos são obtidos de materiais certificados sustentáveis e produzidos por artesãos que seguem práticas ecológicas. Priorizamos ingredientes orgânicos, embalagens recicladas e métodos de envio carbono neutro."
  },
  {
    question: "Como vocês garantem práticas de comércio justo?",
    answer: "Trabalhamos diretamente com cooperativas de artesãos e pequenas empresas, garantindo salários justos e condições de trabalho seguras. Cada produto vem com um certificado de autenticidade e informações sobre o artesão que o criou."
  },
  {
    question: "Qual é a política de devolução?",
    answer: "Oferecemos uma garantia de satisfação de 30 dias. Se não estiver completamente satisfeito com sua compra, pode devolvê-la para reembolso total ou troca. Todos os itens devolvidos são doados para instituições locais ou reciclados de forma responsável."
  },
  {
    question: "Vocês fazem envios internacionais?",
    answer: "Sim, enviamos para mais de 50 países ao redor do mundo. Custos de envio e prazos de entrega variam por localização. Usamos métodos de envio carbono neutro e materiais de embalagem biodegradáveis para todos os pedidos internacionais."
  },
  {
    question: "Como posso rastrear meu pedido?",
    answer: "Assim que seu pedido for enviado, você receberá um número de rastreamento por email. Também pode fazer login em sua conta para ver atualizações em tempo real sobre o status do pedido e data estimada de entrega."
  },
  {
    question: "Seus produtos são adequados para peles sensíveis?",
    answer: "Nossos produtos de cuidados com a pele e cosméticos são formulados com ingredientes naturais e hipoalergênicos. No entanto, recomendamos verificar a lista de ingredientes e fazer um teste de sensibilidade se você tem pele muito sensível ou alergias específicas."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que você precisa saber sobre nosso marketplace sustentável
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-card-border rounded-2xl px-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Ainda tem dúvidas? Estamos aqui para ajudar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                Contatar Suporte →
              </Link>
              <span className="hidden sm:block text-muted-foreground">|</span>
              <Link 
                href="/chat" 
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                Chat ao Vivo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;