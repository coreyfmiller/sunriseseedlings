import { Snowflake } from "lucide-react"

export function SeasonBanner() {
  return (
    <div className="bg-garden-green px-4 py-3 text-center text-sm font-bold text-white md:text-base">
      <p className="flex items-center justify-center gap-2">
        <Snowflake className="h-4 w-4" aria-hidden="true" />
        Thanks for an amazing season! We&apos;re closed for now — see you in Spring 2027!
        <Snowflake className="h-4 w-4" aria-hidden="true" />
      </p>
    </div>
  )
}
