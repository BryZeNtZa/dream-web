
import './globals.css'

export default function LeftBar({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <p className="font-bold">Price Range</p>
            <p className="font-bold pt-8">Localtion Radius</p>
            <p className="font-bold pt-8">Property Types</p>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
            <p className="font-bold pt-8">Facility</p>
        </div>
    )
}

function CheckBox() {
    return (
        <div className="pt-2">
            <div className="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Home</label>
            </div>
        </div>
    )
}