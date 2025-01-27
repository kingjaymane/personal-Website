"use client";

import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, ChevronDown, ExternalLink, Code2, Database, Terminal, Briefcase, GraduationCap, User2 } from 'lucide-react';
import ProjectsGrid from './components/ProjectsGrid';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>JM</h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-blue-500 transition-colors capitalize`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative bg-cover bg-center text-white min-h-screen flex items-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2021/03/19/13/35/computer-6107592_1280.png')" }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-6 py-24 z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/profile_picture.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Welcome,<br /> I'm <span className="text-blue-300">Jerhald Mercado</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">Full Stack Software Engineer & Data Analyst</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
                <a 
                  href="mailto:mercadojerhald@gmail.com" 
                  className="flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
                <a 
                  href="https://github.com/kingjaymane" 
                  className="flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:translate-y-1 transition-transform duration-300"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <User2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Professional Summary</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate Software Engineer with dual degrees in Computer Science and Geology. Skilled at writing clear, concise code that is easy to maintain and troubleshoot. Proficient in collaborating with teams on diverse projects while also excelling at independently managing contract work in web development. Able to work independently in remote locations or in office environments as needed by the company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            
            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Flexie Inc */}
              <div className="relative mb-12">
                <div className="md:w-1/2 md:ml-auto md:pl-8 group">
                  <div className="absolute left-0 md:left-0 top-0 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold">Full Stack Software Engineer</h3>
                      <span className="text-blue-600 font-medium">September 2024 - Present</span>
                    </div>
                    <h4 className="text-xl text-blue-600 mb-4">Flexie Inc.</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Implemented APIs now live in the Flexie mobile app</li>
                      <li>Built various APIs using an MVC framework</li>
                      <li>Utilized React, Next.js, and Tailwind CSS to implement an authorization app</li>
                      <li>Created and optimized complex SQL queries</li>
                      <li>Developed comprehensive test suites using Jest</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Freelance */}
              <div className="relative">
                <div className="md:w-1/2 md:mr-auto md:pr-8 group">
                  <div className="absolute left-0 md:left-full top-0 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold">Freelance Full Stack Developer</h3>
                      <span className="text-blue-600 font-medium">June 2023 - September 2024</span>
                    </div>
                    <h4 className="text-xl text-blue-600 mb-4">Self-Employed, Fayetteville, NC</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Designed and developed custom websites for various industries</li>
                      <li>Implemented SEO strategies and optimized user experience</li>
                      <li>Provided tailored solutions and ongoing support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProjectsGrid />

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Code2 className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <Code2 className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {['HTML/CSS', 'JavaScript/TypeScript', 'Java', 'Python', 'C/C++', 'SQL'].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Technologies</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {['React & Next.js', 'Angular', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Linux'].map((tech) => (
                    <li key={tech} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <Terminal className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Tools</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  {['Git & GitHub', 'VS Code', 'Jenkins', 'Jira', 'RESTful APIs', 'TensorFlow'].map((tool) => (
                    <li key={tool} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-semibold">East Carolina University</h3>
                    <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      Greenville, NC
                    </div>
                  </div>
                  <div className="space-y-2 text-lg text-gray-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <p>Bachelor's in Computer Science (2021-2024)</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <p>Bachelor's in Geology (2018-2021)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="mailto:mercadojerhald@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/kingjaymane" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="tel:9102869575" className="hover:text-blue-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} Jerhald Mercado. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;