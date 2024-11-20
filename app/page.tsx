import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Code, FileCheck, Mail, Github, Linkedin } from "lucide-react"

export default function QAPortfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Ana Silva" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ana Silva</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">QA Engineer</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Sobre Mim</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sou uma QA Engineer apaixonada por garantir a qualidade de software. Com 5 anos de experiência,
                especializo-me em testes automatizados e manuais, sempre buscando melhorar a experiência do usuário
                e a eficiência dos processos de desenvolvimento.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Habilidades</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Testes Automatizados</Badge>
              <Badge>Selenium</Badge>
              <Badge>Cypress</Badge>
              <Badge>Jest</Badge>
              <Badge>Postman</Badge>
              <Badge>SQL</Badge>
              <Badge>Agile/Scrum</Badge>
              <Badge>JIRA</Badge>
              <Badge>Git</Badge>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Experiência</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">QA Engineer Senior - TechCorp</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2020 - Presente</p>
                    <p className="mt-1">
                      Liderança de equipe de QA, implementação de estratégias de teste automatizado,
                      redução de 30% no tempo de ciclo de testes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">QA Analyst - SoftSolutions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2018 - 2020</p>
                    <p className="mt-1">
                      Desenvolvimento e execução de casos de teste, automação de testes de API e UI.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Projetos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Code className="h-5 w-5 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">Framework de Automação de Testes</h3>
                    <p className="mt-1">
                      Desenvolvimento de um framework de automação de testes customizado usando Selenium e Python,
                      resultando em 40% de aumento na cobertura de testes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileCheck className="h-5 w-5 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold">Otimização de Processos de QA</h3>
                    <p className="mt-1">
                      Implementação de práticas de Shift-Left Testing, reduzindo o tempo de lançamento em 25%
                      e melhorando a qualidade geral do produto.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}