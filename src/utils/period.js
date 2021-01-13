import { add, format, isSameDay } from 'date-fns';

export function calculatePeriod(start, cycleDuration) {
	let period = {
		startingDate: start,
		dates: [start],
		ovulation: add(new Date(start), { days: cycleDuration / 3 }),
	};
	for (let i = 0; i < 6; i++) {
		period.dates.push(add(new Date(period.dates[i]), { days: 1 }));
	}

	return period;
}

export function predictPeriods(starting, number, cycleLength) {
	let periods = [];
	for (let i = 0; i < number; i++) {
		periods.push(
			calculatePeriod(
				new Date(starting.setMonth(starting.getMonth() + i)),
				cycleLength
			)
		);
	}
	return periods;
}
