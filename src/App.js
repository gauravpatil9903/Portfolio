import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = {
    primary: '#2D3250',    // Deep navy
    secondary: '#424769',  // Muted blue
    accent: '#7077A1',     // Lavender blue
    light: '#F6F6F6',     // Off white
    highlight: '#E6B9DE'   // Soft pink
  };

  const projects = [
    {
      title: "Hotel Management System",
      description: "A full-stack web application built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB","Tailwind"],
      icon: <Globe className="w-8 h-8 mb-4 text-accent"/>,
      link: "https://github.com/gauravpatil9903/Hotel-management"
    },
    {
      title: "Employee Management System using Chatbot Automation",
      description: "Enabled seamless management of employee data, attendance tracking, leave,requests,performance assessment, and payroll/benefits administration.",
      tags: ["React","Node.js", "Tailwind", "Express"],
      icon: <Palette className="w-8 h-8 mb-4 text-accent" />,
      link: "https://github.com/gauravpatil9903/Tectile-Diagram-"
    },
    {
      title: "Deep Learning based system for unveiling inauthenticity in audio content",
      description: "Developed an initial prototype for voice-activated input, capturing and processing user speech via microphone",
      tags: ["Python","NLP"],
      icon: <Code className="w-8 h-8 mb-4 text-accent" />,
      link: "https://github.com/gauravpatil9903/Design-and-development-of-a-system-to-unveiling-inauthenticity-in-audio-content"
    }
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    const sections = ['home', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: colors.light }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full shadow-lg backdrop-blur-md bg-white/80 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold" style={{ color: colors.primary }}>
              Portfolio
            </a>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Contact'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                  style={{ color: colors.secondary }}
                >
                  {item}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: colors.highlight }}
                  />
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              style={{ color: colors.primary }}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
          
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
            {['Home', 'Projects', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 hover:opacity-70 transition-opacity"
                style={{ color: colors.secondary }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -right-1/4 -top-1/4 w-1/2 h-1/2 bg-white/20" />
          <div className="absolute transform -rotate-45 -left-1/4 -bottom-1/4 w-1/2 h-1/2 bg-white/20" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Gaurav Patil
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up opacity-90">
              Full Stack Developer
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/gauravpatil9903"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
                style={{ color: colors.highlight }}
              > 
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/gauravpatil9903"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-200"
                style={{ color: colors.highlight }}
              > 
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="mailto:gaurav.patil9903@gmail.com"
                className="transform hover:scale-110 transition-transform duration-200"
                style={{ color: colors.highlight }}
              > 
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center" style={{ color: colors.primary }}>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {project.icon}
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ 
                          backgroundColor: `${colors.accent}20`,
                          color: colors.accent
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center hover:opacity-70 transition-opacity"
                    style={{ color: colors.accent }}
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative" style={{ backgroundColor: colors.secondary }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2),transparent)]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Get in Touch
          </h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              {['Name', 'Email'].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2 text-white">
                    {label}
                  </label>
                  <input 
                    type={label.toLowerCase()}
                    className="w-full px-4 py-2 rounded-lg bg-white/90 border-0 focus:ring-2 transition-shadow"
                    style={{ 
                      boxShadow: `0 0 0 2px ${colors.highlight}40`
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg bg-white/90 border-0 focus:ring-2 transition-shadow h-32"
                  style={{ 
                    boxShadow: `0 0 0 2px ${colors.highlight}40`
                  }}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-2 px-4 rounded-lg font-medium transform hover:translate-y-[-2px] transition-all duration-200"
                style={{ 
                  backgroundColor: colors.highlight,
                  color: colors.primary
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
