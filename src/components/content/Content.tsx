import cn from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import { useDetailPage } from '../../hooks/useDetailPage';
import useStyle from '../../hooks/useStyle';
import { IPropsContent } from '../../types/propsContent.types';
import styles from './Content.module.scss';

const Content: FC<IPropsContent> = ({
	info,
	section,
	arrColor,
	setArrColor,
	moveText,
	setNextAnim,
	nextAnim,
}) => {
	const { colorH2, colorText, colorBorder, roadColor } = useStyle();
	const { setIsViewDetailPage } = useDetailPage();

	const [mouseOnView, setMouseOnView] = useState(false);

	const blockViewRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseEnter = () => {
			setMouseOnView(true);
		};

		const handleMouseLeave = () => {
			setMouseOnView(false);
		};

		if (blockViewRef.current) {
			blockViewRef.current.addEventListener('mouseenter', handleMouseEnter);
			blockViewRef.current.addEventListener('mouseleave', handleMouseLeave);

			return () => {
				if (blockViewRef.current) {
					blockViewRef.current.removeEventListener(
						'mouseenter',
						handleMouseEnter
					);
					blockViewRef.current.removeEventListener(
						'mouseleave',
						handleMouseLeave
					);
				}
			};
		}
	}, [blockViewRef.current]);

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
			<h1
				className={styles[`page__name`]}
				style={{ color: colorText(arrColor) }}
			>
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

			<div
				className={styles[`page__block-view`]}
				style={
					section === 'main' && info.pageName !== 'start-page'
						? { display: 'flex' }
						: {}
				}
			>
				{info.pageName !== 'start-page' ? (
					<>
						<img
							className={styles.image_preview}
							src='./images/hackathons/preview.jpg'
							alt='img'
						/>
						<div
							ref={blockViewRef}
							style={{ backgroundColor: colorBorder(arrColor) }}
							className={styles.view}
							onClick={() => setIsViewDetailPage(true)}
						>
							{info.pageName !== 'contact' ? (
								<svg
									className={styles.svg}
									x='0px'
									y='0px'
									viewBox='0 0 33.656 33.656'
									enableBackground='new 0 0 33.656 33.656'
									xmlSpace='preserve'
								>
									<circle
										fill='#fff'
										cx='16.828'
										cy='16.828'
										r='16.828'
									></circle>
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
									<g className='js-eye-lid' fill={colorBorder(arrColor)}>
										<g>
											<path d='M16.828,26.39C8.911,26.39,4.989,17.25,0,16.76v16.896h33.656V16.76 C28.667,17.25,24.745,26.39,16.828,26.39z'></path>
										</g>
										<g>
											<path d='M16.828,7.266c-7.917,0-11.839,9.139-16.828,9.63V0h33.656v16.896 C28.667,16.406,24.745,7.266,16.828,7.266z'></path>
										</g>
									</g>
								</svg>
							) : (
								<svg
									className={styles.svg}
									x='0px'
									y='0px'
									viewBox='0 0 36.504 34.423'
									enable-background='new 0 0 36.504 34.423'
									xmlSpace='preserve'
								>
									<path
										fill='none'
										stroke='rgb(21, 26, 30)'
										stroke-width='1.5'
										stroke-miterlimit='10'
										d='M7.401,32.453v-8.251H1.8
                c-0.578,0-1.05-0.473-1.05-1.05V1.8c0-0.578,0.473-1.05,1.05-1.05h32.904c0.578,0,1.05,0.473,1.05,1.05v21.352
                c0,0.578-0.473,1.05-1.05,1.05H14.752L7.401,32.453z'
									></path>
									<circle
										fill='rgb(21, 26, 30)'
										cx='24.903'
										cy='12.301'
										r='1.363'
									></circle>
									<circle
										fill='#rgb(21, 26, 30)'
										cx='18.677'
										cy='12.301'
										r='1.363'
									></circle>
									<circle
										fill='#rgb(21, 26, 30)'
										cx='12.45'
										cy='12.301'
										r='1.363'
									></circle>
								</svg>
							)}
							<p
								style={{ color: roadColor(arrColor) }}
								className={styles.view__text}
							>
								{mouseOnView ? 'Открыть' : 'Посмотреть'}
							</p>
						</div>
					</>
				) : (
					<>
						<div className={styles.view}>
							<p>Далее</p>
						</div>
						<button
							onClick={() => {
								if (setNextAnim) setNextAnim(!nextAnim);
								if (moveText) moveText();
								if (arrColor !== 6) {
									if (setArrColor) setArrColor(prev => prev + 1);
								} else {
									if (setArrColor) setArrColor(0);
								}
							}}
						>
							&#8658;
						</button>
					</>
				)}
			</div>

			<div
				className={styles.arrow__next}
				style={{
					backgroundColor: colorBorder(arrColor),
					color: roadColor(arrColor),
				}}
			>
				&#10230;
			</div>
		</div>
	);
};

export default Content;
