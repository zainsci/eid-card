import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

import EidStar from "./star"
import EidMubarakSVG from "./eid-ul-fit-mubarak"

const EidCard = () => {
	const router = useRouter()
	const [recipient, setRecipient] = useState("")
	const [message, setMessage] = useState("")
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		if (!router.isReady) return

		const { name, message } = router.query

		if (name) setRecipient(name as string)
		if (message) setMessage(message as string)
		setIsLoaded(true)
	}, [router.isReady, router.query])

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
			<div className="mx-auto">
				<div className="relative bg-white shadow-xl overflow-hidden border-4 border-amber-400">
					{/* Card Content */}
					<div className="relative z-20 flex gap-4 p-6">
						{/* Left Side - Illustration */}
						<div className="flex-1 w-[500px] h-[600px]">
							<div className="relative flex justify-center items-center w-full h-full bg-indigo-800 overflow-hidden">
								<div className="w-full flex flex-col justify-center items-center z-50 absolute text-center">
									<div className="bg-white w-[320px] h-[220px] p-4 z-50 flex justify-center items-center">
										<div className="bg-white w-[300px] h-[200px] p-4 z-50 flex justify-center items-center border-4 border-amber-400">
											<EidMubarakSVG />
										</div>
									</div>
								</div>
								<div className="bg-white z-40 w-[130px] h-full absolute top-0 border-r-4 border-l-4 border-amber-400"></div>
								<div className="bg-white z-30 w-[150px] h-full absolute top-0"></div>

								<div className="text-amber-400 h-[500px] w-[500px] flex justify-center items-center">
									<EidStar />
								</div>
							</div>
						</div>

						{/* Right Side - Message Area */}
						<div className="flex-1 w-[300px] h-[600px] flex flex-col">
							{/* Stamp */}
							<div className="self-end mb-4">
								<div className="relative w-16 h-20">
									<div className="absolute inset-0 bg-amber-200 border border-amber-300 p-1">
										<div className="h-full w-full border-2 border-indogo-300 border-dashed flex items-center justify-center">
											<div className="w-10 h-10 bg-indigo-400 rounded-full flex items-center justify-center">
												<div className="text-2xl">🌙</div>
											</div>
										</div>
									</div>
									<div className="absolute inset-0 bg-transparent border border-gray-300 ml-0.5 mt-0.5"></div>
								</div>
							</div>

							{/* To Field */}
							<div className="my-4 px-2">
								<p className="text-2xl font-bold">
									To: {isLoaded ? recipient || "_________" : "_________"}
								</p>
								<div className="border-b border-gray-300 my-1"></div>
							</div>

							{/* Message Area */}
							<div className="flex-grow text-xl px-2">
								{isLoaded && message ? (
									<p className="whitespace-pre-line">{message}</p>
								) : (
									<>
										<div className="border-b border-gray-300 my-10"></div>
										<div className="border-b border-gray-300 my-10"></div>
										<div className="border-b border-gray-300 my-10"></div>
										<div className="border-b border-gray-300 my-10"></div>
										<div className="border-b border-gray-300 my-10"></div>
										<div className="border-b border-gray-300 my-10"></div>
									</>
								)}
							</div>

							{/* Signature */}
							<div className="mt-4 px-2 text-right">
								<p className="text-xl">
									Salaam
									<br />
									Zain Shabbir
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EidCard
