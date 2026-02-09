import { Layout } from "@/components/Layout";
import { Shield, Lightbulb, Users, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Segurança", desc: "Proteger dados e infraestruturas é o nosso compromisso número um." },
  { icon: Lightbulb, title: "Inovação", desc: "Buscamos constantemente as melhores tecnologias e práticas do mercado." },
  { icon: Users, title: "Personalização", desc: "Cada cliente é único — nossas soluções também são." },
  { icon: Target, title: "Resultado", desc: "Foco em entregar valor mensurável e impacto real no negócio." },
];

export default function Sobre() {
  return (
    <Layout>
      <div className="container">
        {/* Hero */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre a <span className="text-gradient-cyan">Haliae</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Somos uma consultoria especializada em redes corporativas, unindo segurança, disponibilidade e soluções personalizadas para empresas de todos os portes.
          </p>
        </section>

        {/* Mission */}
        <section className="py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border/50 bg-card/50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient-cyan inline-block">Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                Garantir que a infraestrutura de rede dos nossos clientes seja segura, resiliente e alinhada aos objetivos do negócio. 
                Acreditamos que tecnologia de qualidade deve ser acessível a empresas de todos os tamanhos.
              </p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient-cyan inline-block">Nossa História</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fundada por profissionais com ampla experiência em infraestrutura e segurança de redes, a Haliae nasceu da necessidade de oferecer 
                consultoria de alto nível com atendimento próximo e personalizado, algo raro no mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos <span className="text-gradient-cyan">Valores</span></h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-lg border border-border/50 bg-card/50">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team placeholder */}
        <section className="py-12 border-t border-border/50">
          <h2 className="text-3xl font-bold text-center mb-10">Nossa <span className="text-gradient-cyan">Equipe</span></h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {["Especialista em Segurança", "Engenheiro de Redes", "Consultor de Infraestrutura"].map((role) => (
              <div key={role} className="text-center p-6 rounded-lg border border-border/50 bg-card/50">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h4 className="font-semibold mb-1">Profissional Haliae</h4>
                <p className="text-sm text-primary">{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
