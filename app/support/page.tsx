"use client"

import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import Link from "next/link"
import Particles from "../../components/particles"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    toast.success("Support request submitted successfully!")
    setFormData({ name: "", email: "", description: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Particles className="absolute inset-0 -z-10" quantity={80} />
      <Toaster position="top-center" theme="dark" richColors />

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200 duration-200">
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl text-zinc-100">Support</h1>
        <p className="mt-3 text-sm text-zinc-500">We're here to help. Submit a request below.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-zinc-300">
          <div className="space-y-2 max-w-lg">
            <label htmlFor="name" className="text-sm text-zinc-400">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
            />
          </div>

          <div className="space-y-2 max-w-lg">
            <label htmlFor="email" className="text-sm text-zinc-400">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm text-zinc-400">
              Description of issue
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="placeholder:text-zinc-400 selection:bg-primary selection:text-primary-foreground w-full min-w-0 rounded-xl border bg-zinc-900/60 border-zinc-700/60 text-zinc-100 px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
            />
          </div>

          <Button type="submit" size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-12">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
} 