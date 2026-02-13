import { Link } from "react-router-dom";
import { Shield, Wifi, Settings, Building, Building2, Truck, Store, ArrowRight, Lock, Eye, Zap, HeadphonesIcon } from "lucide-react";
import { Layout } from "@/components/Layout";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Shield, title: "Segurança de Ponta a Ponta", desc: "Projetamos e implementamos camadas de proteção integradas — desde firewalls de próxima geração até políticas de acesso granulares — garantindo que cada ponto da sua rede esteja blindado contra ameaças internas e externas." },
  { icon: Wifi, title: "Alta Disponibilidade", desc: "Desenhamos arquiteturas de rede com redundância ativa, balanceamento de carga e failover automático, assegurando que sua operação nunca pare, mesmo diante de falhas de hardware ou links." },
  { icon: Settings, title: "Projetos Sob Medida", desc: "Cada empresa tem uma realidade única. Analisamos seu ambiente, mapeamos necessidades e entregamos um projeto de infraestrutura dimensionado para o seu momento atual e preparado para o crescimento futuro." },
];

const whyUs = [
  { icon: Lock, title: "Planejamento Estratégico", desc: "Não vendemos equipamentos — planejamos. Cada projeto nasce de uma análise profunda do seu ambiente, objetivos de negócio e requisitos de conformidade, resultando em uma arquitetura sólida e documentada." },
  { icon: Eye, title: "Monitoramento Proativo", desc: "Implementamos soluções de monitoramento com visibilidade completa: tráfego, desempenho, saúde dos dispositivos e detecção de anomalias em tempo real, antecipando problemas antes que impactem sua operação." },
  { icon: Zap, title: "Gerência e Operação", desc: "Assumimos a gestão da sua infraestrutura de rede com processos ITIL, controle de mudanças, inventário atualizado e relatórios periódicos de performance e capacidade." },
  { icon: HeadphonesIcon, title: "Suporte Especializado", desc: "Equipe técnica certificada com experiência em ambientes críticos, disponível para atuar em incidentes, mudanças programadas e evolução contínua do seu ambiente." },
];

const scenarios = [
  { icon: Store, title: "Pequenas Empresas", desc: "Infraestrutura profissional com custo acessível: firewall gerenciado, Wi-Fi corporativo seguro, VPN para trabalho remoto e backup de configurações com suporte técnico contínuo." },
  { icon: Building, title: "Médias Empresas", desc: "Redes segmentadas com VLANs, monitoramento centralizado, links redundantes, políticas de QoS e gestão de ativos de rede para suportar o crescimento sustentável." },
  { icon: Building2, title: "Grandes Corporações", desc: "Projetos multi-site com SD-WAN, data centers interconectados, compliance regulatório (LGPD, ISO 27001), NOC dedicado e governança completa de rede." },
  { icon: Truck, title: "Logística & Transporte", desc: "Conectividade confiável entre filiais, centros de distribuição e operações em campo, com VPNs site-to-site, redes para rastreamento de frota e alta disponibilidade em ambientes distribuídos." },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="container relative z-10 flex flex-col items-center py-28 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6"
          >
            <Shield className="h-3.5 w-3.5" />
            Consultoria & Tecnologia em Infraestrutura de Redes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Planejamento, segurança e{" "}
            <span className="text-gradient-cyan">gestão de redes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Somos especialistas em projetar, implementar e gerenciar infraestruturas de rede corporativas. Do planejamento à operação, garantimos segurança, alta disponibilidade e performance para o seu negócio.
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
              Por que escolher a <span className="text-gradient-cyan">Haliae</span>?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Mais do que fornecedores, somos parceiros estratégicos. Atuamos desde o levantamento de requisitos até a operação contínua, com foco em resultados mensuráveis e evolução constante do seu ambiente.
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
              Soluções para cada <span className="text-gradient-cyan">cenário</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Independente do porte ou segmento, dimensionamos o projeto ideal para a sua realidade — com escalabilidade para acompanhar o crescimento do seu negócio.
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
            Vamos planejar a <span className="text-gradient-cyan">sua rede</span> juntos?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Conte com a Haliae para desenhar, implementar e gerenciar a infraestrutura de rede que o seu negócio precisa. Fale com nossos especialistas e receba uma proposta personalizada.
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
