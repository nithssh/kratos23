'use client'

import account_circle from '@/public/account_circle.svg'
import mail from '@/public/email.svg'
import school from '@/public/school.svg'
import stylus from '@/public/stylus.svg'
import telephone from '@/public/telephone.svg'
import tick from '@/public/tick.svg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { getCookie, setCookie } from '../cookies'

// Note: better to have a loading skeleton state to default to
export default function PersonalDetails() {
  const [cardStatus, setCardStatus] = useState(Status.loading)

  const personalDet = useRef<PersonalDetails | undefined>()
  const formRef = useRef<HTMLFormElement>(null)
  const { user } = UserAuth()

  useEffect(() => {
    if (typeof window !== undefined) {
      var maybeDets = getCookie<PersonalDetails>('personal')
      if (maybeDets) {
        personalDet.current = maybeDets as PersonalDetails
        setCardStatus(Status.filled)
      } else {
        setCardStatus(Status.unfilled)
      }
    }
  }, [])

  switch (cardStatus) {
    case Status.loading:
      return (
        <div className="bg-void-500 p-[1px] my-6 rounded-lg">
          {/* Header */}
          <div className="px-4 py-6 bg-void-700 border-b-[1px] border-void-500 rounded-t-lg flex gap-2 items-center text-xl">
            <div className="w-12 h-12 rounded-full animate-pulse bg-void-300" />
            <div className="w-[12ch] h-6 animate-pulse bg-void-300" />
            <div className="w-6 h-6 animate-pulse bg-void-300" />
          </div>

          {/* Details */}
          <div className="p-6 bg-void-950 rounded-b-lg flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="w-6 h-6 animate-pulse bg-void-300" />
              <div className="w-[14ch] h-6 animate-pulse bg-void-300" />
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 animate-pulse bg-void-300" />
              <div className="w-[14ch] h-6 animate-pulse bg-void-300" />
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 animate-pulse bg-void-300" />
              <div className="w-[12ch] h-6 animate-pulse bg-void-300" />
            </div>
          </div>
        </div>
      )
    case Status.unfilled:
      return (
        <div
          className="bg-gradient-to-br from-cherry p-[1px] to-vinyl my-6 rounded-lg cursor-pointer"
          onClick={() => setCardStatus(Status.edit)}
        >
          <div className="px-4 py-6 bg-void-700 rounded-lg flex gap-2 items-center text-xl">
            <Image
              src={account_circle}
              width={48}
              height={48}
              alt=""
            />
            Enter Your Details
            <Image src={stylus} width={24} height={24} alt="" />
          </div>
        </div>
      )
    case Status.edit:
      return (
        <form
          ref={formRef}
          id="personal"
          name="personal"
          className="bg-gradient-to-br from-cherry to-vinyl rounded-lg p-[1px] my-6 "
        >
          {/* Header */}
          <div className="px-4 py-6 bg-void-700 border-b-[1px] border-void-500 rounded-t-lg flex gap-2 items-center text-xl relative">
            <Image
              src={!user ? account_circle : user.photoURL}
              width={48}
              height={48}
              alt=""
            />
            <input
              autoCapitalize="words"
              required
              id="name"
              type="text"
              autoComplete="name"
              minLength={3}
              className="bg-transparent border-cherry border-[1px] w-[70%] rounded pl-1"
              placeholder="Full Name"
              defaultValue={personalDet.current?.name}
            />
            <Image
              src={tick}
              width={24}
              height={24}
              alt=""
              className="cursor-pointer absolute right-6"
              onClick={() => {
                const isValid = formRef.current?.reportValidity()
                if (isValid) {
                  const values = {
                    name: (document.getElementById('name') as HTMLInputElement)
                      .value,
                    email: (
                      document.getElementById('email') as HTMLInputElement
                    ).value,
                    college: (
                      document.getElementById('college') as HTMLInputElement
                    ).value,
                    mobile: (
                      document.getElementById('mobile') as HTMLInputElement
                    ).value,
                  }
                  personalDet.current = values
                  setCardStatus(Status.filled)
                  setCookie<PersonalDetails>('personal', values)
                }
              }}
            />
          </div>

          {/* Details */}
          <div className="p-6 bg-void-950 rounded-b-lg flex flex-col gap-2">
            <div className="flex gap-4">
              <Image src={mail} width={24} height={24} alt="" />
              <input
                required
                name="email"
                id="email"
                type="email"
                autoComplete="email"
                className="bg-transparent border-cherry border-[1px] w-full rounded pl-1"
                placeholder="Email address"
                defaultValue={personalDet.current?.email}
              />
            </div>
            <div className="flex gap-4">
              <Image src={school} width={24} height={24} alt="" />
              <input
                required
                id="college"
                type="text"
                className="bg-transparent border-cherry border-[1px] w-full rounded pl-1"
                placeholder="Name of your college"
                defaultValue={personalDet.current?.college}
              />
            </div>
            <div className="flex gap-4">
              <Image src={telephone} width={24} height={24} alt="" />
              <input
                required
                id="mobile"
                type="tel"
                minLength={10}
                maxLength={10}
                autoComplete="tel"
                className="bg-transparent border-cherry border-[1px] w-full rounded pl-1"
                placeholder="10-digit mobile number"
                defaultValue={personalDet.current?.mobile}
              />
            </div>
          </div>
        </form>
      )
    case Status.filled:
      return (
        <div className="bg-void-500 p-[1px] my-6 rounded-lg">
          {/* Header */}
          <div className="px-4 py-6 bg-void-700 border-b-[1px] border-void-500 rounded-t-lg flex gap-2 items-center text-xl">
            <Image
              src={user ? user.photoURL : account_circle}
              className="rounded-3xl"
              width={48}
              height={48}
              alt=""
            />
            {personalDet.current?.name}
            <Image
              src={stylus}
              width={24}
              height={24}
              alt=""
              className="cursor-pointer"
              onClick={() => setCardStatus(Status.edit)}
            />
          </div>

          {/* Details */}
          <div className="p-6 bg-void-950 rounded-b-lg flex flex-col gap-2">
            <div className="flex gap-4">
              <Image src={mail} width={24} height={24} alt="" />
              {personalDet.current?.email}
            </div>
            <div className="flex gap-4">
              <Image src={school} width={24} height={24} alt="" />
              {personalDet.current?.college}
            </div>
            <div className="flex gap-4">
              <Image src={telephone} width={24} height={24} alt="" />
              {personalDet.current?.mobile}
            </div>
          </div>
        </div>
      )
  }
}

type PersonalDetails = {
  name: string
  email: string
  college: string
  mobile: string
}

enum Status {
  loading,
  unfilled,
  edit,
  filled,
}
