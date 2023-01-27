import type { IMarkerWithBackgroundProps } from './MarkerWithBackground.props'
import styles from './MarkerWithBackground.module.css'
import cn from 'classnames'

function MarkerWithBackground({
	view,
	size,
	children,
	href,
	className,
}: IMarkerWithBackgroundProps) {
	return (
		<>
			<div
				className={cn(styles.marker, className, {
					[styles.primary]: view === 'primary',
					[styles.secondary]: view === 'secondary',
					[styles.surface]: view === 'surface',
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

export { MarkerWithBackground }
