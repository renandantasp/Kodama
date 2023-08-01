function DateParser(date: string): string {
	const dateArr = date.split('-')

	if (dateArr[1] === '01') return `Jan ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '02') return `Fev ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '03') return `Mar ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '04') return `Apr ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '05') return `May ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '06') return `Jun ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '07') return `Jul ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '08') return `Aug ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '09') return `Sep ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '10') return `Oct ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '11') return `Nov ${dateArr[2]}, ${dateArr[0]}`
	return `DEC ${dateArr[2]}, ${dateArr[0]}`
}

export default DateParser
