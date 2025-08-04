import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Smartphone, Server, Award, Calendar, GraduationCap, Briefcase, ChevronDown, Menu, X, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "FarmersBazaar",
      description: "Live inventory platform enabling 500+ users to trade produce directly with real-time messaging and secure payments.",
      features: ["40% backend performance improvement", "25% revenue boost via pricing engine", "100+ transactions/month with zero fraud"],
      tech: ["ReactJS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/JayaRam2884/farmers-bazaar",
      live: "#",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "ViharaYatra",
      description: "Intuitive travel planner with dynamic filtering, attracting 1,000+ users with enhanced performance.",
      features: ["50% load time reduction", "200+ destinations via Google Maps API", "35% engagement boost"],
      tech: ["HTML", "CSS", "JavaScript", "Google Maps API"],
      github: "https://github.com/JayaRam2884/vihara-yatra",
      live: "#",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "JobPath",
      description: "Mobile-first React Native app with skill-tagged job suggestions and live API feeds.",
      features: ["40% retention lift", "10+ job sources integration", "60% fluidity boost on low-end devices"],
      tech: ["React Native", "Node.js", "MongoDB", "Reanimated", "Expo"],
      github: "https://github.com/JayaRam2884/job-path",
      live: "#",
      gradient: "from-blue-600 to-blue-800"
    }
  ];

  const skills = {
    "Languages": ["Java", "Python"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "React Native"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Database": ["MongoDB"],
    "Tools": ["Git", "VS Code", "IntelliJ", "Postman", "Expo"]
  };

  const certifications = [
    "IT Specialist: Java (Microsoft)",
    "Azure AI Fundamentals (Microsoft)",
    "Spring Boot Angular Stack (Udemy)",
    "Introduction to NLP (Coursera)",
    "Oracle Database Foundations (Oracle)"
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-inner">
          <div className="nav-content">
            <div className="logo">
              JayaRam
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="mobile-menu-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg"></div>
        <div 
          className="hero-content"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="hero-avatar">
            <div className="hero-avatar-ring">
             <div className="hero-avatar-inner">
  <div className="hero-image-wrapper">
    <img src="../src/assets/my1.jpg" alt="Profile" className="hero-profile-image" />
  </div>
</div>

            </div>
          </div>
          
          <h1 className="hero-title">
            Jaya Ram Eedala
          </h1>
          
          
          <p className="hero-subtitle">
            Full Stack Developer & AI Enthusiast
          </p>
          
          <div className="hero-social">
            <a href="mailto:eedalajayaram@gmail.com" className="hero-social-link">
              <Mail size={24} />
            </a>
            <a href="tel:+917893129568" className="hero-social-link">
              <Phone size={24} />
            </a>
            <a href="https://github.com/JayaRam2884" className="hero-social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jaya-ram-eedala-a173bb247/" className="hero-social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me/917893129568" target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <MessageCircle size={24} />
            </a>

          </div>
          
          <div className="hero-download">
<a href="/Resume(WD).pdf" download className="download-btn">
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
  <span>Download Resume</span>
</a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="scroll-indicator"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            About Me
          </h2>
          
          <div className="grid-2">
            <div className="text-content">
              <p className="text-lg">
                Full Stack Developer with hands-on expertise in Java, Python, React, Node.js, MongoDB, and React Native. 
                I specialize in delivering production-ready solutions that bridge technical excellence with real-world business impact.
              </p>
              
              <p className="text-lg">
                My projects like FarmersBazaar, ViharaYatra, and JobPath have served thousands of users, 
                demonstrating my ability to build scalable APIs, secure data flows, and enhance performance while solving meaningful challenges.
              </p>
              
              <div className="location">
                <MapPin size={20} />
                <span>Eluru, India</span>
              </div>
            </div>
            
            <div className="stats-card">
              <h3 className="stats-title">Quick Stats</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span>Projects Completed</span>
                  <span className="stat-value">5+</span>
                </div>
                <div className="stat-item">
                  <span>Users Served</span>
                  <span className="stat-value">1500+</span>
                </div>
                <div className="stat-item">
                  <span>Technologies Mastered</span>
                  <span className="stat-value">10+</span>
                </div>
                <div className="stat-item">
                  <span>Certifications</span>
                  <span className="stat-value">{certifications.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-bg">
        <div className="container-lg">
          <h2 className="section-title">
            Featured Projects
          </h2>
          
          <div className="grid-3">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className={`project-image animate-gradient`}>
                  <Code size={48} style={{ color: 'white' }} />
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="feature-list">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">• {feature}</div>
                  ))}
                </div>
                
                <div className="tech-list">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} className="project-link">
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">
            Technical Skills
          </h2>
          
          <div className="grid-3">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    {category === 'Languages' && <Code size={20} style={{ color: '#60a5fa' }} />}
                    {category === 'Frontend' && <Smartphone size={20} style={{ color: '#60a5fa' }} />}
                    {category === 'Backend' && <Server size={20} style={{ color: '#60a5fa' }} />}
                    {category === 'Database' && <Database size={20} style={{ color: '#60a5fa' }} />}
                    {category === 'Tools' && <Award size={20} style={{ color: '#60a5fa' }} />}
                  </div>
                  <h3 className="skill-title">{category}</h3>
                </div>
                
                <div className="skill-list">
                  {skillList.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-dot"></div>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-bg">
        <div className="container">
          <h2 className="section-title">
            Experience
          </h2>
          
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <Briefcase size={24} style={{ color: '#60a5fa' }} />
              </div>
              
              <div className="experience-content">
                <h3 className="experience-title">Full Stack Intern</h3>
                <p className="experience-company">Technical Hub</p>
                <div className="experience-date">
                  <Calendar size={16} />
                  <span>May 2024 – Jul 2024</span>
                </div>
                
                <div className="experience-list">
                  <div className="experience-item">
                    <div className="experience-bullet"></div>
                    <span>Contributed to full-stack applications using React, Node.js, Express, and MongoDB in Agile sprints</span>
                  </div>
                  <div className="experience-item">
                    <div className="experience-bullet"></div>
                    <span>Streamlined API logic, boosting response time consistency and scalability</span>
                  </div>
                  <div className="experience-item">
                    <div className="experience-bullet"></div>
                    <span>Practiced version control and team collaboration via GitHub and project boards</span>
                  </div>
                  <div className="experience-item">
                    <div className="experience-bullet"></div>
                    <span>Executed unit and integration testing for critical workflows to maintain user reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">
            Education & Certifications
          </h2>
          
          <div className="education-grid">
            <div className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap size={24} style={{ color: '#60a5fa' }} />
                </div>
                
                <div>
                  <h3 className="education-title">B.Tech in AI & Machine Learning</h3>
                  <p className="education-school">Aditya College Of Engineering and Technology</p>
                  <p className="education-date">Nov 2022 – May 2026</p>
                  <p className="education-grade">CGPA: 7.35 / 10</p>
                  <p className="education-focus">Focus: AI, ML Algorithms, Deep Learning</p>
                </div>
              </div>
            </div>
            
            <div className="education-card">
              <div className="education-header">
                <div className="education-icon">
                  <GraduationCap size={24} style={{ color: '#3b82f6' }} />
                </div>
                
                <div>
                  <h3 className="education-title">Intermediate (MPC)</h3>
                  <p className="education-school">Elite Junior College</p>
                  <p className="education-date">Dec 2020 – May 2022</p>
                  <p className="education-grade">Score: 876 / 1000</p>
                  <p className="education-focus">Focus: Maths, Physics, Chemistry</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="certifications-card">
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <Award size={16} style={{ color: '#60a5fa' }} />
                  <span className="certification-text">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-bg">
        <div className="contact-section">
          <h2 className="contact-title">
            Let's Build Something Amazing Together
          </h2>
          
          <p className="contact-description">
            Ready to collaborate on your next project? Let's connect and create something extraordinary.
          </p>
          
          <div className="contact-grid">
            <a href="mailto:eedalajayaram@gmail.com" className="contact-card">
              <Mail size={32} className="contact-icon" style={{ color: '#60a5fa' }} />
              <h3 className="contact-card-title">Email</h3>
              <p className="contact-card-text">eedalajayaram@gmail.com</p>
            </a>
            
            <a href="tel:+917893129568" className="contact-card">
              <Phone size={32} className="contact-icon" style={{ color: '#3b82f6' }} />
              <h3 className="contact-card-title">Phone</h3>
              <p className="contact-card-text">+91-7893129568</p>
            </a>
            
            <div className="contact-card">
              <MapPin size={32} className="contact-icon" style={{ color: '#2563eb' }} />
              <h3 className="contact-card-title">Location</h3>
              <p className="contact-card-text">Eluru, India</p>
            </div>
          </div>
          
          <div className="contact-social">
            <a href="https://github.com/JayaRam2884" className="contact-social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jaya-ram-eedala-a173bb247/" className="contact-social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://wa.me/917893129568" target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Jaya Ram Eedala. Crafted with React and passion for innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;