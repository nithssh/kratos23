'use client'

import arrow_right from '@/public/arrow_right_dark.svg'
import attach_file from '@/public/attach_file.svg'
import qr from '@/public/qr.png'
import tick_green from '@/public/tick_green.svg'
import { Poly, Rubik } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  PersonalDetails,
  Selected,
  TeamDetail,
  getCookie,
  removeSelectedEvent,
  removeTeamDetails,
} from '../cookies'
import { events } from '../events/eventInfo'
import PersonalDetailsCard from './PersonalDetailsCard'
import SoloEvent from './SoloEvent'
import TeamEvent from './TeamEvent'

const poly = Poly({ weight: ['400'], subsets: ['latin'] })
const rubik = Rubik({ weight: ['400'], subsets: ['latin'] })

export default function Bag() {
  // Note: addedEvents is set on first render only, not updated after that
  //Nithish:gg for writing the above line ig this was the issue
  const [addedEvents, setAddedEvents] = useState<string[]>()
  const [loading, setLoading] = useState(true)
  // const [screenshotFile, setScreenshotFile] = useState<File>()
  const [submissionProcesssing, setSubmissionProcessing] = useState(false)
  const [totalFee, setTotalFee] = useState(0)
  const router = useRouter()

  useEffect(() => {

    if (typeof window !== undefined) {
      // Load the selected events from cookies to a state variable
      const selected = getCookie<Selected>('selected')
      if (selected) {
        setAddedEvents(selected.events)
      }
    //  console.log(addedEvents)
      // checks if any of the added events are sold out and removes them
      const removeFilledEvents = (counts: { [key: string]: number }) => {
       
        const eventsTemp = getCookie<Selected>('selected')
         
        
        // if (!addedEvents) {
        //   //need to fix the addedEvents part
        //   console.log("no events added")
        //   return
        // }
        if(eventsTemp.events.length === 0)
        {
          console.log("no events added")
          return
        }


        for (let eventCode of eventsTemp.events) {
          const ev = events.get(eventCode)!
          if (ev.maxTeams === 'unlimited') continue


          if (counts[eventCode] >= ev.maxTeams) {
            // Remove the event from cookies
            console.log("removing " + eventCode) 
            removeSelectedEvent(eventCode)
            removeTeamDetails(eventCode)
          }
        }
        // update the added events state var
        setAddedEvents(getCookie<Selected>('selected')!.events)
      }

      fetch('/api/counts').then((v) => {
        v.json().then((v) => {
          removeFilledEvents(v.message)
        })
      })

      setLoading(false)
    }
  }, [])

  useEffect(() => {
    updateTotalFee()
  }, [addedEvents])

  // Gets the total fee of all selected events, including unfilled ones
  function updateTotalFee() {
    if (!hasAddedEvents()) {
      setTotalFee(0)
      return
    }

    let fee = addedEvents!
      .map<number>((code) => getFilledEventFee(code))
      .reduce((ac, x) => ac + x, 0)

    setTotalFee(fee)
  }

  // Gets the filled in team size for a variable sized event
  function getTeamSize(evCode: string): number {
    const teamDetail = getCookie<TeamDetail>(evCode)
    let teamSize = 1
    teamSize += teamDetail?.member1 ? 1 : 0
    teamSize += teamDetail?.member2 ? 1 : 0
    teamSize += teamDetail?.member3 ? 1 : 0
    return teamSize
  }

  // Finds the calculated variable fee for a given event
  function getFilledEventFee(evCode: string): number {
    const ev = events.get(evCode)!
    if (ev.fee.type == 'flat') {
      return ev.fee.amount
    } else {
      return getTeamSize(evCode) * ev.fee.amount
    }
  }

  function hasAddedEvents(): boolean {
    if (!addedEvents) {
      // the cookie isn't even set
      return false
    }
    if (addedEvents.length === 0) {
      // the cookie is set to empty value
      return false
    }
    return true
  }

  async function validateAndSubmit() {
    // disabled
    if (!hasAddedEvents()) {
      return
    }

    // Check if personal details are entered
    const personal = getCookie<PersonalDetails>('personal')
    if (!personal) {
      const element = document.getElementById('personal')!
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
        setTimeout(() => {
          element.style.border = '2px solid red'
        }, 100)
        setTimeout(() => {
          element.style.border = ''
        }, 1100)
        return
    }

    // Check if all the team events are entered
    for (let evCode of addedEvents!) {
      const ev = events.get(evCode)!
      const teamDetails = getCookie<TeamDetail>(evCode)
      if (!teamDetails && ev.type !== 'solo') {
        const element = document.getElementById(evCode)!
        element.scrollIntoView({ block: 'center', behavior: 'smooth' })
        setTimeout(() => {
          element.style.border = '2px solid red'
        }, 100)
        setTimeout(() => {
          element.style.border = ''
        }, 1100)
        return
      }
    }

    // Check if the screenshot is attached
    // if (!screenshotFile) {
    //   const element = document.getElementById('pay')!
    //   element.scrollIntoView({ block: 'center', behavior: 'smooth' })
    //   setTimeout(() => {
    //     element.style.border = '2px solid red'
    //   }, 100)
    //   setTimeout(() => {
    //     element.style.border = ''
    //   }, 1100)
    //   return
    // }

    // disable button and show loading state for submit button
    setSubmissionProcessing(true)

    // submit the form and handle the response
    const formData = new FormData()
    // formData.set('screenshot', screenshotFile)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
      console.log(res)
      if (!res.ok) {
        alert(
          `Sorry, an error occured when handling the request. ${
            (await res.json()).message
          }`
        )
        throw new Error()
      } else {
        router.push('/success')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    // HACK this is needed since we don't have any other way to propagate the
    // TeamDetail changes upwards in this current design. We could do things
    // with refs, and move part of the (TeamDetail) state management up here.
    <main
      className="min-h-screen px-4 md:max-w-[600px]"
      onClick={updateTotalFee}
    >
      {/* Spacer */}
      <div className="p-10" />

      {/* Header */}
      <header className="w-full mt-12 ">
        <h1 style={poly.style} className="text-5xl">
          Your Bag
        </h1>
        <p className="text-base text-void-300 leading-5 mt-2">
          Enter your details below to complete the registration process
        </p>
      </header>

      <PersonalDetailsCard />

      <h2
        style={rubik.style}
        className="border-b-[1px] border-void-500 text-3xl mt-6 pb-2"
      >
        Added Events
      </h2>

      {addedEvents?.map((event, idx) => {
        if (events.get(event)?.type == 'team') {
          return (
            <TeamEvent
              key={idx}
              eventCode={event}
              deleteHandler={() => {
                removeSelectedEvent(event)
                removeTeamDetails(event)
                setAddedEvents(addedEvents.filter((ev) => ev !== event))
              }}
            />
          )
        } else {
          return (
            <SoloEvent
              key={idx}
              eventCode={event}
              deleteHandler={() => {
                removeSelectedEvent(event)
                setAddedEvents(addedEvents.filter((ev) => ev !== event))
              }}
            />
          )
        }
      })}

      <div className="px-2 grid text-center place-content-center">
        {loading && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 mt-4 text-gray-200 animate-spin dark:text-void-700 fill-cherry"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {!loading && (!addedEvents || addedEvents?.length == 0) && (
          <p className="pt-4">No events added</p>
        )}
      </div>

      <div className="border-void-500 border-t-[1px] text-2xl p-4 text-right mt-4">
        <h4>
          Total:
          <span className="ml-3 font-medium">₹{totalFee}</span>
        </h4>
      </div>

      {/* Payment Prompt */}
      <div
        id="pay"
        className="transition bg-void-700 p border-[1px] border-void-500 rounded-lg my-6"
      >
        {/* Top Row */}
        <div className="border-b-[1px] border-void-500 flex items-center">
          {/* QR */}
          <Image
            src={qr}
            className="max-w-[33.3%] object-contain p-2"
            alt="QR code for the payment"
          />
          <div className="p-4 w-2/3">
            {/* Prompt */}
            <h4 className="text-center text-xl">
              UPI ₹{totalFee} to this QR code or VPA
            </h4>
            {/* Mobile No */}
            <h4
              className="text-center text-lg md:text-2xl mt-3"
              style={rubik.style}
            >
              saipriyalaksen272@oksbi
            </h4>
          </div>
        </div>

        {/* Bottom Row */}
        {/* <form className="flex justify-center"> */}
          {/* Hidden input to capture the input */}
          {/* <input
            id="file"
            type="file"
            name="screenshot"
            style={{ display: 'none' }}
            accept="image/*"
            onInput={(e) => {
              // update the state to conain the selected file
              setScreenshotFile(e.currentTarget.files?.[0])
            }}
          /> */}

          {/* Attach Button */}
          {/* 
            Note: This styled button triggers the file input prompt. The file 
            selected is set to the state by the onInput handler of the file input 
            element. Ultimately the data submission is handled by the submission 
            button at the bottom of the page.
          */}
          {/* <button
            type="button"
            className="flex justify-center gap-2 p-4 cursor-pointer text-xl w-full"
            onClick={(e) => {
              document.getElementById('file')!.click()
            }}
          >
            {!screenshotFile && (
              <p className="bg-gradient-to-br from-cherry to-vinyl bg-clip-text text-transparent w-fit">
                Attach the screenshot
              </p>
            )}

            {screenshotFile && (
              <p className="text-green-500 w-fit">Screenshot attached</p>
            )}

            <Image
              src={screenshotFile ? tick_green : attach_file}
              alt=""
              width={24}
              height={24}
            />
          </button>
        </form> */}
      </div>

      {/* nithssh: The whole button isDisabled should've been a state, and useEffect to setIsDisabled and setAddedEvents when cookies change*/}
      {/* 
        Design Note: This button is only greyed out when no events are added. If 
        any of the requried data is not filled, it will scroll-to and highlight 
        the required field. This is better for the user experience than greying 
        out without any explanation of the issue.
       */}
      <button
        id="submitButton"
        className={`select-none flex w-full text-void-950 fill-void-950 justify-center items-center rounded-full p-3 mt-6 font-semibold ${
          hasAddedEvents()
            ? 'bg-gradient-to-br from-cherry to-vinyl cursor-pointer'
            : 'bg-void-500'
        }`}
        onClick={validateAndSubmit}
        disabled={submissionProcesssing}
      >
        {!submissionProcesssing && (
          <>
            Submit <Image src={arrow_right} width={20} height={20} alt="" />
          </>
        )}

        {submissionProcesssing && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-void-700 fill-cherry"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </button>
    </main>
  )
}
