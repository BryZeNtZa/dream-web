
import TextInputField from './TextInputField'
import './globals.css'

export default function LeftBar() {
    return (
        <div className="">
            <p className="font-bold">Price Range</p>
            <div className="flex flex-row pt-8">
                <TextInputField hint="Min" value='$ 5,000'/>
                <TextInputField hint="Max" value='$ 10,000'/>
            </div>

            <p className="font-bold pt-8">Localtion Radius</p>
            <div className="flex flex-row pt-8">
                <TextInputField hint="Min (Km)" value='2.4'/>
                <TextInputField hint="Max (Km)" value='8'/>
            </div>
            
            <p className="font-bold pt-8">Property Types</p>
            <CheckBox id="checkbox-1" text="Home"/>
            <CheckBox id="checkbox-2"text="Apparment"/>
            <CheckBox id="checkbox-3"text="PG / Co-Living"/>
            <CheckBox id="checkbox-4"text="Residential Land"/>
            <CheckBox id="checkbox-5"text="Office Space"/>
            
            <p className="font-bold pt-8">Facility</p>
            <div className="flex flex-row pt-8">
                <TextInputField hint="Bedrooms" value='3'/>
                <TextInputField hint="Bathrooms" value='4'/>
            </div>
            <div className="flex flex-row pt-8">
                <TextInputField hint="Terrace" value='No Need'/>
                <TextInputField hint="Swimming Pool" value='Yes'/>
            </div>
        </div>
    )
}

function CheckBox({id, text}: {id: string, text: string}) {
    return (
        <div className="pt-2">
            <div className="flex items-center">
                <input id={id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</label>
            </div>
        </div>
    )
}