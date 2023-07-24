function DateParser(date: string): string {
	const dateArr = date.split('-')

	if (dateArr[1] === '01') return `JAN ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '02') return `FEV ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '03') return `MAR ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '04') return `APR ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '05') return `MAY ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '06') return `JUN ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '07') return `JUL ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '08') return `AUG ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '09') return `SEP ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '10') return `OCT ${dateArr[2]}, ${dateArr[0]}`
	if (dateArr[1] === '11') return `NOV ${dateArr[2]}, ${dateArr[0]}`
	return `DEC ${dateArr[2]}, ${dateArr[0]}`
}

export default DateParser
