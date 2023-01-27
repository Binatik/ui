import type { DetailedHTMLProps, SVGAttributes } from 'react'
const keys = ['arrow', 'star'] as const

export interface ISvgProps
	extends DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement> {
	id: typeof keys[number]
}
