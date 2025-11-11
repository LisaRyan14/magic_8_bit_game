"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface QuestionInputProps {
  question: string
  setQuestion: (q: string) => void
  onSubmit: () => void
  disabled: boolean
}

export function QuestionInput({ question, setQuestion, onSubmit, disabled }: QuestionInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !disabled) {
      onSubmit()
    }
  }

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="ENTER YOUR QUESTION..."
          disabled={disabled}
          className="w-full h-14 px-6 font-mono text-base md:text-lg bg-black border-4 border-white text-white placeholder:text-white/40 focus:outline-none focus:ring-4 focus:ring-white/50 disabled:opacity-50 tracking-wide"
        />
      </div>

      <Button
        onClick={onSubmit}
        disabled={disabled || !question.trim()}
        className="w-full h-14 font-mono text-lg md:text-xl font-bold bg-white text-black hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-white tracking-wider transition-all active:scale-95"
      >
        {disabled ? "[ SHAKING... ]" : "[ ASK THE 8-BALL ]"}
      </Button>
    </div>
  )
}
