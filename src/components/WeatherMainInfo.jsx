export default function WeatherMainInfo({ weather }) {
	return (
		<div>
			<div className=' grid grid-cols-2 grid-flow-row font-bold font-jakarta shadow-lg bg-green-50 mt-3 mb-3  border-4 border-l-orange-400 border-t-0 border-r-0 border-b-0'>
				<div className="flex justify-start ml-1">
                <p className="md:mt-7 md:text-5xl">{weather?.current.temp_c}º</p>
					<img className="drop-shadow"
						src={`http:${weather?.current.condition.icon}`}
						alt={weather?.current.condition.text}
						width='100'
					/>
				</div>
                <div className="flex flex-col mt-8 text-center ">
					<p className="font-bold">{weather?.location.name} - </p>
					<p className="font-light font-overline">{weather?.location.country}</p>
				</div>
			</div>
			<iframe 
                className="rounded-3xl drop-shadow-2xl md:w-[600px] md:h-[450px] sm:w-[200px] sm:h-[300px]"
				title='mapa'
				src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13083.899703446514!2d${weather?.location.lon}99985!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1652754296713!5m2!1ses-419!2sar`}
				
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				
                
			></iframe>
		</div>
	)
}
