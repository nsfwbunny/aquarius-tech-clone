import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Database, Laptop, LineChart, MonitorSmartphone, Palette, ShoppingCart, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const courses = [
  {
    icon: Laptop,
    title: "Informática Básica e Avançada",
    description: "Aprenda desde o básico até técnicas avançadas de computação",
    duration: "3 meses"
  },
  {
    icon: BookOpen,
    title: "Informática Completa",
    description: "Curso completo que abrange todos os aspectos da informática moderna",
    duration: "6 meses"
  },
  {
    icon: Code,
    title: "Pacote Office Avançado",
    description: "Word, Excel, PowerPoint e Power BI para o mercado profissional",
    duration: "4 meses"
  },
  {
    icon: ShoppingCart,
    title: "Operador de Caixa",
    description: "Prepare-se para trabalhar no varejo com conhecimento completo",
    duration: "2 meses"
  },
  {
    icon: MonitorSmartphone,
    title: "Manutenção de Computadores",
    description: "Aprenda a montar, consertar e dar manutenção em computadores",
    duration: "4 meses"
  },
  {
    icon: Database,
    title: "Rede de Computadores",
    description: "Configuração e gerenciamento de redes corporativas",
    duration: "5 meses"
  },
  {
    icon: Palette,
    title: "Designer Gráfico",
    description: "Crie designs profissionais e desenvolva sua criatividade",
    duration: "6 meses"
  },
  {
    icon: LineChart,
    title: "Power BI Avançado",
    description: "Análise de dados e criação de dashboards profissionais",
    duration: "3 meses"
  }
];

const Index = () => {
  const whatsappNumber = "5594999537290";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de mais informações sobre os cursos da Technology Aquarius.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Technology Aquarius
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Adquira novas habilidades e conquiste sua profissão!
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
              Os melhores cursos de informática e tecnologia para você se conectar com o mundo e alcançar seus objetivos profissionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 shadow-glow hover:scale-105 transition-transform"
                onClick={() => window.location.href = whatsappUrl}
              >
                <Phone className="mr-2 h-5 w-5" />
                Faça Sua Inscrição
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Cursos
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Nossos Cursos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inscrições abertas! Escolha o curso ideal para sua carreira
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-glow">
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Duração: {course.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => window.location.href = whatsappUrl}
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Por Que Escolher a Technology Aquarius?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Na Technology Aquarius, acreditamos que a educação em tecnologia é a chave para abrir portas no mercado de trabalho. 
            Nossos cursos são desenvolvidos para oferecer conhecimento prático e atualizado, preparando você para os desafios 
            do mundo digital.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Alunos Formados</p>
            </div>
            <div className="p-6 rounded-xl gradient-card">
              <div className="text-4xl font-bold text-secondary mb-2">8</div>
              <p className="text-muted-foreground">Cursos Disponíveis</p>
            </div>
            <div className="p-6 rounded-xl gradient-card">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground">
              Faça já sua inscrição e comece a transformar seu futuro!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fale diretamente com Carlos Gomes
                </p>
                <Button 
                  className="w-full shadow-glow"
                  onClick={() => window.location.href = whatsappUrl}
                >
                  (94) 99953-7290
                </Button>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Localização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Rua Joaquim Nepomuceno
                </p>
                <p className="text-muted-foreground mb-4">
                  (próximo à Orla)
                </p>
                <p className="font-semibold">
                  Irituia - PA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2024 Technology Aquarius. Todos os direitos reservados.</p>
          <p className="text-sm">Conectando você ao mundo da tecnologia</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
