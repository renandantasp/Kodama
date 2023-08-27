/* eslint-disable import/prefer-default-export */
export function ReleaseDateParser(date: string | null): string {
	if (date == null) {
		return 'TBA'
	}
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
	return `Dec ${dateArr[2]}, ${dateArr[0]}`
}

export function DateSinceParser(date: Date): string {
	const now = new Date()
	const then = new Date(date.seconds * 1000)
	const year = now.getFullYear() - then.getFullYear()
	if (year > 0) {
		if (year === 1) {
			return '1 year ago'
		}
		return `${year} years ago`
	}
	const month = now.getMonth() - then.getMonth()
	if (month > 0) {
		if (month === 1) {
			return '1 month ago'
		}
		return `${month} months ago`
	}

	const day = now.getDay() - then.getDay()
	if (day > 0) {
		if (day === 1) return '1 day ago'
		if (day < 7) return `${day} days ago`
		if (day < 13) return `1 week ago`
		if (day < 20) return `2 weeks ago`
		if (day < 30) return `3 weeks ago`
	}

	const hour = now.getHours() - then.getHours()
	if (hour > 0) {
		if (hour === 1) return '1 hour ago'
		return `${hour} hours ago`
	}

	const minutes = now.getMinutes() - then.getMinutes()
	if (minutes > 0) {
		if (minutes === 1) return '1 minute ago'
		return `${minutes} minutes ago`
	}

	return 'Just a while ago'
}
