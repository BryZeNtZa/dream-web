import './globals.css'

export default function Card({ children }: { children: React.ReactNode }) {

  return (
    <div className ="p-2 mx-auto bg-white rounded-xl shadow-sm">
      {children}
    </div>
  )

}