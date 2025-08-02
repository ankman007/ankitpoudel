"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calendar, ArrowUpRight } from "lucide-react"

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
  categories: string[]
}

export default function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog")
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const data = await response.json()
        setPosts(data.posts)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch {
      return "Recently"
    }
  }

  if (loading) {
    return (
      <div>
        <div className="space-y-8 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-pulse">
              <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-1/2 mb-6"></div>
              <div className="space-y-3 mb-6">
                <div className="h-3 bg-slate-200 rounded"></div>
                <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                <div className="h-3 bg-slate-200 rounded w-4/5"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
              </div>
              <div className="flex gap-2 mb-6">
                <div className="h-6 bg-slate-200 rounded w-16"></div>
                <div className="h-6 bg-slate-200 rounded w-20"></div>
              </div>
              <div className="h-10 bg-slate-200 rounded w-32"></div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="h-10 bg-slate-200 rounded w-48 mx-auto"></div>
        </div>
      </div>
    )
  }

  if (error || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <p className="text-slate-600 mb-6">
            {error
              ? "Unable to load blog posts at the moment. The Medium profile might not be available yet."
              : "No blog posts found."}
          </p>
          <Button
            variant="outline"
            className="border-slate-200 hover:bg-slate-50 bg-transparent"
            onClick={() => window.open("https://medium.com/@ankitpoudel_", "_blank")}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Medium Profile
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="space-y-8 mb-12">
        {posts.slice(0, 4).map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col"
          >
            {/* Title - Full title, no truncation */}
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-slate-700 transition-colors">
              {post.title}
            </h3>

            {/* Date */}
            <div className="flex items-center gap-2 text-slate-500 mb-6">
              <Calendar className="w-4 h-4 flex-shrink-0" />
              <time dateTime={post.pubDate} className="text-sm font-medium">
                {formatDate(post.pubDate)}
              </time>
            </div>

            {/* Full Description - No truncation, allow line breaks */}
            <div className="flex-grow mb-6">
              <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">{post.description}</p>
            </div>

            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map((category) => (
                  <Badge key={category} variant="secondary" className="bg-slate-100 text-slate-700 border-0 text-xs">
                    {category}
                  </Badge>
                ))}
              </div>
            )}

            {/* Read More Button */}
            <Button
              variant="outline"
              className="w-fit border-slate-200 hover:bg-slate-50 bg-transparent group-hover:border-slate-300 transition-colors self-start"
              onClick={() => window.open(post.link, "_blank")}
            >
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </article>
        ))}
      </div>

      {/* View All on Medium Button */}
      <div className="text-center">
        <Button
          variant="outline"
          size="lg"
          className="px-8 py-3 border-slate-200 hover:bg-slate-50 bg-transparent font-medium"
          onClick={() => window.open("https://medium.com/@ankitpoudel_", "_blank")}
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          View All on Medium
        </Button>
      </div>
    </div>
  )
}
