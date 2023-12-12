import { FC } from 'react';
import useStyle from '../../hooks/useStyle';
import { IPropsCheckPage } from '../../types/checkPage.types';
import styles from './CheckPage.module.scss';

const CheckPage: FC<IPropsCheckPage> = ({ arrColor, arrPage }) => {
	const { colorBorder } = useStyle();

	return (
		<div className={styles.wrapper}>
			<div className={styles.block__page}>
				<p style={{ color: colorBorder(arrColor) }}>{arrColor + 1}</p>
				<p style={{ color: colorBorder(arrColor) }}> / </p>
				<p style={{ color: colorBorder(arrColor) }}>{arrPage.length}</p>
			</div>

			<div className={styles.block__dots}>
				{arrPage.map((dot: number) => {
					return (
						<div
							key={dot}
							className={styles.dot}
							style={{ backgroundColor: colorBorder(arrColor) }}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default CheckPage;
