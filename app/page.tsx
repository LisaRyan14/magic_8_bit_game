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

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Pixel art grid pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
          linear-gradient(0deg, transparent 24%, white 25%, white 26%, transparent 27%, transparent 74%, white 75%, white 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, white 25%, white 26%, transparent 27%, transparent 74%, white 75%, white 76%, transparent 77%, transparent)
        `,
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-2xl">
        <div className="text-center space-y-4">
          <h1 className="font-mono text-4xl md:text-6xl font-bold text-white tracking-wider pixel-text">
            MAGIC 8-BIT BALL
          </h1>
          <p className="font-mono text-sm md:text-base text-white/80 tracking-wide">
            {">"} ASK A YES/NO QUESTION {"<"}
          </p>
        </div>

        <MagicBall isShaking={isShaking} answer={answer} showAnswer={showAnswer} />

        <QuestionInput question={question} setQuestion={setQuestion} onSubmit={handleSubmit} disabled={isShaking} />

        <div className="font-mono text-xs text-white/60 text-center tracking-wider">
          PRESS [ENTER] OR CLICK [ASK] TO CONSULT THE 8-BALL
        </div>
      </div>
    </main>
  )
}
