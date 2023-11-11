import Image from 'next/image'
import Card from './Card'
import './globals.css'

export default function SearchResult({ children }: { children: React.ReactNode }) {
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
        <div className="grid grid-cols-1 md:grid-cols-6">
            {items.map((id, name, image) => (
                <div className="p-2 w-64">
                    <SearchResultItem>

                    </SearchResultItem>
                </div>
            ))}
        </div>
    )
}

function SearchResultItem({ children }: { children: React.ReactNode }) {
    const imageLink = '/images/house.jpg';
    const price = '$ 5,000';
    const address1 = 'Bertoua, Cameroon';
    const address2 = '100km Away From Touristique Express';
    const verified = true;
    const like = true;
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
                <div className="flex flex-row p-2 justify-content-center">
                    <p className="text-blue-700">{price}</p>
                </div>
            </div>
        </Card>
    )
}