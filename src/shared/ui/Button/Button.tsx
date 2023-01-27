import { type IButtonProps } from './Button.props'
import cn from 'classnames'
import styles from './Button.module.css'
import { Svg } from '../Svg/Svg'

function Button({ arrow = 'none', view, children, className }: IButtonProps) {
	return (
		<>
			<button
				className={cn(styles.button, className, {
					[styles.primary]: view === 'primary',
					[styles.secondary]: view === 'secondary',
				})}
				type="button">
				{children}

				{arrow !== 'none' && (
					<span
						className={cn(styles.arrow, {
							[styles.bottom]: arrow === 'bottom',
							[styles.left]: arrow === 'left',
						})}>
						<Svg id="arrow" />
					</span>
				)}
			</button>
		</>
	)
}

export { Button }
