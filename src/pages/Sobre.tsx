import { Layout } from "@/components/Layout";
import { Shield, Lightbulb, Users, Target } from "lucide-react";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";
import logo from "@/assets/haliae-logo.png";

const values = [
  { icon: Shield, title: "Segurança", desc: "A proteção da infraestrutura e dos dados dos nossos clientes é inegociável. Cada decisão técnica é tomada com segurança como prioridade." },
  { icon: Lightbulb, title: "Inovação", desc: "Acompanhamos a evolução do mercado para trazer as melhores tecnologias e práticas, garantindo que nossos clientes estejam sempre à frente." },
  { icon: Users, title: "Parceria", desc: "Não somos apenas fornecedores — somos uma extensão da equipe de TI dos nossos clientes, com envolvimento genuíno em cada projeto." },
  { icon: Target, title: "Resultado", desc: "Trabalhamos orientados por métricas e indicadores. Cada projeto tem objetivos claros, prazos definidos e entregáveis mensuráveis." },
];

export default function Sobre() {
  return (
    <Layout>
      <div className="container">
        <AnimatedSection className="py-16 text-center">
          <img src={logo} alt="Haliae" className="h-16 w-16 mx-auto mb-6 opacity-80 object-contain rounded-full drop-shadow-[0_0_10px_hsl(190,90%,50%,0.3)]" />
          <h1 className="text-4xl font-bold mb-4">Sobre a <span className="text-gradient-cyan">Haliae</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos uma empresa de consultoria e tecnologia especializada no planejamento, implementação e gestão de infraestruturas de rede corporativas. Atuamos como parceiros estratégicos dos nossos clientes, garantindo ambientes seguros, disponíveis e preparados para o crescimento.
          </p>
        </AnimatedSection>

        <section className="py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedCard delay={0} className="rounded-lg border border-border/50 bg-card/50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient-cyan inline-block">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Planejar, projetar e gerenciar infraestruturas de rede que sejam seguras, resilientes e perfeitamente alinhadas aos objetivos de negócio dos nossos clientes. Acreditamos que toda empresa — independente do porte — merece uma rede corporativa robusta, bem documentada e gerenciada com excelência.
              </p>
            </AnimatedCard>
            <AnimatedCard delay={0.1} className="rounded-lg border border-border/50 bg-card/50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient-cyan inline-block">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed">
                A Haliae nasceu da experiência de profissionais que atuaram por anos em projetos críticos de infraestrutura de rede em empresas de diversos segmentos. Identificamos uma lacuna no mercado: a falta de consultorias que combinassem profundidade técnica com atendimento próximo e personalizado. Desde então, ajudamos dezenas de empresas a transformar suas redes em ativos estratégicos.
              </p>
            </AnimatedCard>
          </div>
        </section>

        <section className="py-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-10">Nossos <span className="text-gradient-cyan">Valores</span></h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedCard key={v.title} delay={i * 0.1} className="text-center p-6 rounded-lg border border-border/50 bg-card/50">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-border/50">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-10">Nossa <span className="text-gradient-cyan">Equipe</span></h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {["Especialista em Segurança", "Engenheiro de Redes", "Consultor de Infraestrutura"].map((role, i) => (
              <AnimatedCard key={role} delay={i * 0.1} className="text-center p-6 rounded-lg border border-border/50 bg-card/50">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-semibold mb-1">Profissional Haliae</h4>
                <p className="text-sm text-primary">{role}</p>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
