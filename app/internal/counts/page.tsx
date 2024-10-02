import { events } from '@/app/events/eventInfo'
import { Poly, Rubik } from 'next/font/google'

const poly = Poly({ weight: '400', subsets: ['latin'] })
const rubik = Rubik({ weight: '400', subsets: ['latin'] })

async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/counts`, {
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Error when fetch counts')
  }
  return (await res.json()).message
}

export default async function Counts() {
  const counts: Map<string, number> = await getData()

  return (
    <main className="min-h-screen">
      {/* Spacer */}
      <div className="p-10" />

      {/* Header */}
      <header className="w-full mt-12 px-4">
        <h1 style={poly.style} className="text-5xl">
          Registration Counts
        </h1>
        <p className="text-base text-void-300 leading-5 mt-2">
          As of {new Date().toLocaleString('en-IN', {timeZone: "Asia/Kolkata"})}. Refresh to see updated
          data.
        </p>
      </header>

      <h2
        style={rubik.style}
        className="border-b-[1px] border-void-500 text-3xl mt-6 pb-2 mb-4"
      >
        Technical Events
      </h2>

      {Array.from(Object.entries(counts))
        .filter(([k, v]) => {
          return events.get(k)?.category === 'technical'
        })
        .map(([k, v]) => {
          return (
            <div key={k} className="flex w-full p-2 px-4 even:bg-void-900">
              <p className="flex-grow">{events.get(k)?.name}</p>
              <p>{v}</p>
            </div>
          )
        })}

      <h2
        style={rubik.style}
        className="border-b-[1px] border-void-500 text-3xl mt-6 pb-2 mb-4"
      >
        Non-Technical Events
      </h2>

      {Array.from(Object.entries(counts))
        .filter(([k, v]) => {
          return events.get(k)?.category === 'nontechnical'
        })
        .map(([k, v]) => {
          return (
            <div key={k} className="flex w-full p-2 px-4 even:bg-void-900">
              <p className="flex-grow">{events.get(k)?.name}</p>
              <p>{v}</p>
            </div>
          )
        })}
    </main>
  )
}
