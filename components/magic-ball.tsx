"use client"

interface MagicBallProps {
  isShaking: boolean
  answer: string
  showAnswer: boolean
}

export function MagicBall({ isShaking, answer, showAnswer }: MagicBallProps) {
  return (
    <div className={`relative transition-transform ${isShaking ? "animate-shake" : ""}`}>
      {/* 8-ball outer circle */}
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Main ball */}
        <div className="absolute inset-0 rounded-full bg-white border-8 border-white shadow-2xl">
          <div className="absolute inset-2 rounded-full bg-black" />
        </div>

        {/* Rectangular answer window */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white shadow-lg">
            {/* Answer window background */}
            <div className="absolute inset-1 bg-black flex items-center justify-center p-4">
              <div
                className={`font-mono text-xs md:text-sm font-bold text-white text-center leading-relaxed tracking-wide transition-opacity duration-500 ${
                  showAnswer ? "opacity-100" : "opacity-0"
                }`}
              >
                {answer}
              </div>
            </div>
          </div>
        </div>

        {/* Pixel art shine effect */}
        <div className="absolute top-12 left-12 w-8 h-8 md:w-12 md:h-12 pointer-events-none">
          <div
            className="w-full h-full opacity-30"
            style={{
              background: `
              linear-gradient(135deg, 
                white 0%, 
                white 25%, 
                transparent 25%, 
                transparent 50%,
                white 50%,
                white 75%,
                transparent 75%
              )
            `,
              backgroundSize: "4px 4px",
            }}
          />
        </div>
      </div>
    </div>
  )
}
