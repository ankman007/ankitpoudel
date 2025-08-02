"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Code,
  Database,
  Server,
  Bot,
  BarChart3,
  MessageSquare,
  Users,
} from "lucide-react"

export default function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)

  const featuredProjects = [
    {
      title: "eCommerce Platform",
      description:
        "Built full-stack eCommerce app with dynamic UX, integrated Stripe for payments, and used Celery for async tasks with Docker deployment.",
      stack: ["Django", "HTMX", "Stripe API", "Celery", "Redis", "Docker", "PostgreSQL"],
      icon: <Server className="w-6 h-6" />,
      liveDemo: "https://a1albanywholesale.com/",
      github: "https://github.com/ankman007/ecommerce-store",
    },
    {
      title: "RAG-Based Interview Prep Tool",
      description:
        "Built FastAPI backend with LangChain RAG pipeline, embedded resumes & job descriptions for semantic search with context-aware LLM responses.",
      stack: ["FastAPI", "LangChain", "ChromaDB", "Google Gemini API", "Docker", "PostgreSQL", "Next.js"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/ankman007/job-prep-ai",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Real-time messaging with WebSockets, Redis as broker for live message handling, and Daphne ASGI server for async support.",
      stack: ["Django Channels", "WebSockets", "Redis", "Daphne", "HTMX", "PostgreSQL"],
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/ankman007/realtime-chat-app",
    },
  ]

  const additionalProjects = [
    {
      title: "NEPSEWatch",
      description: "Discord bot for NEPSE IPO/FPO alerts and price monitoring with automated notifications.",
      stack: ["Discord.js", "Python", "Web Scraping"],
      icon: <Bot className="w-6 h-6" />,
      github: "https://github.com/ankman007/nepsewatch",
    },
    {
      title: "Cricket StatsGuru",
      description: "Streamlit-based Nepali cricket dashboard with comprehensive statistics and data visualization.",
      stack: ["Streamlit", "Data Viz", "Pandas"],
      icon: <BarChart3 className="w-6 h-6" />,
      github: "https://github.com/ankman007/cricket-statsguru",
    },
    {
      title: "Medium.com Clone",
      description: "Full-stack Medium clone with article publishing, user authentication, and social features.",
      stack: ["Django", "DRF", "Next.js", "PostgreSQL", "Docker", "Redux"],
      icon: <Code className="w-6 h-6" />,
      github: "https://github.com/ankman007/medium.com-clone",
    },
    {
      title: "Message Board",
      description: "Async email board with Celery for background task processing and real-time updates.",
      stack: ["Django", "Redis", "Celery", "HTMX"],
      icon: <MessageSquare className="w-6 h-6" />,
      github: "https://github.com/ankman007/message-board",
    },
    {
      title: "Customer Support System",
      description: "Real-time agent dashboard with queue management and automated ticket routing.",
      stack: ["Django Channels", "RabbitMQ", "DRF", "Celery"],
      icon: <Users className="w-6 h-6" />,
      github: "https://github.com/ankman007/customer-support-system",
    },
  ]

  return (
    <div>
      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-100 rounded-xl text-slate-600">{project.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-slate-900">{project.title}</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 text-xs border-0">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              {project.liveDemo && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-slate-200 hover:bg-slate-50 bg-transparent"
                  onClick={() => window.open(project.liveDemo, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Live Demo
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                className={`${project.liveDemo ? "flex-1" : "w-full"} border-slate-200 hover:bg-slate-50 bg-transparent`}
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mb-8">
        <Button
          variant="outline"
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-2 border-slate-200 hover:bg-slate-50"
        >
          {showMore ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              Show Less Projects
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              View More Projects
            </>
          )}
        </Button>
      </div>

      {/* Additional Projects */}
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-top-4 duration-300">
          {additionalProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-600">{project.icon}</div>
                <h3 className="font-heading text-lg font-semibold text-slate-900">{project.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700 text-xs border-0">
                    {tech}
                  </Badge>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-200 hover:bg-slate-50 bg-transparent"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
