import Card from './Card'
import Profile from './Profile';
import Search from './Search';
import './globals.css'
import Image from 'next/image';

export default function TopNavigationBar({ children }: { children: React.ReactNode }) {
  return (
    <Card>
      <div className="flex flex-row w-fill place-items-center">
        <Image
          priority
          src="/images/logo.jpg"
          className="mr-1"
          height={48}
          width={48}
          alt=""
        />
        <div className="ml-24">
          <Search>

          </Search>
        </div>
        <div className="ml-auto">
          <Profile>

          </Profile>
        </div>
      </div>
    </Card>
  )

}