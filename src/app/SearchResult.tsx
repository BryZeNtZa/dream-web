import Image from 'next/image'
import Card from './Card'
import './globals.css'
import Icon from '@mdi/react'
import { mdiBathtubOutline, mdiBedOutline, mdiHeart, mdiShieldCheck, mdiVectorSquare } from '@mdi/js'

export default function SearchResult() {
    const items = [
        { id: 1, name: 'bertoua', image: '/images/logo.jpg' },
        { id: 2, name: 'yaounde', image: '/images/logo.jpg' },
        { id: 3, name: 'douala', image: '/images/logo.jpg' },
        { id: 4, name: 'bafoussam', image: '/images/logo.jpg' },
        { id: 5, name: 'bua', image: '/images/logo.jpg' },
        { id: 1, name: 'bertoua', image: '/images/logo.jpg' },
        { id: 2, name: 'yaounde', image: '/images/logo.jpg' },
        { id: 3, name: 'douala', image: '/images/logo.jpg' },
        { id: 4, name: 'bafoussam', image: '/images/logo.jpg' },
        { id: 5, name: 'bua', image: '/images/logo.jpg' },
        { id: 1, name: 'bertoua', image: '/images/logo.jpg' },
        { id: 2, name: 'yaounde', image: '/images/logo.jpg' },
        { id: 3, name: 'douala', image: '/images/logo.jpg' },
        { id: 4, name: 'bafoussam', image: '/images/logo.jpg' },
        { id: 5, name: 'bua', image: '/images/logo.jpg' },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            {items.map((id, name, image) => (
                <div className="p-2 w-96">
                    <SearchResultItem/>
                </div>
            ))}
        </div>
    )
}

function SearchResultItem() {
    const imageLink = '/images/house.jpg';
    const price = '$ 5,000';
    const address1 = 'Bertoua, Cameroon';
    const address2 = '100km Away From Touristique';
    const verified = true;
    const like = true;
    const bed = 3;
    const bath = 6;
    const surface = 1000;
    return (
        <Card>
            <div className="">
                <Image
                    priority
                    src={imageLink}
                    className="w-full h-48 rounded-lg"
                    height={512}
                    width={256}
                    alt=""
                />
                <div className="flex flex-row pt-8 pb-4 justify-content-center place-items-center">
                    <p className="text-blue-700">{price}</p>
                    <div className="flex flex-row ml-auto">
                        <VerifiedItem verified={false}/>
                        <LikeItem like={false}/>
                    </div>
                </div>
                <div>
                    <p className="font-bold">
                        {address1}
                    </p>
                    <p className="text-gray-400">
                        {address2}
                    </p>
                </div>
                <div className="pt-4 pb-4 flex flex-row text-gray-400">
                    <div className="flex flex-row">
                        <Icon path={mdiBedOutline} size={1} className="bg-gray-100 p-0.5 rounded"/>
                        <p className="text-gray-40 pl-1">{bed} Bed</p>
                    </div>
                    <div className="flex flex-row pl-4">
                        <Icon path={mdiBathtubOutline} size={1} className="bg-gray-100 p-0.5 rounded"/>
                        <p className="text-gray-40 pl-1">{bath} Bath</p>
                    </div>
                    <div className="flex flex-row pl-4">
                        <Icon path={mdiVectorSquare} size={1} className="bg-gray-100 p-0.5 rounded"/>
                        <p className="text-gray-40 pl-1">{surface} Ft Sq</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
function VerifiedItem({verified}: { verified: boolean }) {
    return (
        <div className="flex flex-row place-items-center bg-green-100 px-2 py-1 rounded-lg">
            <Icon path={mdiShieldCheck} size={1} color='#3FAF3F' className="mr-2" />
            <div className="flex flex-row justify-content-center">
                <p className="text-blue-700 text-green-500">Verified</p>
            </div>
        </div>
    )
}
function LikeItem({ like }: { like: boolean }) {
    return (
        <div className="flex flex-row place-items-center bg-red-100 ml-1 p-1 rounded-lg">
            <Icon path={mdiHeart} size={1} color='#FF3F3F' className="" />
        </div>
    )
}