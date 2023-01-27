import type { IParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'
import cn from 'classnames'

function Paragraph({ size, weight, children, className }: IParagraphProps) {
	return (
		<>
			<p
				style={{ fontWeight: weight }}
				className={cn(styles.paragraph, className, {
					[styles.small]: size === 'small',
					[styles.medium]: size === 'medium',
					[styles.large]: size === 'large',
				})}>
				{children}
			</p>
		</>
	)
}

export { Paragraph }
