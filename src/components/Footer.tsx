import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/haliae-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold">
              <img src={logo} alt="Haliae" className="h-7 w-7 object-contain rounded-full drop-shadow-[0_0_6px_hsl(190,90%,50%,0.3)]" />
              Haliae <span className="text-primary">Tecnologia</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Consultoria e tecnologia especializada em planejamento, segurança e gestão de infraestruturas de rede corporativas.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Navegação</h4>
            {[
              { to: "/", label: "Home" },
              { to: "/servicos", label: "Serviços" },
              { to: "/sobre", label: "Sobre" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Serviços</h4>
            {["Segurança de Redes", "Alta Disponibilidade", "Consultoria Personalizada", "Monitoramento 24/7"].map((s) => (
              <p key={s} className="text-sm text-muted-foreground">{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contato</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              contato@haliae.com.br
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              (11) 9999-9999
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              São Paulo, SP
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Haliae Tecnologia e Consultoria. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
