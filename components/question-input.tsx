"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface QuestionInputProps {
  question: string
  setQuestion: (q: string) => void
  onSubmit: () => void
  onClear: () => void
  disabled: boolean
}

export function QuestionInput({ question, setQuestion, onSubmit, onClear, disabled }: QuestionInputProps) {
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
          className="w-full h-14 px-6 font-mono text-base md:text-lg bg-white/95 border-4 border-amber-900 text-amber-900 placeholder:text-amber-700/60 focus:outline-none focus:ring-4 focus:ring-amber-700/50 disabled:opacity-50 tracking-wide shadow-lg"
          style={{ 
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>

      <div className="flex gap-4">
        <Button
          onClick={onSubmit}
          disabled={disabled || !question.trim()}
          className="flex-1 h-14 font-mono text-lg md:text-xl font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed border-4 tracking-wider transition-all active:scale-95 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
            borderColor: '#654321',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          onMouseEnter={(e) => {
            if (!disabled && question.trim()) {
              e.currentTarget.style.background = 'linear-gradient(135deg, #A0522D 0%, #CD853F 50%, #DEB887 100%)'
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled && question.trim()) {
              e.currentTarget.style.background = 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)'
            }
          }}
        >
          {disabled ? "[ SHAKING... ]" : "[ ASK THE 8-BALL ]"}
        </Button>
        <Button
          onClick={onClear}
          disabled={disabled}
          variant="outline"
          className="h-14 font-mono text-base md:text-lg font-bold text-amber-900 border-4 border-amber-900 bg-white/95 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider transition-all active:scale-95 shadow-lg hover:bg-white"
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
        >
          [ CLEAR ]
        </Button>
      </div>
    </div>
  )
}
