import type { IRatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import { Svg } from '../Svg/Svg'
import React, { useState } from 'react'

enum Event {
	MouseEnterRating = 'mouseEnterRating',
	MouseLeaveRating = 'mouseLeaveRating',
	OnClickRating = 'onClickRating',
}

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

function Rating({
	hasBlocked,
	filledRating,
	className,
	setFilledRating,
}: IRatingProps) {
	const [indexRating, setIndexRating] = useState(filledRating)

	function change(index: number, observe: Event) {
		if (hasBlocked) {
			return
		}

		switch (observe) {
			case Event.MouseEnterRating:
				setIndexRating(index)
				break
			case Event.MouseLeaveRating:
				setIndexRating(index)
				break
			case Event.OnClickRating:
				setFilledRating(index)
				break
			default:
				return
		}
	}

	return (
		<>
			<div style={{ display: 'flex' }}>
				{stars.map((rating, index) => (
					<span
						className={cn(styles.star, className, {
							[styles.filled]: index < indexRating,
							[styles.blocked]: hasBlocked,
						})}
						key={rating.id}
						onMouseEnter={() =>
							change(index + 1, Event.MouseEnterRating)
						}
						onMouseLeave={() =>
							change(filledRating, Event.MouseLeaveRating)
						}
						onClick={() => change(index + 1, Event.OnClickRating)}>
						<Svg
							id="star"
							className={cn(className)}
							tabIndex={!hasBlocked ? 0 : -1}
						/>
					</span>
				))}
			</div>
		</>
	)
}

export { Rating }
