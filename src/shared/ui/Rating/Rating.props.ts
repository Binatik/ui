import type { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IRatingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	hasBlocked: boolean
	filledRating: number
	setFilledRating: (rating: number) => void
}
