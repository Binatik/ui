import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
export interface IMarkerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	view: 'primary' | 'secondary'
	size?: 'small' | 'medium'
	href?: string
	children: ReactNode
}
