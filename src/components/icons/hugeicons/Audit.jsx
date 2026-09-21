import * as React from 'react';
import Svg, { Defs, Mask, Path, Circle, Rect } from 'react-native-svg';
const Audit = ({ size = 24, color = 'black' }) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width={size}
		height={size}
		fill='none'
	>
		<Defs>
			<Mask id='a'>
				<Path fill='#fff' d='M0 0h24v24H0z' />
				<Circle cx={15.5} cy={16.5} r={3.75} fill='#000' />
			</Mask>
		</Defs>
		<Rect
			x={4}
			y={2.5}
			width={14.5}
			height={18}
			rx={3.75}
			fill={color}
			fillOpacity={0.32}
			mask='url(#a)'
		/>
		<Path
			d='M18.5 10.5V6.25c0-2.07-1.68-3.75-3.75-3.75h-7C5.68 2.5 4 4.18 4 6.25v10.5c0 2.07 1.68 3.75 3.75 3.75H10m-2-13h6.5M8 11.2h2.5'
			stroke={color}
			strokeWidth={1.8}
			strokeLinecap='round'
		/>
		<Circle cx={15.5} cy={16.5} r={3.75} stroke={color} strokeWidth={1.8} />
		<Path
			d='m18.25 19.25 2.25 2.25'
			stroke={color}
			strokeWidth={1.8}
			strokeLinecap='round'
		/>
	</Svg>
);
export default Audit;
