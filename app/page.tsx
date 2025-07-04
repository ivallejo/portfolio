'use client';

import { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Mail, ExternalLink, ChevronDown, Youtube, Twitter } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      name: "Sistema de Microservicios E-commerce",
      period: "2023 - 2024",
      type: "Profesional",
      description: "Una plataforma de comercio electrónico escalable desarrollada con una arquitectura de microservicios, manejando más de 100,000 transacciones diarias con alta disponibilidad y rendimiento optimizado.",
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS", "Redis", "Kubernetes"],
      links: {
        github: "https://github.com",
        demo: "https://demo.example.com"
      }
    },
    {
      name: "API de Analytics en Tiempo Real",
      period: "2022 - 2023",
      type: "Profesional", 
      description: "Sistema de análisis de datos en tiempo real que procesa millones de eventos por día, proporcionando insights instantáneos para la toma de decisiones empresariales con latencia sub-segundo.",
      technologies: ["Go", "ClickHouse", "Kafka", "Kubernetes", "Prometheus", "Grafana"],
      links: {
        github: "https://github.com"
      }
    },
    {
      name: "Plataforma de Autenticación Empresarial",
      period: "2021 - 2022",
      type: "Profesional",
      description: "Servicio de autenticación de nivel empresarial con soporte para OAuth2, JWT y autenticación multifactor, sirviendo a más de 50,000 usuarios activos diarios.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "OAuth2"],
      links: {
        github: "https://github.com"
      }
    }
  ];

  const experiences = [
    {
      company: "TechCorp Solutions",
      logo: "TC",
      role: "Senior Backend Developer",
      period: "01.01.2023 - presente",
      description: "Liderando el desarrollo de arquitecturas de microservicios escalables que sirven a más de 1 millón de usuarios diarios. Responsable del diseño, implementación y mantenimiento de sistemas críticos de alta disponibilidad, optimización de bases de datos y mentorización de equipos de desarrollo junior."
    },
    {
      company: "InnovateTech",
      logo: "IT", 
      role: "Backend Developer",
      period: "15.03.2020 - 31.12.2022",
      description: "Desarrollé APIs robustas y optimicé el rendimiento de bases de datos para aplicaciones empresariales. Implementé soluciones de caching distribuido que mejoraron el rendimiento en un 60% y reduje los costos de infraestructura mediante optimizaciones de consultas y arquitectura."
    },
    {
      company: "StartupVenture",
      logo: "SV",
      role: "Full Stack Developer", 
      period: "10.06.2018 - 14.03.2020",
      description: "Desarrollé soluciones end-to-end en un entorno de startup de rápido crecimiento. Construí desde cero la plataforma principal de la empresa, implementé CI/CD pipelines y establecí las mejores prácticas de desarrollo que permitieron escalar el equipo de 3 a 15 desarrolladores."
    },
    {
      company: "FreelanceProjects",
      logo: "FP",
      role: "Consultor de Ingeniería de Software",
      period: "01.01.2017 - presente", 
      description: "Ofrezco consultoría técnica para proyectos de desarrollo de software, tomo decisiones técnicas e implemento soluciones complejas para productos SaaS. También soy mentor y coach de un grupo de desarrolladores con alto potencial."
    }
  ];

  const personalProjects = [
    {
      name: "Sistema de Gestión de Servidores Cloud",
      type: "Personal",
      description: "Un sistema de gestión de servidores diseñado específicamente para administrar infraestructura cloud. Permite la gestión simultánea de múltiples servidores, la revisión de registros, la creación de informes y la programación de tareas automatizadas.",
      technologies: ["Docker", "Kubernetes", "Python", "React"]
    },
    {
      name: "Plataforma de Análisis de Rendimiento",
      type: "Personal",
      description: "Una plataforma de análisis de rendimiento cuyo objetivo era optimizar completamente el rendimiento de aplicaciones web sin obligar a los desarrolladores a realizar cambios significativos. Consistía en scripts de Python modificados que ejecutaba el servidor, sitios PHP y analizadores de registros de Node.js.",
      technologies: ["Python", "PHP", "Node.js", "JavaScript", "MongoDB"]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: Linkedin, href: "https://linkedin.com", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Youtube, href: "https://youtube.com", color: "bg-red-600 hover:bg-red-700" },
    { icon: Twitter, href: "https://twitter.com", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Mail, href: "mailto:contact@example.com", color: "bg-orange-500 hover:bg-orange-600" },
    { icon: FileText, href: "/cv.pdf", color: "bg-green-600 hover:bg-green-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-light">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-700 ring-4 ring-white/10">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Alexander Chen"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
            Alexander Chen
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide">
            Senior Backend Developer | Arquitecto de Sistemas Escalables
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://linkedin.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
              Ponte en contacto con nosotros
            </a>
            <a 
              href="/cv.pdf" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" />
              Descargar CV
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <ChevronDown className="w-6 h-6 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-light">Desplácese para obtener más información</span>
            <ChevronDown className="w-6 h-6 mt-2 group-hover:animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
                Acerca de mí
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-light">
                <p>
                  ¡Hola! Soy Alexander, un entusiasta de las tecnologías backend que trabaja a tiempo completo como 
                  Senior Backend Developer en TechCorp Solutions, imparto clases de Arquitectura de Software en 
                  universidades locales y fundé una startup tecnológica.
                </p>
                <p>
                  Normalmente cumplo los roles de <strong className="font-medium">arquitecto de soluciones</strong> y <strong className="font-medium">desarrollador líder</strong> con un 
                  fuerte enfoque en el crecimiento de mi equipo a través de desafíos técnicos, sesiones de 
                  <strong className="font-medium">capacitación</strong>, <strong className="font-medium">presentaciones</strong> y <strong className="font-medium">tutoría</strong>.
                </p>
                <p>
                  He cambiado frecuentemente de tecnología, adquiriendo un dominio completo de 
                  <strong className="font-medium">Node.js</strong>, <strong className="font-medium">Python</strong> y el ecosistema <strong className="font-medium">Cloud Native</strong>. Mi área de especialización actual se centra en 
                  <strong className="font-medium">Amazon Web Services</strong>, <strong className="font-medium">Kubernetes</strong> y <strong className="font-medium">Microservicios</strong>.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-md ${social.color} flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="lg:order-last">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Alexander Chen presenting"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
            Aspectos destacados del proyecto
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-gray-900 leading-tight">{project.name}</h3>
                  <div className="flex gap-2 ml-4">
                    <a href={project.links.github} className="w-8 h-8 bg-gray-600 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Youtube className="w-4 h-4 text-white" />
                    </a>
                    {project.links.demo && (
                      <a href={project.links.demo} className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="text-gray-500 mb-3 font-light text-sm">{project.period}</div>
                
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed font-light text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => scrollToSection('personal-projects')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Ver todos los proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
            Historial laboral
          </h2>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-8 items-start">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center text-white font-medium text-xl shadow-lg">
                    {exp.logo}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-2 text-gray-900">{exp.role}</h3>
                  <h4 className="text-lg text-gray-600 mb-2 font-light">{exp.company}</h4>
                  <div className="text-gray-500 mb-4 font-light">{exp.period}</div>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="personal-projects" className="py-24 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed font-light text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Github className="w-12 h-12 mx-auto text-blue-400" />
          </div>
          <p className="text-lg font-light">
            Este sitio web fue construido utilizando las siguientes bibliotecas de código abierto: 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">Next.js</a>, 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">React</a>, 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">Tailwind CSS</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}