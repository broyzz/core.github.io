import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, Calendar, Bot, Cog, MessageSquare, Zap } from "lucide-react"

const projects = [
  {
    title: "Sistema de Orçamento para Mecânicos",
    description:
      "Automação completa usando Python e RPA que captura dados de peças de fornecedores, calcula automaticamente a mão de obra com base em tabelas de tempo padrão e envia o orçamento final formatado para o cliente via WhatsApp ou e-mail.",
    icon: Calculator,
    tags: ["Python", "RPA", "Automação", "WhatsApp API"],
    features: [
      "Captura automática de preços",
      "Cálculo inteligente de mão de obra",
      "Envio automático ao cliente",
      "Dashboard de acompanhamento",
    ],
  },
  {
    title: "Agendamento Inteligente com IA",
    description:
      "Bot integrado ao WhatsApp e Google Calendar que utiliza IA para compreender as preferências do cliente, responder dúvidas frequentes e agendar horários automaticamente, sem intervenção humana.",
    icon: Calendar,
    tags: ["IA Conversacional", "WhatsApp", "Google Calendar", "NLP"],
    features: [
      "Entendimento de linguagem natural",
      "Sincronização com Google Calendar",
      "Respostas automáticas 24/7",
      "Confirmações e lembretes",
    ],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 border-border/50 bg-card/50 text-muted-foreground">
            Nossos Projetos
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Soluções que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              transformam negócios
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-pretty">
            Desenvolvemos automações sob medida que se integram perfeitamente 
            aos seus processos existentes, eliminando tarefas manuais e 
            reduzindo erros.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden border-border/50 bg-card/30 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
            >
              {/* Card Glow Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border/50 bg-primary/10">
                  <project.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="border-border/50 bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Zap className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Bot,
              title: "Chatbots Inteligentes",
              description: "Atendimento automatizado com IA conversacional",
            },
            {
              icon: Cog,
              title: "Automação de Processos",
              description: "RPA para tarefas repetitivas e demoradas",
            },
            {
              icon: MessageSquare,
              title: "Integrações",
              description: "Conectamos seus sistemas e plataformas",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-card/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/40"
            >
              <service.icon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
