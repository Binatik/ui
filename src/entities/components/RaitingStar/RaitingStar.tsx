import type { IRaitingStarProps } from './RaitingStar.props'
import styles from './RaitingStar.module.css'
import cn from 'classnames'
import React, { useState } from 'react'
import { Star } from '../../../shared/ui'

enum Event {
	MouseEnterRating = 'mouseEnterRating',
	MouseLeaveRating = 'mouseLeaveRating',
}

const stars = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

function RaitingStar({
	view,
	hasBlocked = false,
	filledRating,
	className,
}: IRaitingStarProps) {
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
			default:
				return
		}
	}

	return (
		<>
			<div style={{ display: 'flex' }}>
				{stars.map((rating, index) => (
					<span
						className={cn(styles.raiting, className, {
							[styles.filled]: index < indexRating,
							[styles.blocked]: hasBlocked,
							[styles.primary]: view === 'primary',
							[styles.secondary]: view === 'secondary',
						})}
						key={rating.id}
						onMouseEnter={() =>
							change(index + 1, Event.MouseEnterRating)
						}
						onMouseLeave={() =>
							change(filledRating, Event.MouseLeaveRating)
						}>
						<Star tabIndex={!hasBlocked ? 0 : -1} view="secondary" />
					</span>
				))}
			</div>
		</>
	)
}

export { RaitingStar }
