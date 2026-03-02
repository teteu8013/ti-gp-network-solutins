import { Layout } from "@/components/Layout";
import { Download } from "lucide-react";

const posts = [
  { file: "/posts/post-01-seguranca.jpg", title: "Segurança de Ponta a Ponta", caption: "🔒 Sua rede protegida em todas as camadas. Firewalls, políticas de acesso e monitoramento integrados. #Cibersegurança #RedeSegura #Haliae" },
  { file: "/posts/post-02-disponibilidade.jpg", title: "Alta Disponibilidade", caption: "⚡ Sua operação nunca para. Redundância ativa, balanceamento de carga e failover automático. #AltaDisponibilidade #Infraestrutura #Haliae" },
  { file: "/posts/post-03-firewall.jpg", title: "Firewall de Próxima Geração", caption: "🛡️ Proteção avançada com inspeção profunda de pacotes e prevenção de intrusão. #Firewall #NGFW #SegurançaDeRede" },
  { file: "/posts/post-04-monitoramento.jpg", title: "Monitoramento 24/7", caption: "📊 Visibilidade total da sua rede. Dashboards em tempo real e alertas inteligentes. #NOC #Monitoramento #Haliae" },
  { file: "/posts/post-05-pentest.jpg", title: "Pentest & Auditoria", caption: "🐛 Encontramos as brechas antes dos hackers. Testes de intrusão e auditoria completa. #Pentest #EthicalHacking #Haliae" },
  { file: "/posts/post-06-sdwan.jpg", title: "SD-WAN & Conectividade", caption: "☁️ Conecte filiais com inteligência. SD-WAN para performance e economia. #SDWAN #Networking #Haliae" },
  { file: "/posts/post-07-failover.jpg", title: "Redundância & Failover", caption: "🔄 Zero downtime. Comutação automática e transparente entre links e equipamentos. #Failover #Redundância #Haliae" },
  { file: "/posts/post-08-pme.jpg", title: "Soluções para PMEs", caption: "🏢 Infraestrutura profissional com custo acessível. Rede corporativa para empresas de todos os tamanhos. #PME #TI #Haliae" },
  { file: "/posts/post-09-logistica.jpg", title: "Logística Conectada", caption: "🚛 Conectividade robusta entre filiais e operações de campo. IoT, VPN e rastreamento de frota. #Logística #IoT #Haliae" },
  { file: "/posts/post-10-parceria.jpg", title: "Parceiro Estratégico em TI", caption: "🤝 Mais que fornecedores, somos extensão da sua equipe de TI. #Parceria #Consultoria #Haliae" },
];

export default function Posts() {
  const handleDownload = (file: string, title: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = `haliae-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
    link.click();
  };

  return (
    <Layout>
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-2 text-center">Posts para <span className="text-gradient-cyan">Instagram</span></h1>
        <p className="text-muted-foreground text-center mb-10">Clique no botão para baixar cada imagem. As legendas sugeridas estão abaixo de cada post.</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <div key={p.file} className="rounded-lg border border-border/50 bg-card/50 overflow-hidden">
              <img src={p.file} alt={p.title} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{p.caption}</p>
                <button
                  onClick={() => handleDownload(p.file, p.title)}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <Download className="h-3.5 w-3.5" /> Baixar Imagem
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
