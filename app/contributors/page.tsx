import { Poly, Rubik } from 'next/font/google'

const poly = Poly({ weight: '400', subsets: ['latin'] })
const rubik = Rubik({ weight: '400', subsets: ['latin'] })

export default function checkout() {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center md:max-w-[768px] md:text-xl px-6">
      {/* Spacer */}
      <div className="p-10" />

      {/* Header */}
      <header className="z-0 w-full mt-12  text-center">
        <h1 style={poly.style} className="text-5xl mb-2">
          Contributors
        </h1>
        <blockquote className="text-base text-void-300 leading-5 px-2 italic mb-6">
          &quot;Alone we can do so little, together we can do so much.&quot; –
          Helen Keller
        </blockquote>
        <p className="text-base text-void-200 leading-5 md:px-2 md:my-6 text-left my-4">
          We would like to thank the students and members of faculty who have
          helped make this event possible. While not mentioning all who have
          contributed, below is a list of people who have contributed their
          time, effort, and expertise to ensure the success of this event.
        </p>
        <p className="text-base text-void-200 leading-5 md:px-2 md:my-6 mb-4 text-left">
          We would like to express our sincere thanks to the volunteers who,
          while not listed here, have been crucial to the event&apos;s success
          with their behind-the-scenes efforts and support.
        </p>
      </header>

      <div className="w-full mt-6 bg-gradient-to-r from-cherry to-vinyl">
        <h2
          style={rubik.style}
          className="mb-[1px] bg-black text-3xl pb-2 h-full"
        >
          Staff Coordinators
        </h2>
      </div>
      <div className="w-full p-4">
        Dr. G. S. Anandha mala <br />
        Dr. K. M. Anandkumar <br />
        Dr. S. Kayalvizhi <br />
        Mrs. A. Abirami <br />
        Ms. S. Bhuvaneswari <br />
        Dr. Y. Justin Dhas<br />
      </div>

      <div className="w-full mt-6 bg-gradient-to-r from-cherry to-vinyl">
        <h2
          style={rubik.style}
          className="mb-[1px] bg-black text-3xl pb-2 h-full"
        >
          Website Team
        </h2>
      </div>
      <div className="w-full p-4">
        <div className="flex justify-between">
          <p>Nithish Kumar</p>
          {/* <p className="text-void-300 text-right">Design and Development</p> */}
        </div>
        <div className="flex justify-between">
          <p>Rohith C</p>
          {/* <p className="text-void-300 text-right">Development</p> */}
        </div>
      </div>

      <div className="w-full mt-6 bg-gradient-to-r from-cherry to-vinyl">
        <h2
          style={rubik.style}
          className="mb-[1px] bg-black text-3xl pb-2 h-full"
        >
          Office Bearers
        </h2>
      </div>
      <div className="w-full p-4">
        <div className="flex justify-between">
          <p>Janagan U S</p>
          <p className="text-void-300 text-right">President</p>
        </div>
        <div className="flex justify-between">
          <p>Hariharan B</p>
          <p className="text-void-300 text-right">Executive President</p>
        </div>
        <div className="flex justify-between">
          <p>Dinesh S</p>
          <p className="text-void-300 text-right">Treasurer (Sponsorship)</p>
        </div>
        <div className="flex justify-between">
          <p>Saipriya S</p>
          <p className="text-void-300 text-right">Treasurer (Internal)</p>
        </div>
        <div className="flex justify-between">
          <p>Akil Chakravarthi A</p>
          <p className="text-void-300 text-right">Vice President</p>
        </div>
        <div className="flex justify-between">
          <p>Sunjay K S</p>
          <p className="text-void-300 text-right">Secretary</p>
        </div>
        <div className="flex justify-between">
          <p>Mohammed Anees P V</p>
          <p className="text-void-300 text-right">Joint Secretary</p>
        </div>
      </div>

      <div className="w-full mt-6 bg-gradient-to-r from-cherry to-vinyl">
        <h2
          style={rubik.style}
          className="mb-[1px] bg-black text-3xl pb-2 h-full"
        >
          Event Coordinators
        </h2>
      </div>
      <div className="w-full p-4">
      <div className="flex justify-between">
          <p>Muktheeswaran V</p>
          <p className="text-void-300 text-right">Head Of Operations</p>
        </div>
        <div className="flex justify-between">
          <p>Swetha Senthil</p>
          <p className="text-void-300 text-right">
            Associate Head of Operations
          </p>
        </div>
        <div className="flex justify-between">
          <p>Khishore B</p>
          <p className="text-void-300 text-right">Chair Person</p>
        </div>
        <div className="flex justify-between">
          <p>Indirani J</p>
          <p className="text-void-300 text-right">
          Associate Chair Person
          </p>
        </div>
        <div className="flex justify-between">
          <p>Ashwin Kumar S</p>
          <p className="text-void-300 text-right">Executive Head</p>
        </div>
        
        <hr className="border-void-500 my-4" />
        <div className="flex justify-between">
          <p>Deexith P</p>
          <p className="text-void-300 text-right">Technical lead</p>
        </div>
        <div className="flex justify-between">
          <p>Antony Alex Royal M</p>
          <p className="text-void-300 text-right">Technical associate</p>
        </div>
        <div className="flex justify-between">
          <p>Saajan Kumar M B</p>
          <p className="text-void-300 text-right">Non technical lead</p>
        </div>
        <div className="flex justify-between">
          <p>Nithish I</p>
          <p className="text-void-300 text-right">Non technical associate</p>
        </div>
        <div className="flex justify-between">
          <p>Rohidh G C</p>
          <p className="text-void-300 text-right">Digital Head</p>
        </div>
        <div className="flex justify-between">
          <p>Trisha S</p>
          <p className="text-void-300 text-right">Digital Associate</p>
        </div>
        <div className="flex justify-between">
          <p>Shreenidhi K S</p>
          <p className="text-void-300 text-right">Event Manager</p>
        </div>
        <div className="flex justify-between">
          <p>Parithii</p>
          <p className="text-void-300 text-right">Associate Event Manager</p>
        </div>
        <div className="flex justify-between">
          <p>Ganesh s</p>
          <p className="text-void-300 text-right">Event coordinator</p>
        </div>
        <div className="flex justify-between">
          <p>Rohith Kanna K</p>
          <p className="text-void-300 text-right">Associate Event coordinator</p>
        </div>
        <div className="flex justify-between">
          <p>Arunrahul S</p>
          <p className="text-void-300 text-right">Public Relations Officer</p>
        </div>
        <div className="flex justify-between">
          <p>Aadhithya R</p>
          <p className="text-void-300 text-right">Associate Public Relations Officer</p>
        </div>
      </div>
    </main>
  )
}
