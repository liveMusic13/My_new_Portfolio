import cn from 'clsx';
import { FC } from 'react';
import useStyle from '../../hooks/useStyle';
import styles from './Content.module.scss';

const Content: FC = ({ info, section, arrColor }) => {
	const { colorH2, colorText, colorBorder } = useStyle();

	return (
		<div
			className={cn(
				{ [styles.wrapper__main]: section === 'main' },
				{ [styles.wrapper__next]: section === 'next' },
				{
					[styles['wrapper__three_next']]: section === 'three__next',
				},
				{
					[styles['wrapper__four_next']]: section === 'four__next',
				},
				{
					[styles['wrapper__five_next']]: section === 'five__next',
				},
				{
					[styles['wrapper__six_next']]: section === 'six__next',
				},
				{ [styles['wrapper__seven_next']]: section === 'seven__next' }
			)}
		>
			<h1 className={styles[`page__name`]}>
				{info.pageName === 'start-page' ? (
					<>
						Дмитрий <br />
						<span>Коваленко</span>
					</>
				) : (
					'Д.K.'
				)}
			</h1>

			<p className={styles.text} style={{ color: colorText(arrColor) }}>
				{info.text !== 'none' && info.text}
			</p>

			{info.pageName === 'about-me' ? (
				<div className={styles.block_h2}>
					<h2
						className={styles[`page__prof`]}
						style={{ color: colorH2(arrColor) }}
					>
						{info.h2}
					</h2>
					<ul style={{ color: colorText(arrColor) }}>
						<li>
							-{' '}
							<a style={{ color: colorText(arrColor) }} href='#'>
								Россельхозбанк
							</a>
						</li>
						<li>
							-{' '}
							<a style={{ color: colorText(arrColor) }} href='#'>
								ЭКСМО
							</a>
						</li>
						<li>
							-{' '}
							<a style={{ color: colorText(arrColor) }} href='#'>
								This is Хорошо
							</a>
						</li>
					</ul>
				</div>
			) : (
				<h2
					className={styles[`page__prof`]}
					style={{ color: colorH2(arrColor) }}
				>
					{info.h2}
				</h2>
			)}

			<div className={styles[`page__block-view`]}>
				{info.pageName !== 'start-page' ? (
					<div
						style={{ backgroundColor: colorBorder(arrColor) }}
						className={styles.view}
					>
						<svg
							className={styles.svg}
							x='0px'
							y='0px'
							viewBox='0 0 33.656 33.656'
							enableBackground='new 0 0 33.656 33.656'
							xmlSpace='preserve'
						>
							<circle fill='#fff' cx='16.828' cy='16.828' r='16.828'></circle>
							<circle
								className='js-eye-retina'
								fill='#DC5141'
								cx='16.828'
								cy='16.828'
								r='9.003'
								style={{
									fill: 'rgb(11, 11, 11)',
								}}
							></circle>
							<circle
								className='js-eye-pupil'
								fill='#3A3C43'
								cx='16.828'
								cy='16.828'
								r='5.892'
								style={{
									fill: 'rgb(255, 218, 68)',
								}}
							></circle>
							<circle
								className='js-eye-highlight'
								fill='#FFFFFF'
								cx='21.342'
								cy='12.952'
								r='3.383'
							></circle>
							<g className='js-eye-lid' fill={colorViewImage(arrColor)}>
								<g>
									<path d='M16.828,26.39C8.911,26.39,4.989,17.25,0,16.76v16.896h33.656V16.76 C28.667,17.25,24.745,26.39,16.828,26.39z'></path>
								</g>
								<g>
									<path d='M16.828,7.266c-7.917,0-11.839,9.139-16.828,9.63V0h33.656v16.896 C28.667,16.406,24.745,7.266,16.828,7.266z'></path>
								</g>
							</g>
						</svg>
						<p style={colorViewText(arrColor)} className={styles.view__text}>
							Посмотреть
						</p>
					</div>
				) : (
					<>
						<div className={styles.view}>
							<p>Далее</p>
						</div>
						<button>&#8658;</button>
					</>
				)}
			</div>

			{/* {info.pageName !== 'about-me' ? (
				<div className={styles[`page__block-view`]}>
					{info.pageName !== 'start-page' ? (
						<div style={colorView(arrColor)} className={styles.view}>
							<svg
								className={styles.svg}
								x='0px'
								y='0px'
								viewBox='0 0 33.656 33.656'
								enableBackground='new 0 0 33.656 33.656'
								xmlSpace='preserve'
							>
								<circle fill='#fff' cx='16.828' cy='16.828' r='16.828'></circle>
								<circle
									className='js-eye-retina'
									fill='#DC5141'
									cx='16.828'
									cy='16.828'
									r='9.003'
									style={{
										fill: 'rgb(11, 11, 11)',
									}}
								></circle>
								<circle
									className='js-eye-pupil'
									fill='#3A3C43'
									cx='16.828'
									cy='16.828'
									r='5.892'
									style={{
										fill: 'rgb(255, 218, 68)',
									}}
								></circle>
								<circle
									className='js-eye-highlight'
									fill='#FFFFFF'
									cx='21.342'
									cy='12.952'
									r='3.383'
								></circle>
								<g className='js-eye-lid' fill={colorViewImage(arrColor)}>
									<g>
										<path d='M16.828,26.39C8.911,26.39,4.989,17.25,0,16.76v16.896h33.656V16.76 C28.667,17.25,24.745,26.39,16.828,26.39z'></path>
									</g>
									<g>
										<path d='M16.828,7.266c-7.917,0-11.839,9.139-16.828,9.63V0h33.656v16.896 C28.667,16.406,24.745,7.266,16.828,7.266z'></path>
									</g>
								</g>
							</svg>
							<p style={colorViewText(arrColor)} className={styles.view__text}>
								Посмотреть
							</p>
						</div>
					) : (
						<>
							<div className={styles.view}>
								<p>Далее</p>
							</div>
							<button>&#8658;</button>
						</>
					)}
				</div>
			) */}
			<div className={styles.arrow__next}>&#10230;</div>
		</div>
	);
};

export default Content;
