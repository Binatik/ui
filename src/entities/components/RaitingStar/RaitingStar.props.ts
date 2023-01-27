import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IRaitingStarProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	hasBlocked?: boolean
	filledRating: number
	view: 'primary' | 'secondary'
}
