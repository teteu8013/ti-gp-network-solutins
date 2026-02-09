import { Layout } from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function Contato() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Fale <span className="text-gradient-cyan">Conosco</span></h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Conte-nos sobre sua necessidade. Nossa equipe retornará em até 24 horas úteis.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border/50 bg-card/50 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nome da empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Porte</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o porte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Pequena Empresa</SelectItem>
                      <SelectItem value="medium">Média Empresa</SelectItem>
                      <SelectItem value="large">Grande Empresa</SelectItem>
                      <SelectItem value="logistics">Logística / Transporte</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva sua necessidade..." rows={5} required />
              </div>

              <Button type="submit" className="w-full gap-2" disabled={sending}>
                <Send className="h-4 w-4" />
                {sending ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border border-border/50 bg-card/50 p-6 space-y-6">
              <h3 className="text-lg font-semibold">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">contato@haliae.com.br</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">São Paulo, SP — Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-lg border border-border/50 bg-card/50 h-48 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Mapa em breve</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
