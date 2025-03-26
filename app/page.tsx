"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Calendar,
  Code,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  // Refs para animações de scroll
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillItem = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="dark min-h-screen bg-[#0f0f13] text-white">
      {/* Fundo com gradiente */}
      <div className="fixed inset-0 -z-10 bg-[#0f0f13]">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-br from-purple-500/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full opacity-30 bg-gradient-to-tl from-cyan-500/20 via-transparent to-transparent" />
      </div>

      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-[#0f0f13]/80 border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
              <Code className="absolute inset-0 m-auto h-5 w-5 text-white" />
            </div>
            <span className="font-bold tracking-tight">ruyter</span>
          </Link>
          <nav className="ml-auto flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Sobre
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Experiência
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Habilidades
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Projetos
            </Link>
            <Link href="#contact">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
              >
                Contato
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                className="inline-block mb-6 p-px rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <div className="bg-[#0f0f13] rounded-full px-4 py-1 text-sm font-medium text-white">
                  Desenvolvedor Fullstack
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
                variants={fadeInUp}
              >
                Criando experiências digitais que importam
              </motion.h1>
              <motion.p
                className="mt-4 text-xl text-white/70"
                variants={fadeInUp}
              >
                Desenvolvo aplicações web modernas e responsivas com código
                limpo e experiências de usuário intuitivas.
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
                >
                  <Link href="#projects">
                    Ver Projetos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-white/10 hover:bg-white/5 gap-2"
                >
                  <Link href="/cv.pdf" target="_blank" download>
                    <Download className="h-4 w-4" /> Baixar CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          ref={aboutRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-20 animate-pulse" />
                  <div className="relative h-[300px] w-[300px] overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-white/10">
                    <Image
                      src="/images/profile.jpg"
                      alt="Ruyter - Desenvolvedor Fullstack"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight">Sobre Mim</h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                <p className="mt-4 text-white/70">
                  Sou um desenvolvedor fullstack com 3 anos de experiência,
                  cursando Ciência da Computação. Trabalho com projetos
                  freelance e tenho expertise em desenvolvimento web e sistemas
                  escaláveis.
                </p>
                <p className="mt-2 text-white/70">
                  Sou comunicativo, proativo e foco em código limpo e soluções
                  eficientes. Sempre atualizado com as melhores práticas do
                  mercado, busco entregar resultados de alto impacto.
                </p>
                <div className="mt-4 space-y-2 text-white/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span>Brasília, Brasil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-purple-400" />
                    <span>ruyter.dev@outlook.com</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <Link href="https://github.com/ruyteer" target="_blank">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/ruyter" target="_blank">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full border-white/10 hover:bg-white/5 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="/cv.pdf" target="_blank" download>
                    <Button
                      variant="outline"
                      className="rounded-full border-white/10 hover:bg-white/5 transition-colors gap-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Baixar CV</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          ref={experienceRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">
                  Experiência Profissional
                </h2>
                <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                  Minha trajetória profissional e as empresas onde contribuí.
                </p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    cargo: "Analista de Redes - N1",
                    empresa: "Teledata",
                    periodo: "Dez 2024 - Presente",
                    descricao:
                      "Atuo como analista de redes, monitorando o painel de circuitos da CAIXA e identificando unidades alarmadas. Após encontrar a problemática, realizamos contato com as unidades para coletar informações e orientar a respeito do déficit de rede/energia.Abrimos chamado para as operadoras responsáveis para seguirem com as tratativas. Também utilizo meus conhecimentos em desenvolvimento para a criação de projetos que visam automatizar, aumentar a eficiência, organização e qualidade do meu trabalho.",
                    tecnologias: [
                      "NextJS",
                      "Node.js",
                      "TypeScript",
                      "Tailwind",
                      "Painel SIREA",
                      "Análise de dados",
                      "Dashboard",
                    ],
                  },
                  {
                    cargo: "Aprendiz - Auxiliar Administrativo",
                    empresa: "Universal",
                    periodo: "Out 2024 - Dez 2024",
                    descricao:
                      "Realizo tarefas como organizar documentos, atender clientes e apoiar nas atividades do escritório. Aprendo a usar ferramentas de escritório, desenvolvo minha comunicação e colaboro com a equipe, ganhando experiência prática e capacitação para crescer profissionalmente. Pude contribuir com programação, desenvolvendo dashboards e automações para alavancar a eficiência da equipe.",
                    tecnologias: [
                      "Python",
                      "Pandas",
                      "JavaScript",
                      "Pacote Office",
                      "Streamlit",
                      "Dashboard",
                      "Análise de Dados",
                    ],
                  },
                  {
                    cargo: "Desenvolvedor Fullstack",
                    empresa: "Origem dos Coins - Haxtera",
                    periodo: "Jul 2023 - Presente",
                    descricao:
                      "Atuo na manutenção, resolução de bugs, desenvolvimento de novas features, desenvolvimento de sites, aprimoramento de código e arquitetura, etc. Sou responsável desde o desenvolvimento à infraestrutura das aplicações. Único profissional especializado na área dentro da empresa.",
                    tecnologias: [
                      "NextJS",
                      "NodeJS",
                      "JavaScript",
                      "Typescript",
                      "Python",
                      "Clean Achitechture",
                      "SOLID",
                      "Docker",
                      "Nginx",
                      "Apache",
                      "EasyPanel",
                      "PostgreeSQL",
                      "Prisma",
                    ],
                  },
                ].map((experiencia, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative pl-8 md:pl-0"
                  >
                    <div className="md:grid md:grid-cols-5 md:gap-8">
                      <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8">
                        <div className="flex items-center md:justify-end gap-2 text-white/70">
                          <Calendar className="h-4 w-4 text-purple-400 md:order-last" />
                          <span>{experiencia.periodo}</span>
                        </div>
                      </div>

                      <div className="md:col-span-4 relative">
                        {/* Linha vertical e círculo para timeline (visível apenas em mobile) */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-cyan-500 md:hidden">
                          <div className="absolute -left-[7px] -top-[7px] w-[15px] h-[15px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                        </div>

                        <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                            <h3 className="text-xl font-bold">
                              {experiencia.cargo}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-purple-400" />
                              <span className="text-white/70">
                                {experiencia.empresa}
                              </span>
                            </div>
                          </div>
                          <p className="text-white/70 mb-4">
                            {experiencia.descricao}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {experiencia.tecnologias.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="border-white/10 bg-white/5"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 text-white/70">
                  <GraduationCap className="h-5 w-5 text-purple-400" />
                  <span className="font-medium">
                    Formação: Bacharelado em Ciência da Computação - Gran
                    Faculdade, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          ref={skillsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Habilidades & Tecnologias
              </h2>
              <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                As ferramentas e tecnologias que utilizo para dar vida às
                ideias.
              </p>

              <div className="mt-12 grid gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-4">Frontend</h3>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "ShadcnUI",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        variants={skillItem}
                        className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">Backend</h3>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "PostgreSQL",
                      "Firebase",
                      "REST API",
                      "GraphQL",
                      "Prisma",
                      "Clean Architechture",
                      "SOLID",
                      "Typescript",
                      "MVC",
                      "Testes",
                      "DDD",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        variants={skillItem}
                        className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4">
                    Ferramentas & DevOps
                  </h3>
                  <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Git",
                      "GitHub",
                      "Docker",
                      "AWS",
                      "CI/CD",
                      "Jest",
                      "Apache",
                      "Vercel",
                      "Nginx",
                      "Easypanel",
                      "Linux",
                    ].map((skill) => (
                      <motion.div
                        key={skill}
                        variants={skillItem}
                        className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-4 text-center hover:bg-white/10 transition-colors"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          ref={projectsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Projetos em Destaque
              </h2>
              <div className="mt-2 mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
              <p className="mt-4 text-white/70 max-w-2xl mx-auto">
                Uma seleção dos meus trabalhos recentes e projetos pessoais.
              </p>

              <motion.div
                className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Plataforma E-commerce - Haxteras",
                    description:
                      "Uma loja online completa com processamento de pagamentos e gerenciamento de estoque.",
                    tags: [
                      "Next.js",
                      "Node.js",
                      "PostgreeSQL",
                      "Stripe",
                      "Mercado Pago",
                      "Asaas",
                      "Clean Achitechture",
                      "Websockets",
                    ],
                    gradient: "from-purple-500 to-pink-500",
                    link: "https://haxtera.com",
                  },
                  {
                    title: "Marketplace Gamer - Em desenvolvimento",
                    description:
                      "Uma plataforma para compras e vendas de items, contas e coins. Usuários podem realizar comércio de forma segura.",
                    tags: [
                      "Next.js",
                      "Node.js",
                      "PostgreeSQL",
                      "Stripe",
                      "Mercado Pago",
                      "Asaas",
                      "Clean Achitechture",
                      "Websockets - CHAT",
                      "Docker",
                      "Prisma",
                      "Tailwind CSS",
                    ],
                    gradient: "from-cyan-500 to-blue-500",
                    link: "https://origemdoscoins.com.br",
                  },
                  {
                    title: "Website Institucional",
                    description:
                      "Um website de institucional/e-commerce responsivo.",
                    tags: [
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Prisma",
                      "Stripe",
                      "ShadcnUI",
                      "NeonDatabase",
                    ],
                    gradient: "from-pink-500 to-orange-500",
                    link: "https://toquefino.shop",
                  },
                ].map((project, index) => (
                  <motion.div key={index} variants={skillItem}>
                    <Card className="overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                      <CardHeader className="p-4">
                        <div
                          className={`aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        >
                          <Code className="h-12 w-12 text-white" />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription className="mt-2 text-white/70">
                          {project.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex flex-wrap justify-between items-center p-4 pt-0">
                        <div className="flex flex-wrap gap-1 my-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-white/10 px-2.5 py-0.5 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-400 hover:text-purple-300 p-0"
                          asChild
                        >
                          <Link href={project.link}>
                            <span className="flex items-center gap-1">
                              Ver projeto{" "}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </span>
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

              <Button className="mt-12 bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity">
                Ver Todos os Projetos
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          ref={contactRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="mx-auto max-w-5xl">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="relative p-8 md:p-12">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="text-3xl font-bold tracking-tight">
                        Entre em Contato
                      </h2>
                      <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                      <p className="mt-4 text-white/70">
                        Tem um projeto em mente ou quer discutir oportunidades?
                        Adoraria ouvir de você.
                      </p>
                      <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                            <Mail className="h-5 w-5 text-purple-400" />
                          </div>
                          <span>ruyter.dev@outlook.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                            <Linkedin className="h-5 w-5 text-purple-400" />
                          </div>
                          <span>linkedin.com/in/ruyter</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                            <Github className="h-5 w-5 text-purple-400" />
                          </div>
                          <span>github.com/ruyteer</span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <Button
                          variant="outline"
                          className="border-white/10 hover:bg-white/5 gap-2"
                          asChild
                        >
                          <Link href="/cv.pdf" target="_blank" download>
                            <Download className="h-4 w-4" /> Baixar Currículo
                            Completo
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <input
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                          placeholder="Seu email"
                        />
                      </div>
                      <div>
                        <textarea
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-white/50 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                          placeholder="Sua mensagem"
                          rows={4}
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 transition-opacity">
                        Enviar Mensagem
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-cyan-500">
                <Code className="h-5 w-5 m-auto mt-1.5 text-white" />
              </div>
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()}{" "}
                <span className="font-medium text-white">Ruyter</span>. Todos os
                direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/ruyteer"
                target="_blank"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/ruyter"
                target="_blank"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:ruyter.dev@outlook.com"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
