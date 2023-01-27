import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
export interface IMarkerWithBackgroundProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	view: 'primary' | 'secondary' | 'surface'
	size?: 'small' | 'medium'
	href?: string
	children: ReactNode
}
