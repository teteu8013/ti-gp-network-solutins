import { Layout } from "@/components/Layout";
import { Shield, Radar, Search, Bug, Server, RefreshCw, Clock, Store, Building, Building2, Truck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const security = [
  { icon: Shield, title: "Firewall & Políticas", desc: "Configuração e gestão de firewalls com políticas de segurança granulares para bloquear ameaças antes que alcancem sua rede." },
  { icon: Radar, title: "Monitoramento Contínuo", desc: "Vigilância 24/7 com detecção de anomalias, alertas em tempo real e dashboards de visibilidade completa." },
  { icon: Search, title: "Auditoria de Segurança", desc: "Análise profunda da sua infraestrutura para identificar vulnerabilidades e gaps de conformidade." },
  { icon: Bug, title: "Pentest & Testes", desc: "Simulações de ataque controladas para validar a resiliência da sua rede contra ameaças reais." },
];

const availability = [
  { icon: Server, title: "Redundância", desc: "Arquiteturas com múltiplos caminhos e equipamentos redundantes para eliminar pontos únicos de falha." },
  { icon: RefreshCw, title: "Failover Automático", desc: "Comutação instantânea entre links e equipamentos para zero downtime em caso de falhas." },
  { icon: Clock, title: "SLA Garantido", desc: "Acordos de nível de serviço com métricas claras de disponibilidade, tempo de resposta e resolução." },
];

const bySize = [
  { icon: Store, title: "PME", desc: "Soluções compactas e acessíveis: firewall gerenciado, VPN segura, backup de configurações e suporte remoto." },
  { icon: Building, title: "Médias Empresas", desc: "Segmentação de rede, monitoramento SIEM, políticas de acesso avançadas e redundância de links." },
  { icon: Building2, title: "Grandes Empresas", desc: "Arquiteturas multi-site, SD-WAN, compliance (LGPD, ISO 27001), NOC dedicado e governança de rede." },
  { icon: Truck, title: "Logística", desc: "Conectividade entre filiais e CDs, redes para rastreamento de frota, VPNs site-to-site e alta disponibilidade em campo." },
];

function ServiceSection({ title, items, id }: { title: string; items: typeof security; id: string }) {
  return (
    <section id={id} className="py-16">
      <h2 className="text-2xl font-bold mb-8 text-gradient-cyan inline-block">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((s) => (
          <div key={s.title} className="rounded-lg border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/30">
            <s.icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Servicos() {
  return (
    <Layout>
      <div className="container">
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos <span className="text-gradient-cyan">Serviços</span></h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Soluções completas em segurança e disponibilidade de redes, adaptadas ao porte e necessidade de cada cliente.
          </p>
        </div>

        <ServiceSection title="Segurança de Redes" items={security} id="seguranca" />
        <ServiceSection title="Alta Disponibilidade" items={availability} id="disponibilidade" />
        <ServiceSection title="Soluções por Porte" items={bySize} id="porte" />

        <div className="py-16 text-center border-t border-border/50">
          <h2 className="text-2xl font-bold mb-4">Não encontrou o que precisa?</h2>
          <p className="text-muted-foreground mb-6">Cada projeto é único. Fale conosco para uma solução sob medida.</p>
          <Link to="/contato" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all">
            Fale Conosco <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
