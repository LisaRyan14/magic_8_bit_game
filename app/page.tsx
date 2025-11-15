"use client"

import { useState } from "react"
import { MagicBall } from "@/components/magic-ball"
import { QuestionInput } from "@/components/question-input"

export default function Home() {
  const [question, setQuestion] = useState("")
  const [isShaking, setIsShaking] = useState(false)
  const [answer, setAnswer] = useState("")
  const [showAnswer, setShowAnswer] = useState(false)

  const answers = [
    "IT IS CERTAIN",
    "IT IS DECIDEDLY SO",
    "WITHOUT A DOUBT",
    "YES DEFINITELY",
    "YOU MAY RELY ON IT",
    "AS I SEE IT YES",
    "MOST LIKELY",
    "OUTLOOK GOOD",
    "YES",
    "SIGNS POINT TO YES",
    "REPLY HAZY TRY AGAIN",
    "ASK AGAIN LATER",
    "BETTER NOT TELL YOU NOW",
    "CANNOT PREDICT NOW",
    "CONCENTRATE AND ASK AGAIN",
    "DON'T COUNT ON IT",
    "MY REPLY IS NO",
    "MY SOURCES SAY NO",
    "OUTLOOK NOT SO GOOD",
    "VERY DOUBTFUL",
  ]

  const handleSubmit = () => {
    if (!question.trim()) return

    // Play shake sound
    const audio = new Audio("/8-bit-shake-sound-effect.jpg")
    audio.play().catch(() => {}) // Catch in case autoplay is blocked

    setIsShaking(true)
    setShowAnswer(false)

    // Shake for 1.5 seconds
    setTimeout(() => {
      setIsShaking(false)
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
      setAnswer(randomAnswer)

      // Show answer after shake
      setTimeout(() => {
        setShowAnswer(true)
        // Play answer reveal sound
        const revealAudio = new Audio("/8-bit-reveal-sound-effect.jpg")
        revealAudio.play().catch(() => {})
      }, 300)
    }, 1500)
  }

  const handleClear = () => {
    setQuestion("")
    setAnswer("")
    setShowAnswer(false)
    setIsShaking(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden" style={{ backgroundColor: '#8B4513' }}>
      {/* Wooden rails - top */}
      <div className="absolute top-0 left-0 right-0 h-16 md:h-20" style={{ 
        background: 'linear-gradient(180deg, #6B4423 0%, #8B4513 50%, #A0522D 100%)',
        borderBottom: '4px solid #654321'
      }} />
      
      {/* Wooden rails - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20" style={{ 
        background: 'linear-gradient(0deg, #6B4423 0%, #8B4513 50%, #A0522D 100%)',
        borderTop: '4px solid #654321'
      }} />
      
      {/* Wooden rails - left */}
      <div className="absolute left-0 top-16 bottom-16 md:top-20 md:bottom-20 w-16 md:w-20" style={{ 
        background: 'linear-gradient(90deg, #6B4423 0%, #8B4513 50%, #A0522D 100%)',
        borderRight: '4px solid #654321'
      }} />
      
      {/* Wooden rails - right */}
      <div className="absolute right-0 top-16 bottom-16 md:top-20 md:bottom-20 w-16 md:w-20" style={{ 
        background: 'linear-gradient(270deg, #6B4423 0%, #8B4513 50%, #A0522D 100%)',
        borderLeft: '4px solid #654321'
      }} />

      {/* Pool table felt - main playing surface */}
      <div 
        className="absolute inset-16 md:inset-20"
        style={{
          backgroundColor: '#0d4f3c',
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )
          `,
        }}
      />

      {/* Corner pockets */}
      <div className="absolute top-12 left-12 w-8 h-8 md:top-16 md:left-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />
      <div className="absolute top-12 right-12 w-8 h-8 md:top-16 md:right-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />
      <div className="absolute bottom-12 left-12 w-8 h-8 md:bottom-16 md:left-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />
      <div className="absolute bottom-12 right-12 w-8 h-8 md:bottom-16 md:right-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />
      
      {/* Side pockets */}
      <div className="absolute top-1/2 left-12 -translate-y-1/2 w-8 h-8 md:left-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-8 h-8 md:right-16 md:w-12 md:h-12 rounded-full bg-black opacity-60" />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl">
        <div className="text-center space-y-4">
          <h1 className="font-mono text-4xl md:text-6xl font-bold text-white tracking-wider pixel-text drop-shadow-lg" style={{ textShadow: '3px 3px 0px rgba(0, 0, 0, 0.5)' }}>
            MAGIC 8-BIT BALL
          </h1>
          <p className="font-mono text-sm md:text-base text-white/90 tracking-wide drop-shadow-md">
            {">"} ASK A YES/NO QUESTION {"<"}
          </p>
        </div>

        <MagicBall isShaking={isShaking} answer={answer} showAnswer={showAnswer} />

        <QuestionInput question={question} setQuestion={setQuestion} onSubmit={handleSubmit} onClear={handleClear} disabled={isShaking} />

        <div className="font-mono text-xs text-white/70 text-center tracking-wider drop-shadow-sm">
          PRESS [ENTER] OR CLICK [ASK] TO CONSULT THE 8-BALL
        </div>
      </div>
    </main>
  )
}
