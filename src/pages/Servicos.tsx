import { Layout } from "@/components/Layout";
import { Shield, Radar, Search, Bug, Server, RefreshCw, Clock, Store, Building, Building2, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import logo from "@/assets/haliae-logo.png";

const security = [
  { icon: Shield, title: "Firewall & Políticas de Acesso", desc: "Implementamos e gerenciamos firewalls de próxima geração com regras de acesso granulares, segmentação por zonas de confiança, inspeção profunda de pacotes (DPI) e proteção contra intrusão (IPS), blindando cada camada da sua rede." },
  { icon: Radar, title: "Monitoramento e Visibilidade", desc: "Implantamos plataformas de monitoramento com dashboards em tempo real, análise de tráfego, detecção de anomalias comportamentais e alertas inteligentes — proporcionando visibilidade total sobre a saúde e segurança da sua infraestrutura." },
  { icon: Search, title: "Auditoria e Conformidade", desc: "Realizamos análises completas do seu ambiente de rede para identificar vulnerabilidades, gaps de configuração e pontos de não conformidade com frameworks como LGPD, ISO 27001 e NIST, entregando relatórios detalhados com planos de ação." },
  { icon: Bug, title: "Testes de Intrusão (Pentest)", desc: "Executamos simulações controladas de ataques para validar a eficácia das suas defesas, identificando brechas exploráveis antes que agentes maliciosos o façam. Relatórios técnicos e executivos com recomendações práticas." },
];

const availability = [
  { icon: Server, title: "Arquitetura Redundante", desc: "Projetamos topologias de rede com caminhos alternativos, equipamentos em cluster e links diversificados, eliminando pontos únicos de falha e garantindo continuidade operacional mesmo em cenários de crise." },
  { icon: RefreshCw, title: "Failover e Balanceamento", desc: "Configuramos mecanismos de comutação automática entre links, switches e roteadores com protocolos como VRRP, HSRP e LACP, garantindo transição transparente e sem interrupção para os usuários." },
  { icon: Clock, title: "SLA e Gestão de Capacidade", desc: "Definimos e monitoramos indicadores de desempenho (KPIs) com SLAs formalizados, relatórios de disponibilidade, análise de tendências de consumo e planejamento de capacidade para antecipar necessidades de expansão." },
];

const bySize = [
  { icon: Store, title: "Pequenas Empresas", desc: "Infraestrutura profissional dimensionada para o seu momento: firewall gerenciado, Wi-Fi corporativo seguro, VPN para trabalho remoto, backup de configurações e suporte técnico contínuo com custo previsível." },
  { icon: Building, title: "Médias Empresas", desc: "Redes segmentadas com VLANs, switches gerenciáveis em stack, monitoramento centralizado via SNMP/NetFlow, links redundantes com balanceamento, políticas de QoS e gestão completa de ativos de rede." },
  { icon: Building2, title: "Grandes Corporações", desc: "Projetos de alta complexidade com SD-WAN, interconexão de data centers, redes definidas por software (SDN), compliance regulatório, NOC 24/7 com escalonamento e governança de rede com processos ITIL." },
  { icon: Truck, title: "Logística & Transporte", desc: "Conectividade robusta entre filiais, centros de distribuição e operações móveis, com VPNs site-to-site, redes dedicadas para rastreamento de frota (IoT), Wi-Fi industrial e alta disponibilidade em ambientes geograficamente distribuídos." },
];

function ServiceSection({ title, items, id }: { title: string; items: typeof security; id: string }) {
  return (
    <section id={id} className="py-16">
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-8 text-gradient-cyan inline-block">{title}</h2>
      </AnimatedSection>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((s, i) => (
          <AnimatedCard key={s.title} delay={i * 0.1} className="rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30">
            <s.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}

export default function Servicos() {
  return (
    <Layout>
      <div className="container">
        <AnimatedSection className="py-16 text-center">
          <img src={logo} alt="Haliae" className="h-16 w-16 mx-auto mb-6 opacity-80 object-contain rounded-full drop-shadow-[0_0_10px_hsl(190,90%,50%,0.3)]" />
          <h1 className="text-4xl font-bold mb-4">Nossos <span className="text-gradient-cyan">Serviços</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Do planejamento à operação, oferecemos um portfólio completo de serviços em infraestrutura de rede — com foco em segurança, disponibilidade e gestão eficiente para empresas de todos os portes.
          </p>
        </AnimatedSection>

        <ServiceSection title="Segurança de Redes" items={security} id="seguranca" />
        <ServiceSection title="Alta Disponibilidade" items={availability} id="disponibilidade" />
        <ServiceSection title="Soluções por Porte" items={bySize} id="porte" />

        <AnimatedSection className="py-16 text-center border-t border-border/50">
          <h2 className="text-2xl font-bold mb-4">Precisa de algo específico?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">Cada ambiente tem suas particularidades. Nossa equipe analisa seu cenário e projeta a solução ideal, seja uma consultoria pontual ou uma gestão contínua da sua infraestrutura.</p>
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all">
            Fale Conosco <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </Layout>
  );
}
