"use client"

import { Popover, Switch } from '@headlessui/react'
import './globals.css'
import { Fragment, useState } from 'react'
import Icon from '@mdi/react'
import { mdiSort } from '@mdi/js';

export default function SearchResultBar() {
    return (
        <div className="p-4 flex flex-row place-items-center">
            <div className="">
                <div className="flex flex-row">
                    <p className="text-xl font-bold pr-2">Search Result For</p>
                    <a href="/posts/first" className="text-xl text-blue-700 font-bold underline">Bertoua, Cameroon</a>
                </div>
                <p className="text-gray-500">We Found <span className="text-blue-700">36</span> Results for You</p>
            </div>
            <div className="flex flex-row ml-auto place-items-center">
                <BuyOrRentFilter/>
                <div className="px-6" />
                <VerifiedOnlyFilter/>
                <div className="px-6" />
                <SortByFilter/>
                <div className="px-6" />
            </div>
        </div>
    )
}
function BuyOrRentFilter() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
            {({ checked }) => (
                <div className="bg-gray-200 rounded-xl h-12 w-32 place-items-center">
                    <div
                        className={`${checked ? 'bg-gray-200' : 'bg-gray-200'
                            } relative inline-flex rounded-xl py-0.5`}
                    >
                        <span
                            className={`${checked ? 'translate-x-[3.9rem]' : 'translate-x-0.5'} 
                            text-blue-700 justify-center place-items-center inline-flex
                            h-11 w-16 transform rounded-xl bg-white transition`}>
                            {checked ? 'Rent' : 'Buy'}
                        </span>

                    </div>
                </div>
            )}
        </Switch>
    )
}
function VerifiedOnlyFilter() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch.Group>
            <div className="flex items-center p-4">
                <Switch.Label className="mr-4 text-gray-400">Verified Only</Switch.Label>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    )
}
function SortByFilter() {

    const filterOption = [
        { id: 1, name: 'Durward Reynolds', unavailable: false },
        { id: 2, name: 'Kenton Towne', unavailable: false },
        { id: 3, name: 'Therese Wunsch', unavailable: false },
        { id: 4, name: 'Benedict Kessler', unavailable: true },
        { id: 5, name: 'Katelyn Rohan', unavailable: false },
    ]
    const sortBy = 'Newest'
    const [selectedPerson, setSelectedPerson] = useState(filterOption[0])

    return (
        <Popover className="relative">
            <Popover.Button>
                <p className="flex flex-row text-gray-400">
                    <Icon path={mdiSort} size={1} className="mr-2"/>
                    <span>Sort By</span>
                    <span className="text-blue-500 ml-2">{sortBy}</span>
                </p>
            </Popover.Button>

            <Popover.Panel className="absolute z-10">
                <div className="grid grid-cols-1">
                    <a href="/analytics">Newest</a>
                    <a href="/engagement">Cheapest</a>
                    <a href="/security">Nearest</a>
                </div>

                <img src="/solutions.jpg" alt="" />
            </Popover.Panel>
        </Popover>
    )
}