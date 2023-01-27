import type { DetailedHTMLProps, SVGAttributes } from 'react'

export interface IStarProps
	extends DetailedHTMLProps<SVGAttributes<SVGSVGElement>, SVGSVGElement> {
	view: 'primary' | 'secondary'
}
