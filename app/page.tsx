import {
  Download,
  Code,
  Database,
  Server,
  Wrench,
  ExternalLink,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import SectionDivider from "@/components/section-divider";

export default function Portfolio() {
  const skills = {
    "Programming Languages": [
      "Python",
      "SQL",
      "Bash",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    "Frameworks & Libraries": [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Celery",
      "HTMX",
    ],
    "Databases & Caching": ["PostgreSQL", "MySQL", "Redis"],
    "DevOps & Tools": [
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Postman",
      "Pytest",
    ],
    "Data Automation": ["Beautiful Soup", "Playwright", "n8n"],
  };

  const skillIcons = {
    "Programming Languages": <Code className="w-5 h-5" />,
    "Frameworks & Libraries": <Server className="w-5 h-5" />,
    "Databases & Caching": <Database className="w-5 h-5" />,
    "DevOps & Tools": <Wrench className="w-5 h-5" />,
    "Data Automation": <ExternalLink className="w-5 h-5" />,
  };

  const coursework = [
    "Web Programming",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Design",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center hero-pattern"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Ankit Poudel
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 font-medium">
              Backend Developer | Building Scalable &amp; Robust Web
              Applications
            </p>
            <a
              href="/Ankit_Poudel_Resume.pdf"
              download
              className="inline-block cursor-pointer"
            >
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 cursor-pointer text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 gradient-bg-1">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              About Me
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Aspiring software engineer from Kathmandu, Nepal. I specialize in
              managing large datasets and building interactive, scalable web
              solutions. Currently pursuing a Bachelor's in Information
              Management, I'm passionate about backend systems, automation, and
              AI-powered tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl font-bold text-slate-900 text-center mb-12">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                      {skillIcons[category as keyof typeof skillIcons]}
                    </div>
                    <h4 className="font-heading font-semibold text-slate-900">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-0"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}

          {/* Experience */}
          <div className="mb-20">
            <h3 className="font-heading text-2xl font-bold text-slate-900 text-center mb-12">
              Experience
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h4 className="font-heading text-xl font-semibold text-slate-900 mb-2 sm:mb-0">
                  Frontend Engineer (Internship)
                </h4>
                <span className="text-slate-600 font-medium">
                  May 2024 – July 2024
                </span>
              </div>
              <p className="text-slate-600 font-medium mb-4">CodeSQAD</p>
              <ul className="list-disc list-inside space-y-3 text-slate-700 pl-1">
                <li>
                  Built real-time chat using Socket.io and Next.js for seamless
                  communication
                </li>
                <li>Improved state management with Redux Toolkit</li>
                <li>Integrated REST APIs for dynamic data rendering</li>
                <li>
                  Collaborated in agile sprints and code reviews to improve UX
                  and performance
                </li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 text-center mb-12">
              Education
            </h3>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h4 className="font-heading text-xl font-semibold text-slate-900 mb-2 sm:mb-0">
                  Bachelor's in Information Management
                </h4>
                <span className="text-slate-600 font-medium">2022 - 2026</span>
              </div>

              <div className="flex items-center gap-2 text-slate-600 mb-4">
                <BookOpen className="w-4 h-4" />
                <span>National College of Computer Studies (NCCS)</span>
              </div>

              <div>
                <h5 className="font-semibold text-slate-800 mb-3">
                  Relevant Coursework:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <Badge
                      key={course}
                      variant="outline"
                      className="border-slate-300 text-slate-600 bg-slate-50"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="projects" className="py-24 gradient-bg-2">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in backend
              development, automation, and full-stack solutions.
            </p>
          </div>
          <ProjectsSection />
        </div>
      </section>

      <SectionDivider />

      <section id="blogs" className="py-24 gradient-bg-1">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Latest Writings
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Thoughts and insights on backend development, automation, and
              emerging technologies.
            </p>
          </div>
          <BlogSection />
        </div>
      </section>

      <SectionDivider />

      <section id="contact" className="py-24 gradient-bg-2">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ContactSection />
        </div>
      </section>

      <footer className="py-5 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-slate-500 font-medium">
            © {new Date().getFullYear()} Ankit Poudel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
