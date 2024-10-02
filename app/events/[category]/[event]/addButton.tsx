'use client'
import {
  eventIsSelected,
  idempotentAddSelectedEvent,
  removeSelectedEvent,
  removeTeamDetails,
} from '@/app/cookies'
import add from '@/public/add.svg'
import tick from '@/public/tick.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { events } from '../../eventInfo'

export default function AddToBagButton({ eventCode }: { eventCode: string }) {
  const [isInverted, setIsInverted] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  const currentTime = Date.now();

  // Deadline for registration. Can't register after this.
  // const deadline = new Date(2023,11,2,11,0,0,0).getTime();
  const deadline = new Date(2999,11,2,11,0,0,0).getTime();

  useEffect(() => {
    if (typeof window !== undefined) {
      if (eventIsSelected(eventCode)) {
        setIsInverted(true)
      }

      fetch('/api/counts').then((v) => {
        v.json().then((v) => {
          const counts = v.message
          const ev = events.get(eventCode)!
          if (ev.maxTeams === 'unlimited') return
          if (counts[eventCode] >= ev.maxTeams) {
            setIsClosed(true)
            setIsInverted(true)
          }
        })
      })

      if(currentTime>deadline){
        setIsClosed(true)
        setIsInverted(true)
      }
    }
  }, [eventCode])

  return (
    <button
      onClick={() => {
        if (isInverted) {
          removeSelectedEvent(eventCode)
        } else {
          idempotentAddSelectedEvent(eventCode)
        }
        setIsInverted(!isInverted)
      }}
      disabled={isClosed}
      className={`select-none transition p-[1px] w-[14ch] text-base  rounded-full font-medium bg-gradient-to-br from-cherry to-vinyl cursor-pointer leading-5`}
    >
      <div
        className={`p-3 flex text-center justify-center rounded-full select-none gap-1 ${
          isInverted ? 'bg-void-950 text-white' : 'bg-transparent text-void-950'
        } ${isClosed && 'cursor-not-allowed'}`}
      >
        {isClosed && 'Sold Out'}
        {!isClosed && (isInverted ? 'Added' : 'Add to Bag')}

        {!isClosed && (
          <Image src={isInverted ? tick : add} alt="" height={16} width={16} />
        )}
      </div>
    </button>
  )
}
