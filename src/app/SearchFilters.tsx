import { Switch } from '@headlessui/react'
import './globals.css'
import React, { useState } from 'react'

export default function SearchFilters() {
    return (
        <div className="p-4 flex flex-row">
            <div className="">
                <div className="flex flex-row">
                    <p className="text-xl font-bold pr-2">Search Result For</p>
                    <a href="/posts/first" className="text-xl text-blue-700 font-bold underline">Bertoua, Cameroon</a>
                </div>
                <p className="text-gray-500">We d <b className="text-blue-700">36</b> Results for You</p>
            </div>
            <div className="ml-auto">
                <VerifiedOnly/>
            </div>
        </div>
    )
}

function VerifiedOnly(){
    const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}