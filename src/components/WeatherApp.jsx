import { useEffect, useState } from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'

export default function WeatherApp () {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`
  }, [weather])

  async function loadInfo (city = 'Buenos Aires') {
    try {
      const data = await fetch(
				`${import.meta.env.VITE_URL}&key=${
					import.meta.env.VITE_KEY
				}&q=${city}&aqi=no`
      )
      const json = await data.json()
      console.log(json)

      setWeather(json)
    } catch (error) {}
  }
  function handleChangeCity (city) {
    setWeather(null)
    loadInfo(city)
  }
  return (
		<div>
			<WeatherForm onChangeCity={handleChangeCity} />
		    <WeatherMainInfo weather={weather} />
		</div>
  )
}
