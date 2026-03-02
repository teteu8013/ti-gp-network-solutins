import { useState } from "react";
import { Shield } from "lucide-react";
import logo from "@/assets/haliae-logo.png";

const SITE_PASSWORD = "haliae2024";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem("site-auth") === "true"
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      sessionStorage.setItem("site-auth", "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (authenticated) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm flex-col items-center gap-6 rounded-xl border border-border/50 bg-card/60 p-8 backdrop-blur-xl"
      >
        <img
          src={logo}
          alt="Haliae"
          className="h-16 w-16 rounded-full object-contain drop-shadow-[0_0_8px_hsl(190,90%,50%,0.4)]"
        />
        <div className="text-center">
          <h1 className="text-xl font-bold">
            Haliae<span className="text-primary">.</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Digite a senha para acessar o site
          </p>
        </div>

        <div className="flex w-full items-center gap-2 rounded-md border border-border/50 bg-background/50 px-3 py-2 focus-within:ring-2 focus-within:ring-primary/50">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha de acesso"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            autoFocus
          />
        </div>

        {error && (
          <p className="text-sm text-destructive">Senha incorreta</p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
