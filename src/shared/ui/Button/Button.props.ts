import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	view: 'primary' | 'secondary'
	arrow?: 'left' | 'bottom' | 'none'
	children: ReactNode
}
