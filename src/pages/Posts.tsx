import { Layout } from "@/components/Layout";
import { Download } from "lucide-react";

const posts = [
  { file: "/posts/post-01-seguranca.jpg", title: "Segurança de Ponta a Ponta", caption: "🔒 Segurança não é luxo — é necessidade.\n\nNa Haliae, protegemos sua rede em todas as camadas: firewalls de última geração, políticas de acesso rigorosas, criptografia de dados e monitoramento contínuo.\n\nNão espere um incidente para agir. Fale com nossos especialistas e blindem sua operação hoje mesmo.\n\n#Cibersegurança #RedeSegura #SegurançaDaInformação #Firewall #ProteçãoDeDados #TI #Haliae #InfraestruturaDeTI" },
  { file: "/posts/post-02-disponibilidade.jpg", title: "Alta Disponibilidade", caption: "⚡ Quanto custa 1 hora da sua empresa parada?\n\nCom as soluções de Alta Disponibilidade da Haliae, sua operação nunca para. Trabalhamos com redundância ativa, balanceamento de carga inteligente e failover automático para garantir uptime máximo.\n\nSua empresa funcionando 24/7, sem surpresas.\n\n#AltaDisponibilidade #Uptime #Infraestrutura #TICorporativa #Redundância #Haliae #ContinuidadeDeNegócios #SemDowntime" },
  { file: "/posts/post-03-firewall.jpg", title: "Firewall de Próxima Geração", caption: "🛡️ Seu firewall ainda é do século passado?\n\nOs firewalls de próxima geração (NGFW) da Haliae oferecem inspeção profunda de pacotes, prevenção contra intrusão (IPS), controle de aplicações e filtragem avançada de conteúdo.\n\nProteção inteligente que acompanha a evolução das ameaças.\n\n#Firewall #NGFW #SegurançaDeRede #IPS #CyberSecurity #Haliae #ProteçãoAvançada #TI" },
  { file: "/posts/post-04-monitoramento.jpg", title: "Monitoramento 24/7", caption: "📊 Você sabe o que está acontecendo na sua rede agora?\n\nCom o monitoramento 24/7 da Haliae, você tem visibilidade total: dashboards em tempo real, alertas inteligentes, análise de performance e detecção proativa de falhas.\n\nProblemas resolvidos antes mesmo de impactarem seu negócio.\n\n#NOC #Monitoramento #Monitoramento24x7 #GestãoDeRede #Haliae #Dashboard #AlertasInteligentes #TICorporativa" },
  { file: "/posts/post-05-pentest.jpg", title: "Pentest & Auditoria", caption: "🐛 Hackers não avisam quando vão atacar. Mas nós encontramos as brechas antes deles.\n\nNossos serviços de Pentest e Auditoria de Segurança simulam ataques reais para identificar vulnerabilidades na sua infraestrutura, aplicações e processos.\n\nRelatórios detalhados + plano de correção. Segurança de verdade.\n\n#Pentest #EthicalHacking #TesteDeIntrusão #AuditoriaDeTI #Vulnerabilidades #Haliae #SegurançaOfensiva #CyberSec" },
  { file: "/posts/post-06-sdwan.jpg", title: "SD-WAN & Conectividade", caption: "☁️ Filiais conectadas com inteligência e economia.\n\nA tecnologia SD-WAN da Haliae otimiza sua rede WAN com roteamento inteligente, priorização de tráfego e redução de custos com links dedicados.\n\nPerformance de ponta para operações distribuídas, com gestão centralizada e visibilidade total.\n\n#SDWAN #Networking #RedeWAN #Conectividade #CloudNetworking #Haliae #TransformaçãoDigital #TI" },
  { file: "/posts/post-07-failover.jpg", title: "Redundância & Failover", caption: "🔄 Zero downtime. Essa é a promessa — e a entrega.\n\nCom as soluções de failover da Haliae, a comutação entre links e equipamentos é automática e transparente. Sua operação continua mesmo diante de falhas.\n\nRedundância planejada = tranquilidade garantida.\n\n#Failover #Redundância #ZeroDowntime #AltaDisponibilidade #Haliae #InfraestruturaDeTI #Resiliência #BusinessContinuity" },
  { file: "/posts/post-08-pme.jpg", title: "Soluções para PMEs", caption: "🏢 Quem disse que infraestrutura de TI profissional é só para grandes empresas?\n\nNa Haliae, levamos tecnologia corporativa para PMEs com soluções sob medida e custo acessível: rede segura, conectividade estável e suporte especializado.\n\nSua empresa merece TI de verdade, independentemente do tamanho.\n\n#PME #PequenasEmpresas #TIParaPME #InfraestruturaAcessível #Haliae #TecnologiaCorporativa #Negócios #Empreendedorismo" },
  { file: "/posts/post-09-logistica.jpg", title: "Logística Conectada", caption: "🚛 Operação logística exige conectividade robusta — e a Haliae entrega.\n\nConectamos filiais, centros de distribuição e operações de campo com soluções de VPN, IoT, rastreamento de frota e comunicação em tempo real.\n\nMais eficiência, menos paradas, total controle.\n\n#Logística #IoT #VPN #RastreamentoDeFroma #SupplyChain #Haliae #ConectividadeLogística #TecnologiaLogística" },
  { file: "/posts/post-10-parceria.jpg", title: "Parceiro Estratégico em TI", caption: "🤝 Não somos apenas fornecedores. Somos extensão da sua equipe de TI.\n\nA Haliae atua como parceiro estratégico: entendemos seu negócio, antecipamos necessidades e entregamos soluções que fazem diferença no resultado.\n\nConsultoria, implantação e suporte contínuo. Do planejamento à operação.\n\n#Parceria #ConsultoriaDeTI #TIEstratégica #Outsourcing #Haliae #TransformaçãoDigital #GestãoDeTI #ParceiroTecnológico" },
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
