import './globals.css'
import Image from 'next/image';

export default function Profile() {
    return (
        <div className="flex flex-row place-items-center">
        <Image
          priority
          src="/images/logo.jpg"
          className="rounded-full"
          height={48}
          width={48}
          alt=""
        />
        <div className="ml-6">
          <h5>user name</h5>
        </div>

      </div>
    )
}