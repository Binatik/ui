import type { ILayoutProps } from './Layout.props'
import cn from 'classnames'
import styles from './Layout.module.css'
import { Header } from './Header/Header'
import { Sidebar } from './Sidebar/Sidebar'
import { Footer } from './Footer/Footer'

function WithLayouts({ children }: ILayoutProps) {
	return (
		<>
			<div className={cn(styles.wrapper)}>
				<Header className={cn(styles.header)} />
				<Sidebar className={cn(styles.sidebar)} />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	)
}

export { WithLayouts }
