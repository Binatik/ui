// import { useState } from 'react'
import { useState } from 'react'
import { RaitingStar } from '../entities/components'
import {
	Button,
	Marker,
	MarkerWithBackground,
	Paragraph,
	Rating,
	Star,
	Tag,
} from '../shared/ui'
import { WithLayouts } from '../_app/styles/layouts'
export default function Home() {
	const [filledRating, setFilledRating] = useState(3)
	return (
		<>
			<WithLayouts>
				<Tag heading="h1">Текст</Tag>
				<Button view="secondary" arrow="left">
					Тест
				</Button>
				<Button view="primary" arrow="bottom">
					Тест
				</Button>
				<Paragraph size="small">Текст</Paragraph>
				<Marker size="small" view="secondary">
					<Paragraph>Photoshop</Paragraph>
				</Marker>
				<Marker
					href="https://vk.com/id269791339"
					size="small"
					view="primary">
					<Paragraph>Графический дизайн</Paragraph>
				</Marker>
				<MarkerWithBackground view="surface">
					<Paragraph weight={700}>-10 000 ₽</Paragraph>
				</MarkerWithBackground>
				<MarkerWithBackground size="small" view="primary">
					<Paragraph>hh.ru</Paragraph>
				</MarkerWithBackground>
				<RaitingStar view="primary" filledRating={3} />
			</WithLayouts>
		</>
	)
}
