import type { IStarProps } from './Star.props'
import styles from './Star.module.css'
import cn from 'classnames'
import { Svg } from '../Svg/Svg'

function Star({ view, className, ...props }: IStarProps) {
	return (
		<Svg
			{...props}
			id="star"
			className={cn(styles.star, className, {
				[styles.primary]: view === 'primary',
				[styles.secondary]: view === 'secondary',
			})}
		/>
	)
}

export { Star }
