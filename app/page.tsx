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
      name: "Portal Oncosalud - Microservicios",
      period: "2023 - 2024",
      type: "Profesional",
      description: "Desarrollo y evolución de microservicios para el Portal Oncosalud utilizando NestJS y Laravel, integrados con servicios AWS. Construcción de microfrontends con Angular y Module Federation, mejorando la modularidad y capacidad de despliegue independiente.",
      technologies: ["Node.js", "TypeScript", "NestJS", "Laravel", "Angular", "AWS", "Docker", "Pulumi"],
      links: {
        github: "https://github.com",
        demo: "https://demo.example.com"
      }
    },
    {
      name: "Sistema ERP TOTTUS - Microservicios",
      period: "2021 - 2023",
      type: "Profesional", 
      description: "Desarrollo de microservicios distribuidos con Spring Boot y Node.js integrados con sistemas ERP mediante mensajería Kafka y Google Pub/Sub. Implementación de microfrontends con Angular y Module Federation desplegados en Google Cloud Platform.",
      technologies: ["Spring Boot", "Node.js", ".NET Core", "Angular", "Kafka", "Google Cloud", "Kubernetes", "Oracle"],
      links: {
        github: "https://github.com"
      }
    },
    {
      name: "Portal Estudiantil - Universidad Científica del Sur",
      period: "2019 - 2021",
      type: "Profesional",
      description: "Desarrollo y mantenimiento de microservicios con Node.js y Laravel Lumen. Creación del portal estudiantil y aplicación móvil híbrida con Ionic. Sistema de colas para matrículas con Node.js, Angular y TypeScript.",
      technologies: ["Node.js", "Laravel", "Angular", "Ionic", ".NET", "SQL Server", "AWS", "Docker"],
      links: {
        github: "https://github.com"
      }
    }
  ];

  const experiences = [
    {
      company: "GSP Servicios Generales (AUNA)",
      logo: "AU",
      role: "Backend Developer Senior",
      period: "Marzo 2024 - Actualidad",
      description: "Desarrollo de microservicios aplicando Clean Architecture, DDD y arquitectura hexagonal. Implementación de flujos asincrónicos con Kafka, AWS Lambda, SQS, SNS y EventBridge. Manejo de seguridad con OAuth 2.0 y Amazon Cognito, utilizando Vault y AWS Secret Manager para secretos."
    },
    {
      company: "Quality & Development Software (AUNA)",
      logo: "QD", 
      role: "Backend Developer Senior",
      period: "Julio 2023 - Febrero 2024",
      description: "Desarrollo de microservicios para Portal Oncosalud con NestJS y Laravel integrados con AWS. Construcción de microfrontends con Angular y Module Federation. Integración con servicios SAP y pasarela de pagos Niubiz para optimizar procesos internos."
    },
    {
      company: "NEKSYS SAC",
      logo: "NK",
      role: "Desarrollador Senior", 
      period: "Septiembre 2021 - Junio 2023",
      description: "Desarrollo de microfrontends y microservicios distribuidos con Spring Boot, Node.js y .NET Core. Integración con sistemas ERP mediante Kafka y Google Pub/Sub. Despliegue en Google Cloud Platform con Kubernetes y gestión de bases de datos Oracle y SQL Server."
    },
    {
      company: "Universidad Científica del Sur",
      logo: "UC",
      role: "Analista Programador de Sistemas",
      period: "Julio 2019 - Agosto 2021", 
      description: "Desarrollo de microservicios con Node.js y Laravel Lumen. Mantenimiento de aplicaciones monolíticas en PHP para portales estudiantiles. Desarrollo de aplicación móvil híbrida con Ionic y sistema de colas para matrículas con tecnologías modernas."
    }
  ];

  const personalProjects = [
    {
      name: "Sistema de Gestión de Reportes ERP",
      type: "Personal",
      description: "Desarrollo de módulo de reportes para ERP con generación y configuración de envíos periódicos automatizados. Implementación siguiendo patrón MVC para estructurar código de manera modular y mantenible en la industria ambiental.",
      technologies: [".NET Framework", "C#", "SQL Server", "MVC"]
    },
    {
      name: "Sistema de Control de Asistencia",
      type: "Personal",
      description: "Desarrollo de sistema personalizado de control de asistencia para instituciones educativas. Incluye aplicación automatizada para envío de boletas de notas en PDF generadas dinámicamente desde base de datos.",
      technologies: ["PHP", "SQL Server", "Firebird", "JavaScript"]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: Linkedin, href: "https://linkedin.com", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Youtube, href: "https://youtube.com", color: "bg-red-600 hover:bg-red-700" },
    { icon: Twitter, href: "https://twitter.com", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Mail, href: "mailto:vallejoaguilar@gmail.com", color: "bg-orange-500 hover:bg-orange-600" },
    { icon: FileText, href: "/cv.pdf", color: "bg-green-600 hover:bg-green-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-light">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 xl:px-24 relative">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-700 ring-4 ring-white/10">
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Luis Fernando Vallejo Aguilar"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight">
            Luis Fernando Vallejo
          </h1>
          
          {/* Title */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-16 font-light tracking-wide">
            Senior Backend Developer | Especialista en Microservicios y Cloud
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://linkedin.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Linkedin className="w-5 h-5" />
              Ponte en contacto
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
      <section id="about" className="py-24 px-8 lg:px-16 xl:px-24 bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
                Acerca de mí
              </h2>
              <div className="space-y-6 text-lg leading-relaxed font-light">
                <p>
                  ¡Hola! Soy Luis Fernando, un desarrollador backend senior especializado en 
                  <strong className="font-medium"> arquitecturas de microservicios</strong> y tecnologías cloud. 
                  Actualmente trabajo en AUNA desarrollando soluciones escalables para el sector salud.
                </p>
                <p>
                  Mi experiencia abarca desde el desarrollo de <strong className="font-medium">microservicios distribuidos</strong> 
                  hasta la implementación de <strong className="font-medium">arquitecturas hexagonales</strong> y 
                  <strong className="font-medium">event-driven architecture</strong>. He trabajado con tecnologías como 
                  <strong className="font-medium">Node.js</strong>, <strong className="font-medium">Spring Boot</strong>, 
                  <strong className="font-medium">.NET Core</strong> y plataformas cloud como <strong className="font-medium">AWS</strong> 
                  y <strong className="font-medium">Google Cloud Platform</strong>.
                </p>
                <p>
                  Tengo experiencia en la integración de sistemas complejos mediante 
                  <strong className="font-medium">Kafka</strong>, <strong className="font-medium">mensajería asíncrona</strong> 
                  y el desarrollo de <strong className="font-medium">microfrontends</strong> con Angular. 
                  Mi enfoque se centra en crear soluciones robustas, escalables y mantenibles.
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
                  alt="Luis Fernando Vallejo presentando"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-8 lg:px-16 xl:px-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center tracking-tight">
            Aspectos destacados del proyecto
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
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
      <section className="py-24 px-8 lg:px-16 xl:px-24 bg-gray-50 text-gray-900">
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
      <section id="personal-projects" className="py-24 px-8 lg:px-16 xl:px-24 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
      <footer className="py-12 px-8 lg:px-16 xl:px-24 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Github className="w-12 h-12 mx-auto text-blue-400" />
          </div>
          <p className="text-lg font-light">
            Este sitio web fue construido utilizando las siguientes tecnologías: 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">Next.js</a>, 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">React</a>, 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors">Tailwind CSS</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}