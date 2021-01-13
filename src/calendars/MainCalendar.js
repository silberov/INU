import React, { useState, useEffect } from 'react';
import { predictPeriods } from '../utils/period';
import { add, format, isSameDay } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import '../App.css';
import Button from '../components/Buttons/Buttons';
import {
	FormContainer,
	P,
	MainHeader,
	Header,
	LogoHomePage,
	BottomPattern,
} from '../components/typography';
import colors from '../components/utils/colors';

export default function MainCalendar() {
	const today = new Date();
	const [date, setDate] = useState(new Date());
	const [periods, setPeriods] = useState();
	const [nextPeriod, setNextPeriod] = useState([]);
	const [nextOvulation, setNextOvulation] = useState([]);
	const [input, setInput] = useState(28);
	const [periodTwo, setPeriodTwo] = useState([]);
	const [ovulationTwo, setOvulationTwo] = useState([]);
	useEffect(() => {
		console.log('date changed', date);
		setPeriods(predictPeriods(date, 3));
		console.log(periods);
	}, [date]);

	const handlePickDate = (date) => {};

	function changeModifier(array) {
		// [{startingDate, dates:[],  ovulation:"dsfg"}]
		const modifiers = {};
		array.map((el) => {
			modifiers.highlight = (date) => {
				return {
					...modifiers.hightlight,
					...nextPeriod.some((d) => {
						return isSameDay(d, date);
					}),
				};
			};
		});
		/*
        {
            highlight:(date)=>el.period.some((d)=>{return isSameDay(d,  date)})
        }
    */
	}
	const modifiers = {
		highlight: (date) => {
			return nextPeriod.some((d) => {
				return isSameDay(d, date);
			});
		},
		highlight2: (monthTwo) => {
			return periodTwo.some((d) => {
				return isSameDay(d, monthTwo);
			});
		},
		ovulation: (date) => {
			return nextOvulation.some((d) => {
				return isSameDay(d, date);
			});
		},
		ovulation2: (monthTwo) => {
			return ovulationTwo.some((d) => {
				return isSameDay(d, monthTwo);
			});
		},
	};
	console.log(modifiers);

	const modifiersClassNames = {
		highlight: '-period',
		highlight2: '-period2',
		ovulation: '-ovulation',
		ovulation2: '-ovulation2',
	};

	// console.log(nextPeriod);
	// console.log('next period 0', nextPeriod[0]);

	// const handleFormSubmit = (event) => {
	//   console.log(input)
	// }

	return (
		<div>
			<FormContainer>
				<P color={colors.primary}>
					<div>
						<p>
							How many days does your cycle usually last? The average is 28
							days.
						</p>
						<form>
							<input
								className='form'
								type='number'
								min='20'
								max='40'
								placeholder='enter number of days'
								value={input}
								onChange={(event) => {
									console.log('days', input);
									setInput(event.target.value);
								}}
							/>
						</form>
					</div>
					<div className='calendar'>
						<p>
							Please select the first day of your last period.
							<br />
							Selected date:
							{date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
						</p>
						<DatePickerCalendar
							date={date}
							onDateChange={(e) => setDate(e)}
							modifiers={(date) => modifiers(date)}
							modifiersClassNames={modifiersClassNames}
							locale={enGB}
							months={2}
						/>
					</div>
				</P>
			</FormContainer>
		</div>
	);
}
