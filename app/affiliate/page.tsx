"use client"

import { useState } from "react"
import { toast, Toaster } from "sonner"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import Link from "next/link"
import Particles from "../../components/particles"

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    discordUsername: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Send notification to Discord
    const discordMessage = {
      embeds: [{
        title: "🎯 New A17 Creator Network Application!",
        color: 0x00ff00, // Green color
        fields: [
          { 
            name: "👤 Name", 
            value: `${formData.firstName} ${formData.lastName}`, 
            inline: true 
          },
          { 
            name: "💬 Discord", 
            value: formData.discordUsername, 
            inline: true 
          },
          { 
            name: "📱 Phone", 
            value: formData.phoneNumber || "Not provided", 
            inline: true 
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "A17 Creator Network Application"
        }
      }]
    }

    try {
      const response = await fetch('https://discord.com/api/webhooks/1413349769509736478/68_Xb-B22ngXDhK6cS57U4NYmJUyKeyi6xc6GYkHR8xEDhx-m2_v2IXTvt0lBNVP9ykJ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage)
      })

      if (response.ok) {
        toast.success("Affiliate application submitted successfully!")
        console.log("Affiliate application submitted:", formData)
        setFormData({ 
          firstName: "", 
          lastName: "", 
          phoneNumber: "", 
          discordUsername: ""
        })
      } else {
        throw new Error('Failed to send Discord notification')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      toast.error("Something went wrong. Please try again or contact support.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

        <h1 className="text-4xl sm:text-5xl text-zinc-100">Apply to the A17 Creator Network</h1>
        <p className="mt-3 text-sm text-zinc-500">Join our creator network and start earning with us.</p>
        
        <div className="mt-6 mb-8">
          <p className="text-sm text-zinc-400 mb-2">Join our community:</p>
          <Link 
            href="https://discord.gg/BgC85Uj75y" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.195.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join our Discord Server
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-zinc-300">
          <div className="space-y-2 max-w-lg">
            <label htmlFor="firstName" className="text-sm text-zinc-400">
              What's your first name? <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60"
            />
          </div>

          <div className="space-y-2 max-w-lg">
            <label htmlFor="lastName" className="text-sm text-zinc-400">
              What's your last name? <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60"
            />
          </div>

          <div className="space-y-2 max-w-lg">
            <label htmlFor="phoneNumber" className="text-sm text-zinc-400">
              What's your phone number?
            </label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1 301 456 7890"
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60"
            />
          </div>

          <div className="space-y-2 max-w-lg">
            <label htmlFor="discordUsername" className="text-sm text-zinc-400">
              What's your Discord username? <span className="text-red-400">*</span>
            </label>
            <Input
              type="text"
              id="discordUsername"
              name="discordUsername"
              value={formData.discordUsername}
              onChange={handleChange}
              placeholder="john.smith"
              required
              className="h-11 bg-zinc-900/60 text-zinc-100 placeholder:text-zinc-400 border-zinc-700/60"
            />
          </div>


          <Button type="submit" size="lg" className="bg-white text-black hover:bg-white/90 h-12">
            SUBMIT
          </Button>
        </form>
      </div>
    </div>
  )
}
