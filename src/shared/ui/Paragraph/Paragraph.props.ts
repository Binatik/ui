import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const

export interface IParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode
	size?: 'small' | 'medium' | 'large'
	weight?: typeof weights[number]
}
