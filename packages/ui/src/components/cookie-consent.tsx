"use client"

import { useEffect, useState } from "react"
import { Grainient } from "./grainient"

const STORAGE_KEY = "cookie-consent"

export type CookieConsentChoice = "accepted" | "declined"

export interface CookieConsentProps {
  /** Called when the user makes a choice */
  onConsent?: (choice: CookieConsentChoice) => void
  /** Grainient color 1 */
  color1?: string
  /** Grainient color 2 */
  color2?: string
  /** Grainient color 3 */
  color3?: string
}

export function CookieConsent({
  onConsent,
  color1 = "#0c8d37",
  color2 = "#cdd5d0",
  color3 = "#022712",
}: CookieConsentProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  const handleChoice = (choice: CookieConsentChoice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
    onConsent?.(choice)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-full max-w-md -translate-x-1/2 px-4">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        {/* Grainient background */}
        <div className="absolute inset-0">
          <Grainient
            color1={color1}
            color2={color2}
            color3={color3}
            timeSpeed={0.55}
            colorBalance={0.09}
            warpStrength={0.3}
            warpFrequency={2.9}
            warpSpeed={1.2}
            warpAmplitude={71}
            blendAngle={0}
            blendSoftness={0.37}
            rotationAmount={500}
            noiseScale={2.6}
            grainAmount={0.08}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1.2}
            centerX={0}
            centerY={0}
            zoom={0.8}
          />
        </div>

        {/* Frosted overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4 p-5">
          <div className="flex items-start  gap-3">
            {/* <span className="text-xl select-none" aria-hidden>
              🍪
            </span> */}
            <div>
              <p className="text-sm leading-snug font-semibold text-white">
                We use cookies
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                We use cookies to improve your experience, analyze site traffic,
                and personalize content. You can accept or decline non-essential
                cookies.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-2">
            <button
              onClick={() => handleChoice("declined")}
              className="cursor-pointer rounded-lg border border-white/20 px-4 py-1.5 text-xs font-medium text-white/70 transition-colors hover:bg-white/10"
            >
              Decline
            </button>
            <button
              onClick={() => handleChoice("accepted")}
              className="cursor-pointer rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-purple-900 transition-colors hover:bg-white/90"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
