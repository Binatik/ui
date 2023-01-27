import { type ITagProps } from './Tag.props'
import styles from './Tag.module.css'
import { exhaustivenessCheck } from '../../../helpers'

function Tag({ heading, children }: ITagProps) {
	switch (heading) {
		case 'h1':
			return <h1 className={styles.h1}>{children}</h1>
		case 'h2':
			return <h2 className={styles.h2}>{children}</h2>
		case 'h3':
			return <h3 className={styles.h3}>{children}</h3>
		default:
			exhaustivenessCheck<ITagProps[typeof heading]>(heading)
	}
}

export { Tag }
