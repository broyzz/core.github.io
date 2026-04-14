import { Badge } from "@/components/ui/badge"
import { Code2, Cpu, Lightbulb, Rocket } from "lucide-react"

const founders = [
  {
    name: "Bruno",
    role: "Co-Fundador & Engenheiro de Software",
    description:
      "Especialista em desenvolvimento de soluções RPA e integrações de sistemas complexos.",
  },
  {
    name: "Andryel",
    role: "Co-Fundador & Especialista em IA",
    description:
      "Expert em Inteligência Artificial e automação de processos de negócio.",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos as tecnologias mais avançadas para resolver seus desafios.",
  },
  {
    icon: Rocket,
    title: "Eficiência",
    description: "Entregas ágeis sem comprometer a qualidade e robustez.",
  },
  {
    icon: Code2,
    title: "Excelência",
    description: "Código limpo e soluções escaláveis para o futuro.",
  },
  {
    icon: Cpu,
    title: "Automação",
    description: "Eliminamos tarefas manuais para você focar no que importa.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/4 right-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-border/50 bg-card/50 text-muted-foreground">
            Sobre Nós
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Quem está por trás da{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              B&A Automations
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Somos uma dupla de engenheiros de software apaixonados por automação
            e inteligência artificial, focados em entregar soluções de alto
            nível para empresas que buscam eficiência operacional.
          </p>
        </div>

        {/* Founders */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
            >
              {/* Glow Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                <span className="text-2xl font-bold text-primary">
                  {founder.name.charAt(0)}
                </span>
              </div>
              <h3 className="mb-1 text-xl font-semibold text-foreground">
                {founder.name}
              </h3>
              <p className="mb-3 text-sm text-primary">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed">{founder.description}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-xl border border-border/50 bg-card/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 transition-colors group-hover:bg-primary/20">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
