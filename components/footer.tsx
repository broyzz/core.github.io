import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:contato@baautomations.com",
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-border/50">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center gap-2 md:justify-start">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20 border border-primary/30">
                <span className="text-sm font-bold text-primary">B&A</span>
              </div>
              <span className="text-lg font-semibold text-foreground">
                B&A Automations
              </span>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Transformando processos em Inteligência Operacional com soluções
              de IA e RPA sob medida.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/30 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:text-primary"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} B&A Automations. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
