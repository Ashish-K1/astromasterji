"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { X, Send, MessageCircle } from "lucide-react"

interface Message {
  text: string
  isUser: boolean
}

interface ChatPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatPopup({ isOpen, onClose }: ChatPopupProps) {
  const [messages, setMessages] = useState<Message[]>([{ text: "How may I help you?", isUser: false }])
  const [input, setInput] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])  // store all user answers
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const questions = [
    "How may I help you?",
    "What is your query?",
    "Can you please provide your email I’d and mobile number",
    "Thanks for trusting us, our team will get back to you.",
  ]

  const sendEmail = async (htmlMessage: string) => {
    try {
      await fetch("https://astromasterji.com/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: htmlMessage,
          subject: "New Chat Message",
          name: "Chatbot User"
        })
      })
    } catch (error) {
      console.error("Failed to send email:", error)
    }
  }

  const handleSendMessage = () => {
    if (input.trim() === "") return

    const userMessage = input
    setMessages((prev) => [...prev, { text: userMessage, isUser: true }])
    setAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[currentStep] = userMessage // Save answer for current question
      return newAnswers
    })
    setInput("")

    if (currentStep < questions.length - 1) {
      setTimeout(() => {
        const nextStep = currentStep + 1
        const nextBotMessage = questions[nextStep]

        setCurrentStep(nextStep)
        setMessages((prev) => [...prev, { text: nextBotMessage, isUser: false }])

        // If it's the last step, trigger email with formatted Q&A
        if (nextStep === questions.length - 1) {
          const qaPairs = questions
            .slice(0, questions.length - 1) // exclude last thank you message
            .map((q, i) => {
              const answer = answers[i] ?? (i === currentStep ? userMessage : "")
              return `
                <p style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4; margin-bottom: 12px;">
                  <b style="color: #333;">Q: ${q}</b><br/>
                  A: ${answer}
                </p>`
            })
            .join("")

          sendEmail(qaPairs)
        }
      }, 500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleSendMessage()
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  if (!isOpen) return null

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200">
      {/* Chat header */}
      <div className="bg-yellow-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <MessageCircle className="h-5 w-5 mr-2" />
          <h3 className="font-bold">Chat with Astrologer</h3>
        </div>
        <button onClick={onClose} className="text-gray-800 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto max-h-80">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? "bg-yellow-400 text-black rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      {currentStep < questions.length - 1 && (
        <div className="border-t border-gray-200 p-3 flex">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 mr-2"
          />
          <Button onClick={handleSendMessage} className="bg-yellow-400 hover:bg-yellow-500 text-black" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
