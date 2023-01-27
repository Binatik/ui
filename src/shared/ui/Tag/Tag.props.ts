import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ITagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	heading: 'h1' | 'h2' | 'h3'
	children: ReactNode
}
