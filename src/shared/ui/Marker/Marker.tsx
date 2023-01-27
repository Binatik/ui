import type { IMarkerProps } from './Marker.props'
import styles from './Marker.module.css'
import cn from 'classnames'

function Marker({ view, size, children, href, className }: IMarkerProps) {
	return (
		<>
			<div
				className={cn(styles.marker, className, {
					[styles.primary]: view === 'primary',
					[styles.secondary]: view === 'secondary',
					[styles.small]: size === 'small',
					[styles.medium]: size === 'medium',
				})}>
				{href ? (
					<a target="_blank" href={href} rel="noreferrer">
						{children}
					</a>
				) : (
					<>{children}</>
				)}
			</div>
		</>
	)
}

export { Marker }
