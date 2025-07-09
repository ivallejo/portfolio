'use client';

import Image from 'next/image';
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
      name: "Compra de Exámenes Laboratorio - MX",
      period: "2024",
      type: "Profesional",
      description: "Backend para una aplicación web que permite a los usuarios comprar exámenes médicos de manera sencilla, similar a un carrito de compras. Los usuarios pueden elegir entre diferentes tipos de exámenes, registrar sus datos y realizar el pago en línea de forma segura. El sistema gestiona la información de los productos, los datos de los pacientes y el proceso de pago, además de enviar notificaciones automáticas sobre el estado de la compra.",
      technologies: [
        "TypeScript","NestJS", "PostgreSQL", "Pulumi", "AWS", "API Gateway", "Cognito", "ECS Fargate", "Docker", "ECR", "RDS", "DynamoDB", "Lambda", "SQS", "Niubiz", "SES", "S3"
      ],
      links: {}
    },
    {
      name: "Gestión de Notificaciones - MiAuna",
      period: "2024",
      type: "Profesional",
      description: "Solución para el envío automatizado de notificaciones a usuarios de la app MiAuna, a partir de la carga de un archivo Excel con los números de contacto. El proceso utiliza flujos asincrónicos para procesar los datos y enviar notificaciones de manera eficiente y segura. La infraestructura se implementó en AWS, permitiendo alta disponibilidad y escalabilidad.",
      technologies: [
        "TypeScript", "NestJS", "Pulumi", "AWS", "Cognito", "ECS", "Fargate", "DynamoDB", "SQS", "SNS", "S3", "API Gateway", "Docker", "Lambda"
      ],
      links: {}
    },
    {
      name: "Portal Oncosalud - Microservicios",
      period: "2023-2024",
      type: "Profesional",
      description: "Migración del portal Oncosalud de una arquitectura monolítica en Laravel a una solución moderna de microservicios en AWS. Integración con SAP y servicios de cobranzas para gestión de pacientes, programas y pagos en línea. Implementación de reportes automáticos y adopción de patrones avanzados como Backend for Frontend y monorepositorio.",
      technologies: [
        "TypeScript", "NestJS", "Laravel", "Pulumi", "AWS", "API Gateway", "Cognito", "ECS Fargate", "Docker", "PostgreSQL", "SAP", "TypeORM", "NX", "Monorepo", "Pagos en línea"
      ],
      links: {}
    },
    {
      name: "Actualización de Estados de Órdenes",
      period: "2022",
      type: "Profesional",
      description: "Modernización del sistema ERP de Tottus mediante microservicios para automatizar la gestión de estados de órdenes. La solución mejora la eficiencia operativa al procesar automáticamente eventos y actualizar información en tiempo real. Se implementó una arquitectura cloud nativa en Google Cloud Platform con contenedores, integración continua y servicios gestionados para alta disponibilidad y escalabilidad.",
      technologies: [
        "Spring Boot", "Node.js", "PostgreSQL", "Kafka", "Google Cloud", "GKE", "Docker", "GitLab CI", "Secret Manager", "Firestore", "BigQuery", "Pub/Sub", "Workload Identity", "Kustomize", "CloudSQL"
      ],
      links: {}
    },
    {
      name: "Procesamiento de Pedidos - ERP Tottus",
      period: "2021",
      type: "Profesional",
      description: "Sistema de procesamiento de pedidos para integración con sistemas externos mediante flujos de eventos asincrónicos. El servicio recibe eventos, procesa información de pedidos y los registra en sistemas externos, manteniendo trazabilidad completa del proceso. Se desarrolló una aplicación Angular para monitoreo y seguimiento de pedidos, permitiendo consultar el estado de registro y detectar fallos en el proceso.",
      technologies: [
        "Node.js", "JavaScript", "Angular", "Google Cloud", "GKE", "Docker", "Kafka", "Pub/Sub", "Firestore", "Secret Manager", "DataDog", "GCR", "GitLab CI/CD"
      ],
      links: {}
    },
    {
      name: "Portal Estudiantil - Universidad Científica del Sur",
      period: "2019 - 2021",
      type: "Profesional",
      description: "Desarrollo y mantenimiento de microservicios con Node.js y Laravel Lumen. Creación del portal estudiantil y aplicación móvil híbrida con Ionic. Sistema de colas para matrículas con Node.js, Angular y TypeScript.",
      technologies: ["Node.js", "Laravel", "Angular", "Ionic", ".NET", "SQL Server", "MySQL", "PostgreSQL", "IAM", "EC2", "S3", "Docker", "Linux"],
      links: {}
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
      name: "Femalab - Gestión de Atenciones Médicas",
      type: "Personal",
      description: "Sistema integral para la gestión de citas médicas que permite el registro de pacientes, especialidades y exámenes en el módulo de admisión. El sistema gestiona pagos y genera boletas automáticamente, facilitando la declaración de facturas en SUNAT. Incluye módulo de reportes basados en órdenes médicas para seguimiento y análisis de datos.",
      technologies: ["C#", "MVC", "SQL Server", "MySQL", "Laravel", "jQuery", "Bootstrap", "IIS"]
    },
    {
      name: "Portal de Proveedores",
      type: "Personal",
      description: "Portal web para proveedores que permite la gestión integral de información de servicios y el control de pagos. Los proveedores pueden registrar y actualizar sus datos de servicios, consultar el estado de sus pagos y generar reportes de facturación. El sistema facilita la comunicación y transparencia en la gestión de relaciones comerciales.",
      technologies: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap", "JavaScript", "HTML", "CSS"]
    },
    {
      name: "Módulo de Carnet Virtual",
      type: "Personal",
      description: "Sistema de carnet virtual que permite mostrar y gestionar carnets de identificación obteniendo datos de diferentes servicios. Los usuarios pueden actualizar información personal, imágenes y datos del carnet de manera dinámica. El sistema integra múltiples fuentes de datos para generar carnets virtuales con información actualizada en tiempo real.",
      technologies: ["Angular", "Laravel", "MySQL", "AWS", "EC2", "S3", "Nginx", "Bootstrap", "JavaScript"]
    },
    {
      name: "Módulo de Reportes - ERP PUCP",
      type: "Personal",
      description: "Desarrollo de módulo de reportes para el ERP de la Pontificia Universidad Católica del Perú. El sistema permite realizar filtros de información y cálculos basados en parámetros personalizados. Se crearon 7 tipos de reportes para presentar distintos tipos de información empresarial, todos con funcionalidad de exportación a Excel con formatos específicos solicitados.",
      technologies: ["PHP", "Laravel", "SQL", "jQuery", "Bootstrap 5", "Excel"]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ivallejo", color: "bg-gray-800 hover:bg-gray-700" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/fernandovallejoaguilar/", color: "bg-blue-600 hover:bg-blue-700" },
    // { icon: Youtube, href: "https://youtube.com", color: "bg-red-600 hover:bg-red-700" },
    // { icon: Twitter, href: "https://twitter.com", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: Mail, href: "mailto:vallejoaguilar@gmail.com", color: "bg-orange-500 hover:bg-orange-600" },
          { icon: FileText, href: "/CV_Luis_Vallejo_Aguilar.pdf", color: "bg-green-600 hover:bg-green-700" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-light">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 lg:px-16 xl:px-24 relative">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-700 ring-4 ring-white/10">
            <Image
              src="/avatar.jpeg"
              alt="Luis Fernando Vallejo Aguilar"
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          </div>
          
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-light mb-4 text-white tracking-tight">
            Luis Fernando Vallejo
          </h1>
          
          {/* Title */}
          <h2 className="text-base md:text-lg text-gray-300 mb-8 font-light tracking-wide">
            Senior Backend Developer | Especialista en Microservicios Cloud
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a 
              href="https://www.linkedin.com/in/fernandovallejoaguilar/" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              <Linkedin className="w-4 h-4" />
              Ponte en contacto
            </a>
            <a 
              href="/CV_Luis_Vallejo_Aguilar.pdf" 
              download
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              <FileText className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group focus:outline-none"
          >
            <ChevronDown className="w-6 h-6 mb-2 group-hover:animate-bounce" />
            <span className="text-sm font-light">Desplácese para obtener más información</span>
            <ChevronDown className="w-6 h-6 mt-2 group-hover:animate-bounce" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 lg:px-10 xl:px-16 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 tracking-tight">
                Acerca de mí
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-light">
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
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-md ${social.color} flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
            {/* Profile Image */}
            <div className="lg:order-last">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/aws.jpeg"
                  alt="Luis Fernando Vallejo presentando"
                  width={250}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 lg:px-10 xl:px-16 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center tracking-tight">
            Proyectos destacados
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-md p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-medium text-gray-900 leading-tight">{project.name}</h3>
                  <div className="flex gap-1 ml-2">
                    {/* <a href={project.links.github} className="w-7 h-7 bg-gray-600 rounded-md flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <Github className="w-3 h-3 text-white" />
                    </a>
                    <a href="#" className="w-7 h-7 bg-red-600 rounded-md flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Youtube className="w-3 h-3 text-white" />
                    </a> */}
                    {/* {project.links.demo && (
                      <a href={project.links.demo as string} className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-3 h-3 text-white" />
                      </a>
                    )} */}
                  </div>
                </div>
                <div className="text-gray-500 mb-1 font-light text-xs">{project.period}</div>
                <div className="mb-2">
                  <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-2 leading-relaxed font-light text-xs">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-900 text-white px-1.5 py-0.5 rounded-md text-[10px] font-light">
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
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Ver proyectos personales
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 lg:px-10 xl:px-16 bg-gray-50 text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-center tracking-tight">
            Historial laboral
          </h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-5 items-start">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white font-medium text-lg shadow-lg">
                    {exp.logo}
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-1 text-gray-900">{exp.role}</h3>
                  <h4 className="text-base text-gray-600 mb-1 font-light">{exp.company}</h4>
                  <div className="text-gray-500 mb-2 font-light text-xs">{exp.period}</div>
                  <p className="text-gray-700 leading-relaxed font-light text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="personal-projects" className="py-16 px-6 lg:px-10 xl:px-16 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-md p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-2">
                  <span className="bg-green-500 text-white px-2 py-0.5 rounded-md text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-base font-medium mb-2 text-gray-900">{project.name}</h3>
                <p className="text-gray-600 mb-2 leading-relaxed font-light text-xs">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-900 text-white px-1.5 py-0.5 rounded-md text-[10px] font-light">
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
      <footer className="py-8 px-6 lg:px-10 xl:px-16 bg-gray-900 text-gray-400">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-4">
            <Github className="w-8 h-8 mx-auto text-blue-400" />
          </div>
          <p className="text-base font-light">
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