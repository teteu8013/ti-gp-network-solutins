import { Link } from "react-router-dom";
import { Shield, Wifi, Settings, Building, Building2, Truck, Store, ArrowRight, Lock, Eye, Zap, HeadphonesIcon } from "lucide-react";
import { Layout } from "@/components/Layout";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const highlights = [
  { icon: Shield, title: "Segurança", desc: "Proteção completa contra ameaças com firewalls, monitoramento e auditorias de segurança." },
  { icon: Wifi, title: "Disponibilidade", desc: "Infraestrutura redundante com failover automático e SLA garantido para sua operação." },
  { icon: Settings, title: "Soluções Personalizadas", desc: "Projetos sob medida para cada tipo de negócio, do pequeno ao enterprise." },
];

const whyUs = [
  { icon: Lock, title: "Expertise em Segurança", desc: "Anos de experiência protegendo redes corporativas contra ameaças avançadas." },
  { icon: Eye, title: "Monitoramento 24/7", desc: "Acompanhamento contínuo da sua infraestrutura com alertas em tempo real." },
  { icon: Zap, title: "Resposta Rápida", desc: "Time dedicado com SLA de atendimento para incidentes críticos." },
  { icon: HeadphonesIcon, title: "Suporte Dedicado", desc: "Equipe técnica especializada disponível para sua empresa." },
];

const scenarios = [
  { icon: Store, title: "Pequenas Empresas", desc: "Soluções acessíveis com proteção profissional para seu negócio crescer com segurança." },
  { icon: Building, title: "Médias Empresas", desc: "Infraestrutura escalável com redundância e monitoramento contínuo." },
  { icon: Building2, title: "Grandes Empresas", desc: "Arquiteturas complexas com alta disponibilidade, compliance e governança." },
  { icon: Truck, title: "Logística & Transporte", desc: "Conectividade segura entre filiais, centros de distribuição e frota." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="container relative z-10 flex flex-col items-center py-28 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6"
          >
            <Shield className="h-3.5 w-3.5" />
            Segurança & Disponibilidade em Redes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Sua rede protegida e{" "}
            <span className="text-gradient-cyan">sempre disponível</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Consultoria especializada em redes corporativas. Segurança robusta, alta disponibilidade e soluções personalizadas para cada cenário.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex gap-4"
          >
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Fale Conosco <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Nossos Serviços
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <AnimatedCard key={h.title} delay={i * 0.1} className="group rounded-lg border border-border/50 bg-card/50 p-8 transition-all hover:border-primary/30 hover:glow-cyan">
              <h.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="container py-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">
              Por que a <span className="text-gradient-cyan">Haliae</span>?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
              Combinamos expertise técnica com atendimento personalizado para entregar resultados reais.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <AnimatedCard key={w.title} delay={i * 0.1} className="text-center p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <w.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{w.title}</h4>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="container py-20">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-4">
            Cenários que <span className="text-gradient-cyan">atendemos</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Cada negócio tem suas particularidades. Desenvolvemos soluções sob medida para o seu.
          </p>
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((s, i) => (
            <AnimatedCard key={s.title} delay={i * 0.1} className="rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50">
        <AnimatedSection className="container py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para proteger sua <span className="text-gradient-cyan">infraestrutura</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Entre em contato e descubra como a Haliae pode transformar a segurança e disponibilidade da sua rede.
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Fale Conosco <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </section>
    </Layout>
  );
}
