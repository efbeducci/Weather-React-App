export default function WeatherMainInfo({ weather }) {
	return (
		<div>
			<div className='grid grid-cols-2 grid-flow-row font-bold font-serif '>
				<div className="flex justify-start">
                <p className="md:mt-7 md:text-5xl">{weather?.current.temp_c}º</p>
					<img className="drop-shadow"
						src={`http:${weather?.current.condition.icon}`}
						alt={weather?.current.condition.text}
						width='100'
					/>
				</div>
                <div className="flex flex-col justify-end text-right mr-5">
					<p>{weather?.location.name} - </p>
					<p>{weather?.location.country}</p>
				</div>
			</div>

			<div className="text-left ml-[75px]">
				<div>{weather?.current.condition.text}</div>
			</div>
			<iframe 
                className="rounded-3xl drop-shadow-2xl md:w-[600px] md:h-[450px] sm:w-[200px] sm:h-[300px]"
				title='mapa'
				src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13083.899703446514!2d${weather?.location.lon}99985!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1652754296713!5m2!1ses-419!2sar`}
				
				style={{ border: 0 }}
				allowFullScreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'
                
			></iframe>
		</div>
	)
}
