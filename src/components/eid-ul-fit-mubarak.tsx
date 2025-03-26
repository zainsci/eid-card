import { motion } from "framer-motion"

export default function EidMubarakSVG() {
	return (
		<svg
			width="493"
			height="226"
			viewBox="0 0 493 226"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="flex z-50 text-indigo-700"
		>
			<motion.path
				pathLength={100}
				initial={{
					strokeDasharray: 100,
					strokeDashoffset: 100,
					fill: "rgb(192, 159, 248, 0)",
				}}
				animate={{
					strokeDashoffset: 0,
					fill: "rgb(192, 159, 248, 1)",
				}}
				transition={{ duration: 5 }}
				fill="currentColor"
				stroke="currentColor"
				strokeWidth="3"
				mask="url(#path-1-inside-1)"
				d="M24.9375 33.875C24.9375 36.5833 29.6667 37.9375 39.125 37.9375C41.4583 37.9375 43.1875 37.6875 44.3125 37.1875C47.2708 35.7708 50.8958 35.0625 55.1875 35.0625C59.5208 35.0625 61.6875 36.1667 61.6875 38.375C61.6875 39.25 61.3125 40.5417 60.5625 42.25C59.8542 43.9167 59.3125 44.9375 58.9375 45.3125C58.6042 45.6875 57.2708 46.2083 54.9375 46.875C52.6042 47.5 51.0833 47.8542 50.375 47.9375C49.7083 47.9792 49.25 48.0208 49 48.0625C48.7917 48.1042 48.5208 48.1458 48.1875 48.1875C47.8958 48.2292 47.2083 48.3542 46.125 48.5625C45.0417 48.7292 44.25 48.7083 43.75 48.5C29.9583 55.2917 20.4792 62.75 15.3125 70.875C12.9792 74.5417 11.8125 77.6875 11.8125 80.3125C11.8125 84.4375 14.6667 86.5 20.375 86.5C24.8333 86.5 30.5 84.75 37.375 81.25C44.25 77.75 50.3333 73.5208 55.625 68.5625C60.9583 63.5625 63.625 59.2292 63.625 55.5625C63.625 54.3958 64.5 53.8125 66.25 53.8125C70.2917 53.8125 72.3125 56.2083 72.3125 61C72.3125 63.25 71.3333 65.9375 69.375 69.0625C67.4167 72.1458 64.6875 75.2917 61.1875 78.5C57.6875 81.6667 53.7917 84.625 49.5 87.375C45.2083 90.125 40.4375 92.375 35.1875 94.125C29.9792 95.875 25.5625 96.75 21.9375 96.75C18.3125 96.75 15.375 96.3958 13.125 95.6875C10.9167 95.0208 8.83333 94 6.875 92.625C2.625 89.6667 0.5 85.1875 0.5 79.1875C0.5 75.9375 1.375 72.6458 3.125 69.3125C4.875 65.9375 7.16667 62.875 10 60.125C15.2083 54.9583 20.7917 50.6667 26.75 47.25C18.1667 45.2917 13.875 40.875 13.875 34C13.875 26.25 19.8333 19.1667 31.75 12.75C38.375 9.20833 45.5625 6.66667 53.3125 5.125C56.9792 4.375 60.0417 4 62.5 4C67.5 4 71.2708 4.39583 73.8125 5.1875C75.3542 5.9375 76.6042 7 77.5625 8.375C78.5208 9.70833 79 10.875 79 11.875C79 12.8333 78.875 13.7083 78.625 14.5C78.375 15.2917 77.9583 15.9167 77.375 16.375C76.5417 17 75.6042 17.4792 74.5625 17.8125C73.5208 18.1458 72.9167 18.3542 72.75 18.4375C69.5 19.8125 66.7083 20.5 64.375 20.5C60.2083 20.5 57.9375 19.9583 57.5625 18.875C57.6458 17.7917 58.1042 16.5417 58.9375 15.125C54.9792 15.2917 50.875 16.1042 46.625 17.5625C42.375 18.9792 38.6875 20.6667 35.5625 22.625C32.4792 24.5417 29.9375 26.5417 27.9375 28.625C25.9375 30.7083 24.9375 32.4583 24.9375 33.875ZM110.438 26.375C110.438 28.75 109.333 31.1458 107.125 33.5625C104.917 35.9375 102.604 37.125 100.188 37.125C97.8125 37.125 96.625 35.875 96.625 33.375C96.625 30.875 97.6667 28.5 99.75 26.25C101.875 23.9583 104.208 22.8125 106.75 22.8125C107.875 22.8125 108.771 23.125 109.438 23.75C110.104 24.375 110.438 25.25 110.438 26.375ZM100.312 80.9375C100.312 82.1875 100.188 83.0833 99.9375 83.625C97.8958 87.7917 94.6458 91.1667 90.1875 93.75C85.7292 96.2917 81.8542 97.5625 78.5625 97.5625C75.2708 97.5625 72.4375 96.4583 70.0625 94.25C67.6875 92.0417 66.5 89.7917 66.5 87.5C66.5 85.2083 67.6458 81.875 69.9375 77.5C72.2292 73.125 74.5208 69.0833 76.8125 65.375C79.1042 61.6667 80.25 59.6667 80.25 59.375C80.25 59.0417 79.8125 58.4167 78.9375 57.5C78.1042 56.5833 77.6875 55.9167 77.6875 55.5C77.6875 55.0417 78.5417 53.8958 80.25 52.0625C82 50.1875 84.1042 48.3542 86.5625 46.5625C89.0625 44.7292 90.9583 43.8125 92.25 43.8125C93.5833 43.8125 94.7708 44.3958 95.8125 45.5625C96.8542 46.7292 97.375 47.7917 97.375 48.75C97.375 49.7083 92.4167 58.7292 82.5 75.8125C82.375 76.0625 82.0208 76.625 81.4375 77.5C80.8958 78.3333 80.4583 79.0417 80.125 79.625C79.8333 80.1667 79.4792 80.8333 79.0625 81.625C78.2292 83.2917 77.8125 84.6875 77.8125 85.8125C77.8125 87.2292 78.7708 87.9375 80.6875 87.9375C82.6042 87.9375 84.5833 87.2917 86.625 86C88.7083 84.6667 90.5 83.2083 92 81.625C95.9167 77.4167 98.1458 75.3125 98.6875 75.3125C99.7708 75.3125 100.312 77.1875 100.312 80.9375ZM174.25 1.3125C175.042 1.3125 175.667 1.5625 176.125 2.0625C176.583 2.5625 176.812 3.08333 176.812 3.625C176.812 4.125 176.396 5.08333 175.562 6.5C174.771 7.875 172.917 10.9167 170 15.625C167.083 20.2917 164.812 23.9583 163.188 26.625C153.729 42 146.312 55 140.938 65.625C135.562 76.25 132.875 82.6667 132.875 84.875V85.375C132.875 87.0833 133.5 87.9375 134.75 87.9375C136 87.9375 137.5 87.3542 139.25 86.1875C141.042 85.0208 142.604 83.7708 143.938 82.4375C145.271 81.1042 146.604 79.7292 147.938 78.3125C149.312 76.8542 150.146 76 150.438 75.75C150.729 75.5 151.104 75.375 151.562 75.375C152.271 75.375 152.729 75.8333 152.938 76.75C153.146 77.625 153.25 78.875 153.25 80.5C153.25 82.0833 153.125 83.125 152.875 83.625C151.667 85.9583 149 88.8125 144.875 92.1875C140.792 95.5208 136.917 97.1875 133.25 97.1875C127 97.1875 123.875 94.5417 123.875 89.25C123.875 85.9583 125.125 81.6458 127.625 76.3125C124.25 80.6875 120.812 84.4167 117.312 87.5C110.812 93.1667 105.167 96 100.375 96C97.7083 96 95.7292 95.0625 94.4375 93.1875C93.1875 91.3125 92.5625 88.625 92.5625 85.125C92.5625 81.5833 93.9375 77.3542 96.6875 72.4375C99.4375 67.5208 102.854 63.1042 106.938 59.1875C111.062 55.2292 115.625 51.9375 120.625 49.3125C125.625 46.6458 130.229 45.3125 134.438 45.3125C135.771 45.3125 137.333 46.125 139.125 47.75C140.333 45.8333 142.562 42 145.812 36.25C156.021 19.0417 162.771 8.54167 166.062 4.75C167.812 2.45833 170.542 1.3125 174.25 1.3125ZM135.312 53.625C129.312 54.9583 123.729 57.75 118.562 62C113.396 66.25 109.521 70.7083 106.938 75.375C104.354 80 103.062 83 103.062 84.375C103.062 85.75 103.354 86.4375 103.938 86.4375C106.438 86.4375 112.625 80.8542 122.5 69.6875C127.417 64.1875 131.688 58.8333 135.312 53.625ZM158 70.0625H157.688C156.854 70.1458 156.021 69.9167 155.188 69.375C154.396 68.8333 154 68.1667 154 67.375C154 66.5833 154.208 65.875 154.625 65.25C155.083 64.625 155.375 63.9792 155.5 63.3125C155.667 62.6458 156.417 61.6875 157.75 60.4375C159.125 59.1875 160.271 58.5208 161.188 58.4375C162.146 58.3125 163.812 58.1667 166.188 58C168.562 57.8333 170.938 57.6667 173.312 57.5C175.688 57.2917 177.979 57.1875 180.188 57.1875C182.396 57.1875 183.667 57.3125 184 57.5625C184.375 57.7708 184.771 58.3333 185.188 59.25C185.646 60.125 186.062 60.7708 186.438 61.1875C186.812 61.6042 187 62.2917 187 63.25C187 64.1667 186.625 64.9792 185.875 65.6875C185.125 66.3542 184.271 66.7708 183.312 66.9375C182.396 67.0625 181.354 67.2083 180.188 67.375C179.021 67.5 177.708 67.6458 176.25 67.8125C174.833 67.9375 173.479 68.0833 172.188 68.25C170.896 68.4167 169.417 68.6667 167.75 69C164.542 69.625 161.292 69.9792 158 70.0625ZM242.062 75.375C242.854 75.375 243.333 75.9792 243.5 77.1875C243.667 78.3958 243.75 79.6458 243.75 80.9375C243.75 82.2292 243.625 83.125 243.375 83.625C242.167 85.9583 239.521 88.8125 235.438 92.1875C231.354 95.5208 227.479 97.1875 223.812 97.1875C221.562 97.1875 219.479 96.5 217.562 95.125C215.646 93.7917 214.688 91.4375 214.688 88.0625C214.688 84.6875 215.583 81.375 217.375 78.125C207.042 91.0833 198.938 97.5625 193.062 97.5625C190.729 97.5625 188.833 96.7292 187.375 95.0625C185.958 93.3958 185.25 91.6875 185.25 89.9375C185.25 88.1458 185.5 86.3125 186 84.4375C186.5 82.5208 187.021 80.8125 187.562 79.3125C188.146 77.8125 188.979 75.9583 190.062 73.75C191.188 71.5417 192.021 69.9375 192.562 68.9375C193.104 67.9375 193.958 66.4375 195.125 64.4375C196.333 62.3958 197.896 59.6667 199.812 56.25C201.771 52.8333 203.375 50.3125 204.625 48.6875C205.917 47.0208 207.167 46.1875 208.375 46.1875C209.583 46.1458 210.646 46.625 211.562 47.625C212.479 48.625 212.938 49.4375 212.938 50.0625C212.938 50.6875 211.542 53.5 208.75 58.5C200.5 73.4167 196.375 82.1042 196.375 84.5625C196.375 85.1875 196.604 85.5 197.062 85.5C199.062 85.5 204.042 81.1667 212 72.5C219.958 63.8333 224.562 58.2917 225.812 55.875C227.062 53.4167 228.271 51.3542 229.438 49.6875C230.646 48.0208 231.542 47 232.125 46.625C233.917 45.4583 236.229 44.8333 239.062 44.75C239.521 44.75 239.875 44.7708 240.125 44.8125C240.375 44.8542 240.667 45.2083 241 45.875C241.333 46.5417 241.5 47.0625 241.5 47.4375C241.125 48.6042 239.458 51.7083 236.5 56.75C233.583 61.7917 231.958 64.6458 231.625 65.3125C226.708 75.4792 224.25 82.1042 224.25 85.1875C224.25 86.9375 224.917 87.8125 226.25 87.8125C228.667 87.4792 231.583 85.5417 235 82C236.25 80.7083 237.479 79.3958 238.688 78.0625C239.938 76.7292 240.708 75.9583 241 75.75C241.292 75.5 241.646 75.375 242.062 75.375ZM291.562 1.1875C293.562 1.1875 295.312 1.79167 296.812 3C298.354 4.16667 299.125 5.91667 299.125 8.25C299.125 10.5833 297.833 14.25 295.25 19.25C292.667 24.2083 289.562 29.2917 285.938 34.5C282.312 39.6667 278.208 45.1667 273.625 51C266.375 60.25 259.417 68.5625 252.75 75.9375C252.708 76.4375 252.521 77.375 252.188 78.75C251.896 80.0833 251.75 81.4375 251.75 82.8125C251.75 84.1875 252.375 85.4375 253.625 86.5625C254.917 87.6458 256.5 88.1875 258.375 88.1875C260.25 88.1875 262.25 87.5208 264.375 86.1875C266.542 84.8542 268.417 83.375 270 81.75C274.167 77.4583 276.75 75.3125 277.75 75.3125C278.75 75.3125 279.25 76.8333 279.25 79.875V81.125C279.25 82.75 278.958 83.9375 278.375 84.6875C274.875 88.9792 270.938 92.1875 266.562 94.3125C262.188 96.3958 258.042 97.4375 254.125 97.4375C250.208 97.4375 247.229 96.25 245.188 93.875C243.146 91.4583 242.125 88.1667 242.125 84C242.125 75.875 244.292 66.3333 248.625 55.375C253 44.375 257.917 35.0208 263.375 27.3125C275.667 9.89583 285.062 1.1875 291.562 1.1875ZM288.75 11.5625C288.75 10.9375 288.542 10.625 288.125 10.625C286.667 10.625 282.833 14.7917 276.625 23.125C270.417 31.4583 265.917 38.1042 263.125 43.0625C260.375 48.0208 257.771 54.25 255.312 61.75C260.229 55.9167 267.021 46.8333 275.688 34.5C284.396 22.125 288.75 14.4792 288.75 11.5625ZM282.25 70.0625H281.938C281.104 70.1458 280.271 69.9167 279.438 69.375C278.646 68.8333 278.25 68.1667 278.25 67.375C278.25 66.5833 278.458 65.875 278.875 65.25C279.333 64.625 279.625 63.9792 279.75 63.3125C279.917 62.6458 280.667 61.6875 282 60.4375C283.375 59.1875 284.521 58.5208 285.438 58.4375C286.396 58.3125 288.062 58.1667 290.438 58C292.812 57.8333 295.188 57.6667 297.562 57.5C299.938 57.2917 302.229 57.1875 304.438 57.1875C306.646 57.1875 307.917 57.3125 308.25 57.5625C308.625 57.7708 309.021 58.3333 309.438 59.25C309.896 60.125 310.312 60.7708 310.688 61.1875C311.062 61.6042 311.25 62.2917 311.25 63.25C311.25 64.1667 310.875 64.9792 310.125 65.6875C309.375 66.3542 308.521 66.7708 307.562 66.9375C306.646 67.0625 305.604 67.2083 304.438 67.375C303.271 67.5 301.958 67.6458 300.5 67.8125C299.083 67.9375 297.729 68.0833 296.438 68.25C295.146 68.4167 293.667 68.6667 292 69C288.792 69.625 285.542 69.9792 282.25 70.0625ZM333.75 60.8125C332.583 60.8125 332 60.0833 332 58.625C332 57.5417 332.479 56.3542 333.438 55.0625C334.438 53.7708 335.042 52.9167 335.25 52.5C335.458 52.0833 336 51.4375 336.875 50.5625C337.792 49.6875 338.583 49.1667 339.25 49C339.958 48.8333 341.375 48.6458 343.5 48.4375C350 47.8125 357.083 47.4583 364.75 47.375C373.083 34.75 379.875 25.375 385.125 19.25C377.333 20.6667 367.771 21.375 356.438 21.375C341.062 21.375 333.375 17.9375 333.375 11.0625C333.375 9.10417 334.354 7.39583 336.312 5.9375C338.312 4.47917 340.812 3.75 343.812 3.75C346.854 3.75 348.375 4.10417 348.375 4.8125C348.375 5.1875 347.896 5.375 346.938 5.375C346.021 5.375 345.146 5.72917 344.312 6.4375C343.521 7.10417 343.125 7.75 343.125 8.375C343.125 9.33333 345.167 10.0417 349.25 10.5C353.333 10.9583 359.625 11.1875 368.125 11.1875C376.667 11.1875 385.917 10.4167 395.875 8.875C399.167 6.16667 402.25 4.125 405.125 2.75C408.042 1.375 411 0.6875 414 0.6875C417 0.6875 418.958 1.35417 419.875 2.6875C420.792 4.02083 421.25 5.02083 421.25 5.6875C421.292 6.35417 420.812 7.22917 419.812 8.3125C418.812 9.39583 417.417 10.5 415.625 11.625C411.417 14.2083 405.896 15.75 399.062 16.25C391.771 25.4583 384.25 35.875 376.5 47.5C379.708 47.625 382.708 47.875 385.5 48.25C388.292 48.5833 389.688 49.6667 389.688 51.5C389.688 52.25 388.5 53.6875 386.125 55.8125C385.875 56.1042 385.562 56.5417 385.188 57.125C384.521 58.125 383.854 58.625 383.188 58.625C382.562 58.625 381.833 58.5417 381 58.375C377.75 58.25 375.312 58.1875 373.688 58.1875L369.625 58.25C354.958 81.0833 347.375 92.9583 346.875 93.875C346.417 94.75 345.896 95.4167 345.312 95.875C344.771 96.3333 344.083 96.5625 343.25 96.5625C342.417 96.5625 341.25 96.4167 339.75 96.125C338.25 95.875 337.125 95.5417 336.375 95.125C335.625 94.75 335.25 94.2708 335.25 93.6875C335.25 93.0625 335.438 92.1875 335.812 91.0625C336.812 88.2708 343.812 77.5 356.812 58.75C348.354 59.1667 341.646 59.6042 336.688 60.0625L333.75 60.8125ZM413.125 4.375C412.458 4.58333 411.646 4.91667 410.688 5.375L413.125 4.375ZM428.438 26.375C428.438 28.75 427.333 31.1458 425.125 33.5625C422.917 35.9375 420.604 37.125 418.188 37.125C415.812 37.125 414.625 35.875 414.625 33.375C414.625 30.875 415.667 28.5 417.75 26.25C419.875 23.9583 422.208 22.8125 424.75 22.8125C425.875 22.8125 426.771 23.125 427.438 23.75C428.104 24.375 428.438 25.25 428.438 26.375ZM418.312 80.9375C418.312 82.1875 418.188 83.0833 417.938 83.625C415.896 87.7917 412.646 91.1667 408.188 93.75C403.729 96.2917 399.854 97.5625 396.562 97.5625C393.271 97.5625 390.438 96.4583 388.062 94.25C385.688 92.0417 384.5 89.7917 384.5 87.5C384.5 85.2083 385.646 81.875 387.938 77.5C390.229 73.125 392.521 69.0833 394.812 65.375C397.104 61.6667 398.25 59.6667 398.25 59.375C398.25 59.0417 397.812 58.4167 396.938 57.5C396.104 56.5833 395.688 55.9167 395.688 55.5C395.688 55.0417 396.542 53.8958 398.25 52.0625C400 50.1875 402.104 48.3542 404.562 46.5625C407.062 44.7292 408.958 43.8125 410.25 43.8125C411.583 43.8125 412.771 44.3958 413.812 45.5625C414.854 46.7292 415.375 47.7917 415.375 48.75C415.375 49.7083 410.417 58.7292 400.5 75.8125C400.375 76.0625 400.021 76.625 399.438 77.5C398.896 78.3333 398.458 79.0417 398.125 79.625C397.833 80.1667 397.479 80.8333 397.062 81.625C396.229 83.2917 395.812 84.6875 395.812 85.8125C395.812 87.2292 396.771 87.9375 398.688 87.9375C400.604 87.9375 402.583 87.2917 404.625 86C406.708 84.6667 408.5 83.2083 410 81.625C413.917 77.4167 416.146 75.3125 416.688 75.3125C417.771 75.3125 418.312 77.1875 418.312 80.9375ZM456.75 14.5L459.312 15.125C459.688 15.125 460.021 15.3125 460.312 15.6875C460.604 16.0625 460.75 16.4167 460.75 16.75C460.75 17.0833 460.312 17.9792 459.438 19.4375C458.562 20.8958 457.521 22.5625 456.312 24.4375C455.146 26.2708 454.521 27.2708 454.438 27.4375C457.688 27.1875 459.979 27.0625 461.312 27.0625C462.688 27.0625 463.625 27.1667 464.125 27.375C464.625 27.5417 465.188 28.0625 465.812 28.9375C466.479 29.7708 467.083 30.4167 467.625 30.875C468.167 31.2917 468.438 31.9375 468.438 32.8125C468.438 33.6875 467.896 34.4375 466.812 35.0625C465.771 35.6458 464.646 36 463.438 36.125C453.771 37.0833 448.438 37.5833 447.438 37.625C444.062 42.7917 439.333 50.8542 433.25 61.8125C427.208 72.7292 424 79.5625 423.625 82.3125C423.458 83.5625 423.375 84.5833 423.375 85.375C423.375 87 424.229 87.8125 425.938 87.8125C427.646 87.8125 429.542 87.1667 431.625 85.875C433.708 84.5417 435.625 83.1042 437.375 81.5625C442.042 77.3958 444.542 75.3125 444.875 75.3125C445.958 75.3125 446.5 77.1875 446.5 80.9375C446.5 82.9792 445.562 84.8125 443.688 86.4375C439.479 90.0625 435.938 92.7917 433.062 94.625C430.188 96.4583 427.312 97.375 424.438 97.375C423.812 97.375 423.229 97.3125 422.688 97.1875C419.354 96.5625 416.896 95.3542 415.312 93.5625C413.771 91.7292 413 89.2708 413 86.1875C413.042 83.1042 413.958 79.375 415.75 75C417.583 70.5833 419.875 65.8958 422.625 60.9375C427.125 52.8542 431.625 45.2708 436.125 38.1875L433.75 38.5C428.917 39.0417 426.104 39.3125 425.312 39.3125H424.75C423.542 39.3125 422.375 39.0833 421.25 38.625C420.125 38.125 419.562 37.5208 419.562 36.8125C419.562 36.1042 419.854 35.4167 420.438 34.75C421.062 34.0833 421.438 33.5625 421.562 33.1875C421.854 32.2708 422.938 31.25 424.812 30.125C426.729 29 428.167 28.4167 429.125 28.375C430.083 28.2917 431 28.2292 431.875 28.1875C432.792 28.1458 433.792 28.1042 434.875 28.0625C436 28.0208 436.854 27.9792 437.438 27.9375L443.062 27.6875C446.562 22.4375 448.958 19.0625 450.25 17.5625C451.583 16.0625 452.354 15.25 452.562 15.125C452.771 14.9583 453.188 14.875 453.812 14.875L456.75 14.5ZM461.688 60.9375C471.521 49.7708 479.896 44.1875 486.812 44.1875C488.521 44.1875 489.917 44.7083 491 45.75C492.125 46.75 492.688 48.0625 492.688 49.6875C492.688 51.3125 491.521 54.0417 489.188 57.875C486.896 61.6667 484.771 64.875 482.812 67.5C481.771 68.8333 480.583 69.5 479.25 69.5C477.958 69.5 476.938 69.0208 476.188 68.0625C475.479 67.1042 475.125 65.9792 475.125 64.6875C475.125 61.8125 476.667 58.5625 479.75 54.9375L479.625 54.8125C478.25 54.9375 474.833 57.6458 469.375 62.9375C463.958 68.2292 459.333 72.9792 455.5 77.1875C451.708 81.3542 447.583 86.4375 443.125 92.4375C441.833 94.2292 440.729 95.125 439.812 95.125C438.938 95.125 437.771 94.8542 436.312 94.3125C434.812 93.7292 433.917 93.3125 433.625 93.0625C433.292 92.8125 433.125 92.3958 433.125 91.8125C433.125 91.2292 433.292 90.5625 433.625 89.8125C433.958 89.0208 434.583 87.9167 435.5 86.5C436.375 85.0833 437.708 82.7917 439.5 79.625C441.333 76.4583 444.167 71.6667 448 65.25C451.833 58.8333 454.125 54.9583 454.875 53.625C456.458 50.875 457.75 48.875 458.75 47.625C460.625 45.25 463.792 44.0625 468.25 44.0625C469.25 44.0625 469.75 44.6875 469.75 45.9375C469.75 47.8958 467.938 51.5833 464.312 57L461.688 60.9375ZM117.375 188.938L117.875 191.312C117.875 192.312 117.354 193.5 116.312 194.875C113.562 198.458 109.146 202.583 103.062 207.25C97.0208 211.875 92.5625 214.188 89.6875 214.188C86.8125 214.188 84.5625 213.354 82.9375 211.688C81.3125 209.979 80.5 208.042 80.5 205.875C80.5 203.292 83.2083 197.583 88.625 188.75C96.75 175.625 107.125 160.292 119.75 142.75C117.083 145.5 110 152.917 98.5 165C73.0417 191.667 58.1667 206.771 53.875 210.312C53.1667 210.896 52.125 211.188 50.75 211.188C49.4167 211.188 48 210.646 46.5 209.562C45 208.438 44.25 207.188 44.25 205.812V205.5C44.4167 203.75 48.4375 195.188 56.3125 179.812C64.1875 164.438 70.7917 152.208 76.125 143.125C68.25 151.792 60.2917 161.458 52.25 172.125C36.9583 192.375 25.7708 209.625 18.6875 223.875C18.0625 225.208 17.2917 225.875 16.375 225.875C15.4583 225.875 14.125 225.646 12.375 225.188C8.70833 224.188 6.875 222.438 6.875 219.938C6.875 218.438 9.9375 213.083 16.0625 203.875C22.1875 194.625 29.2917 184.542 37.375 173.625C45.4583 162.667 53.8333 152.125 62.5 142C74.4583 128 82.1458 121 85.5625 121C86.1042 121 86.625 121.146 87.125 121.438C87.625 121.688 87.9375 121.812 88.0625 121.812C88.1875 121.812 88.3125 121.75 88.4375 121.625C88.9792 120.958 90.0417 120.625 91.625 120.625C93.25 120.625 94.8125 120.938 96.3125 121.562C97.8542 122.188 98.625 122.896 98.625 123.688C98.625 124.188 96.5417 128.167 92.375 135.625C78.4167 160.375 69.0417 177.375 64.25 186.625C68.8333 181.083 75.375 173.729 83.875 164.562C92.4167 155.396 101.375 146.25 110.75 137.125C122.958 125.292 130.25 119.375 132.625 119.375C133.583 119.375 134.792 119.583 136.25 120C138.833 120.75 141.312 121.125 143.688 121.125C144.354 121.25 144.917 121.542 145.375 122C145.875 122.417 146.125 122.854 146.125 123.312C146.125 123.771 146 124.146 145.75 124.438C132.208 142.438 120.792 158.312 111.5 172.062C102.208 185.812 96.4792 195.104 94.3125 199.938C98.6875 199.021 105.208 193.792 113.875 184.25C114.25 183.75 114.521 183.417 114.688 183.25C114.854 183.083 115 182.917 115.125 182.75C115.833 181.917 116.375 182.438 116.75 184.312C116.917 185.396 117.021 186.167 117.062 186.625C117.146 187.042 117.208 187.5 117.25 188C117.333 188.458 117.375 188.771 117.375 188.938ZM173.562 192.375C174.354 192.375 174.833 192.979 175 194.188C175.167 195.396 175.25 196.646 175.25 197.938C175.25 199.229 175.125 200.125 174.875 200.625C173.667 202.958 171.021 205.812 166.938 209.188C162.854 212.521 158.979 214.188 155.312 214.188C153.062 214.188 150.979 213.5 149.062 212.125C147.146 210.792 146.188 208.438 146.188 205.062C146.188 201.688 147.083 198.375 148.875 195.125C138.542 208.083 130.438 214.562 124.562 214.562C122.229 214.562 120.333 213.729 118.875 212.062C117.458 210.396 116.75 208.688 116.75 206.938C116.75 205.146 117 203.312 117.5 201.438C118 199.521 118.521 197.812 119.062 196.312C119.646 194.812 120.479 192.958 121.562 190.75C122.688 188.542 123.521 186.938 124.062 185.938C124.604 184.938 125.458 183.438 126.625 181.438C127.833 179.396 129.396 176.667 131.312 173.25C133.271 169.833 134.875 167.312 136.125 165.688C137.417 164.021 138.667 163.188 139.875 163.188C141.083 163.146 142.146 163.625 143.062 164.625C143.979 165.625 144.438 166.438 144.438 167.062C144.438 167.688 143.042 170.5 140.25 175.5C132 190.417 127.875 199.104 127.875 201.562C127.875 202.188 128.104 202.5 128.562 202.5C130.562 202.5 135.542 198.167 143.5 189.5C151.458 180.833 156.062 175.292 157.312 172.875C158.562 170.417 159.771 168.354 160.938 166.688C162.146 165.021 163.042 164 163.625 163.625C165.417 162.458 167.729 161.833 170.562 161.75C171.021 161.75 171.375 161.771 171.625 161.812C171.875 161.854 172.167 162.208 172.5 162.875C172.833 163.542 173 164.062 173 164.438C172.625 165.604 170.958 168.708 168 173.75C165.083 178.792 163.458 181.646 163.125 182.312C158.208 192.479 155.75 199.104 155.75 202.188C155.75 203.938 156.417 204.812 157.75 204.812C160.167 204.479 163.083 202.542 166.5 199C167.75 197.708 168.979 196.396 170.188 195.062C171.438 193.729 172.208 192.958 172.5 192.75C172.792 192.5 173.146 192.375 173.562 192.375ZM222.688 122.812C213.896 136.021 205.333 149.833 197 164.25C198.917 163.25 201.062 162.542 203.438 162.125C205.854 161.667 207.542 161.438 208.5 161.438C209.5 161.438 210.354 161.479 211.062 161.562C211.771 161.604 212.667 161.833 213.75 162.25C214.875 162.625 215.833 163.167 216.625 163.875C218.542 165.583 219.5 168 219.5 171.125C219.5 174.25 218.646 177.688 216.938 181.438C215.271 185.146 212.979 188.875 210.062 192.625C207.188 196.375 204.021 199.875 200.562 203.125C197.146 206.333 193.458 208.958 189.5 211C185.542 213.042 181.854 214.062 178.438 214.062C176.854 214.062 175.021 213.042 172.938 211C170.896 208.958 169.875 206.271 169.875 202.938C169.875 199.604 171.312 194.438 174.188 187.438C177.062 180.438 180.542 173.333 184.625 166.125C188.75 158.875 192.938 151.812 197.188 144.938C201.479 138.062 205.125 132.438 208.125 128.062C211.125 123.688 212.958 121.167 213.625 120.5C214.292 119.833 215.5 119.271 217.25 118.812C219.042 118.354 220.583 118.146 221.875 118.188C223.167 118.188 223.812 118.771 223.812 119.938C223.812 120.688 223.438 121.646 222.688 122.812ZM205.812 182.812C207.521 179.812 208.375 177.083 208.375 174.625C208.375 172.167 207.583 170.938 206 170.938C204.458 170.938 202.062 171.625 198.812 173C195.604 174.333 193.771 175 193.312 175C192.854 175 192.25 174.625 191.5 173.875C183.375 188.5 179.312 197.833 179.312 201.875C179.312 203.75 179.917 204.688 181.125 204.688C184 204.688 188.146 202.292 193.562 197.5C198.979 192.667 203.062 187.771 205.812 182.812ZM266.688 164.5C269.854 164.5 271.438 165.583 271.438 167.75C271.438 168.917 271.167 169.771 270.625 170.312C270.083 170.854 268.917 172.667 267.125 175.75C265.375 178.792 263.417 182.708 261.25 187.5C259.125 192.25 257.75 196.312 257.125 199.688C257 200.104 256.938 200.688 256.938 201.438C256.938 203.729 257.562 204.875 258.812 204.875C260.062 204.875 261.542 204.292 263.25 203.125C264.958 201.917 266.479 200.646 267.812 199.312C269.146 197.938 270.438 196.542 271.688 195.125C272.979 193.708 273.75 192.896 274 192.688C274.25 192.479 274.625 192.375 275.125 192.375C275.917 192.375 276.396 192.979 276.562 194.188C276.729 195.396 276.812 196.646 276.812 197.938C276.812 199.229 276.688 200.125 276.438 200.625C275.229 203 272.562 205.854 268.438 209.188C264.354 212.521 260.625 214.188 257.25 214.188C253.917 214.188 251.458 213.167 249.875 211.125C248.292 209.083 247.5 206.833 247.5 204.375C247.5 201.875 247.917 199.688 248.75 197.812C245.292 202.312 241.312 206.125 236.812 209.25C232.354 212.375 228.708 213.938 225.875 213.938C223.042 213.938 220.729 213.083 218.938 211.375C216.646 209.25 215.5 206.312 215.5 202.562C215.5 198.771 216.333 194.979 218 191.188C219.708 187.354 221.938 183.875 224.688 180.75C227.438 177.583 230.458 174.708 233.75 172.125C240.667 166.708 247.042 164 252.875 164C255.125 164 256.958 164.375 258.375 165.125C259.792 165.875 260.688 166.812 261.062 167.938C262.062 166.438 262.896 165.5 263.562 165.125C264.271 164.708 265.312 164.5 266.688 164.5ZM258.375 171.438C251.25 171.438 243.875 175.396 236.25 183.312C233.542 186.146 231.042 189.542 228.75 193.5C226.5 197.458 225.375 200.167 225.375 201.625C225.375 203.083 225.792 203.812 226.625 203.812C227.792 203.812 231.042 201.521 236.375 196.938C241.708 192.312 245.25 188.917 247 186.75C248.917 184.333 252.708 179.229 258.375 171.438ZM291.562 177.938C301.396 166.771 309.771 161.188 316.688 161.188C318.396 161.188 319.792 161.708 320.875 162.75C322 163.75 322.562 165.062 322.562 166.688C322.562 168.312 321.396 171.042 319.062 174.875C316.771 178.667 314.646 181.875 312.688 184.5C311.646 185.833 310.458 186.5 309.125 186.5C307.833 186.5 306.812 186.021 306.062 185.062C305.354 184.104 305 182.979 305 181.688C305 178.812 306.542 175.562 309.625 171.938L309.5 171.812C308.125 171.938 304.708 174.646 299.25 179.938C293.833 185.229 289.208 189.979 285.375 194.188C281.583 198.354 277.458 203.438 273 209.438C271.708 211.229 270.604 212.125 269.688 212.125C268.812 212.125 267.646 211.854 266.188 211.312C264.688 210.729 263.792 210.312 263.5 210.062C263.167 209.812 263 209.396 263 208.812C263 208.229 263.167 207.562 263.5 206.812C263.833 206.021 264.458 204.917 265.375 203.5C266.25 202.083 267.583 199.792 269.375 196.625C271.208 193.458 274.042 188.667 277.875 182.25C281.708 175.833 284 171.958 284.75 170.625C286.333 167.875 287.625 165.875 288.625 164.625C290.5 162.25 293.667 161.062 298.125 161.062C299.125 161.062 299.625 161.688 299.625 162.938C299.625 164.896 297.812 168.583 294.188 174L291.562 177.938ZM363.562 164.5C366.729 164.5 368.312 165.583 368.312 167.75C368.312 168.917 368.042 169.771 367.5 170.312C366.958 170.854 365.792 172.667 364 175.75C362.25 178.792 360.292 182.708 358.125 187.5C356 192.25 354.625 196.312 354 199.688C353.875 200.104 353.812 200.688 353.812 201.438C353.812 203.729 354.438 204.875 355.688 204.875C356.938 204.875 358.417 204.292 360.125 203.125C361.833 201.917 363.354 200.646 364.688 199.312C366.021 197.938 367.312 196.542 368.562 195.125C369.854 193.708 370.625 192.896 370.875 192.688C371.125 192.479 371.5 192.375 372 192.375C372.792 192.375 373.271 192.979 373.438 194.188C373.604 195.396 373.688 196.646 373.688 197.938C373.688 199.229 373.562 200.125 373.312 200.625C372.104 203 369.438 205.854 365.312 209.188C361.229 212.521 357.5 214.188 354.125 214.188C350.792 214.188 348.333 213.167 346.75 211.125C345.167 209.083 344.375 206.833 344.375 204.375C344.375 201.875 344.792 199.688 345.625 197.812C342.167 202.312 338.188 206.125 333.688 209.25C329.229 212.375 325.583 213.938 322.75 213.938C319.917 213.938 317.604 213.083 315.812 211.375C313.521 209.25 312.375 206.312 312.375 202.562C312.375 198.771 313.208 194.979 314.875 191.188C316.583 187.354 318.812 183.875 321.562 180.75C324.312 177.583 327.333 174.708 330.625 172.125C337.542 166.708 343.917 164 349.75 164C352 164 353.833 164.375 355.25 165.125C356.667 165.875 357.562 166.812 357.938 167.938C358.938 166.438 359.771 165.5 360.438 165.125C361.146 164.708 362.188 164.5 363.562 164.5ZM355.25 171.438C348.125 171.438 340.75 175.396 333.125 183.312C330.417 186.146 327.917 189.542 325.625 193.5C323.375 197.458 322.25 200.167 322.25 201.625C322.25 203.083 322.667 203.812 323.5 203.812C324.667 203.812 327.917 201.521 333.25 196.938C338.583 192.312 342.125 188.917 343.875 186.75C345.792 184.333 349.583 179.229 355.25 171.438ZM369 213.5L365 212.625C363.792 212.5 362.792 211.729 362 210.312C361.792 209.938 361.667 209.708 361.625 209.625C361.542 209.542 361.5 209.438 361.5 209.312C361.5 209.188 361.542 209.021 361.625 208.812C361.708 208.562 361.833 208.25 362 207.875C362.167 207.458 362.312 207.042 362.438 206.625C363.312 203.667 370.625 189.75 384.375 164.875C398.125 140 405.312 127.188 405.938 126.438C406.604 125.646 407.083 125.083 407.375 124.75C407.708 124.375 408.062 124.062 408.438 123.812C408.854 123.562 409.146 123.396 409.312 123.312C409.521 123.229 409.896 123.104 410.438 122.938C411.021 122.729 411.604 122.521 412.188 122.312C412.812 122.104 413.458 121.833 414.125 121.5C414.792 121.125 415.25 120.875 415.5 120.75C415.75 120.583 416.062 120.5 416.438 120.5C416.854 120.5 417.229 120.688 417.562 121.062C417.938 121.438 418.125 121.917 418.125 122.5V122.938C417.917 123.729 412.479 133.604 401.812 152.562C391.188 171.521 385.396 181.896 384.438 183.688C387.688 182.396 392.479 179.208 398.812 174.125C405.146 169.042 408.333 165.667 408.375 164C408.458 162.333 409.042 161.125 410.125 160.375C411.208 159.625 412.375 159.25 413.625 159.25C414.917 159.25 416 159.688 416.875 160.562C417.792 161.396 418.229 162.792 418.188 164.75C418.146 166.667 417.062 169.125 414.938 172.125C412.812 175.083 410.271 177.833 407.312 180.375C400.938 185.792 395.625 189.375 391.375 191.125C394.75 200.25 398.625 204.812 403 204.812C405.375 204.479 408.292 202.542 411.75 199C413.042 197.708 414.292 196.417 415.5 195.125C416.708 193.792 417.438 193 417.688 192.75C417.979 192.5 418.375 192.375 418.875 192.375C419.667 192.375 420.146 192.979 420.312 194.188C420.479 195.396 420.562 196.646 420.562 197.938C420.562 199.229 420.438 200.125 420.188 200.625C418.979 202.958 416.333 205.812 412.25 209.188C408.167 212.521 404.292 214.188 400.625 214.188C398 214.188 395.917 213.688 394.375 212.688C392.833 211.688 391.625 210.854 390.75 210.188C389.875 209.521 388.979 208.625 388.062 207.5C387.146 206.333 386.375 205.375 385.75 204.625C385.167 203.875 384.479 202.833 383.688 201.5C382.938 200.167 382.396 199.229 382.062 198.688C381.729 198.104 381.229 197.188 380.562 195.938C379.938 194.646 379.583 193.938 379.5 193.812C378.75 195.354 377.917 197.021 377 198.812C376.083 200.604 375.25 202.271 374.5 203.812C373.75 205.354 373.062 206.771 372.438 208.062C371.812 209.312 371.292 210.354 370.875 211.188C370.5 212.021 370.292 212.458 370.25 212.5C369.958 213.167 369.542 213.5 369 213.5ZM482 117.812L486.812 118.438C487.854 118.438 488.375 118.771 488.375 119.438C488.375 119.562 488.292 119.833 488.125 120.25C475.208 139.208 460.833 161.521 445 187.188C444.125 188.646 443.271 189.5 442.438 189.75C442.396 189.75 442.354 189.771 442.312 189.812C442.271 189.854 442.188 189.917 442.062 190C441.979 190.042 441.854 190.083 441.688 190.125C441.062 190.375 440.333 190.5 439.5 190.5C438.667 190.5 438.083 190.625 437.75 190.875C437.417 191.125 436.771 191.25 435.812 191.25C434.271 191.25 433.5 190.458 433.5 188.875C433.5 186.083 437.062 178.958 444.188 167.5C451.354 156 458.375 145.333 465.25 135.5C472.125 125.625 476.521 119.938 478.438 118.438C478.979 118.021 480.167 117.812 482 117.812ZM420.625 212.125C420.625 209.5 421.729 207.125 423.938 205C426.146 202.833 428.458 201.75 430.875 201.75C433.333 201.75 434.562 202.958 434.562 205.375C434.562 207.792 433.438 210.188 431.188 212.562C428.979 214.938 426.667 216.125 424.25 216.125C421.833 216.125 420.625 214.792 420.625 212.125Z"
			/>
		</svg>
	)
}
