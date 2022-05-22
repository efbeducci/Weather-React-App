import { useState } from 'react'

export default function WeatherForm ({ onChangeCity }) {
  const [city, setCity] = useState('')

  function onChange (e) {
    const value = e.target.value
    if (value !== '') {
      setCity(value)
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    onChangeCity(city)
  }
  return (
        <form onSubmit={handleSubmit}>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
            placeholder="Search for weather" 
            type="text" 
            name="search"
            onChange={onChange}/>
        </form>

  )
}
