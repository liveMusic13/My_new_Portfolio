import { FC, useEffect, useState } from 'react';
import dataPageInfo from '../../dataPageInfo';
import { useDetailPage } from '../../hooks/useDetailPage';
import useStyle from '../../hooks/useStyle';
import CheckPage from '../check-page/CheckPage';
import Content from '../content/Content';
import DetailPage from '../detail-page/DetailPage';
import styles from './App.module.scss';

const App: FC = () => {
	const [nextAnim, setNextAnim] = useState<boolean>(false);
	const [arrPage, setArrPage] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);
	console.log(nextAnim);

	const [arrColor, setArrColor] = useState<number>(0);

	const { roadColor, colorBorder } = useStyle();
	const { isViewDetailPage } = useDetailPage();

	const moveText = () => {
		const nextArrPage = arrPage.map(index => (index + 1) % dataPageInfo.length);
		setArrPage(nextArrPage);

		const timeout = setTimeout(() => setNextAnim(false), 300);
		return () => {
			clearTimeout(timeout);
		};
	};

	useEffect(() => {
		//HELP: Смена фона в body
		if (arrColor === 0) {
			document.body.style.backgroundColor = 'rgb(11, 11, 11)';
		} else if (arrColor === 1) {
			document.body.style.backgroundColor = 'rgb(251, 98, 71)';
		} else if (arrColor === 2) {
			document.body.style.backgroundColor = 'rgb(11, 11, 11)';
		} else if (arrColor === 3) {
			document.body.style.backgroundColor = 'rgb(82, 190, 172)';
		} else if (arrColor === 4) {
			document.body.style.backgroundColor = 'rgb(106, 212, 255)';
		} else if (arrColor === 5) {
			document.body.style.backgroundColor = 'rgb(229, 33, 39)';
		} else if (arrColor === 6) {
			document.body.style.backgroundColor = 'rgb(219, 209, 183)';
		}
	}, [arrColor]);

	return (
		<div
			className={styles.wrapper}
			style={nextAnim ? { animation: 'animNext 100ms linear 1' } : {}}
		>
			{isViewDetailPage && <DetailPage arrColor={arrColor} />}
			<div
				className={styles.main}
				style={{
					backgroundColor: roadColor(arrColor),
					borderColor: colorBorder(arrColor),
				}}
			>
				{arrColor !== 0 && <CheckPage arrColor={arrColor} arrPage={arrPage} />}
				<Content
					arrColor={arrColor}
					section='main'
					info={dataPageInfo[arrPage[0]]}
					setNextAnim={setNextAnim}
					nextAnim={nextAnim}
					moveText={moveText}
					setArrColor={setArrColor}
				/>
			</div>
			<div
				className={styles.block__next}
				onClick={() => {
					setNextAnim(!nextAnim);
					moveText();
					if (arrColor !== 6) {
						setArrColor(prev => prev + 1);
					} else {
						setArrColor(0);
					}
				}}
			>
				<div
					className={styles.next}
					style={{
						backgroundColor: roadColor(arrColor),
						borderColor: colorBorder(arrColor),
					}}
				>
					<Content
						arrColor={arrColor}
						section='next'
						info={dataPageInfo[arrPage[1]]}
					/>
				</div>
				<div className={styles.block__three}>
					<div className={styles.block__four}>
						<div className={styles.block__five}>
							<div
								className={styles.five__next}
								style={{
									backgroundColor: roadColor(arrColor),
									borderColor: colorBorder(arrColor),
								}}
							>
								<Content
									arrColor={arrColor}
									section='five__next'
									info={dataPageInfo[arrPage[4]]}
								/>
							</div>
							<div className={styles.block__six}>
								<div
									className={styles.six__next}
									style={{
										backgroundColor: roadColor(arrColor),
										borderColor: colorBorder(arrColor),
									}}
								>
									<Content
										arrColor={arrColor}
										section='six__next'
										info={dataPageInfo[arrPage[5]]}
									/>
								</div>
								<div className={styles.block__seven}>
									<div className={styles.block__all}></div>
									<div
										className={styles.seven__next}
										style={{
											backgroundColor: roadColor(arrColor),
											borderColor: colorBorder(arrColor),
										}}
									>
										<Content
											arrColor={arrColor}
											section='seven__next'
											info={dataPageInfo[arrPage[6]]}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className={styles.four__next}
							style={{
								backgroundColor: roadColor(arrColor),
								borderColor: colorBorder(arrColor),
							}}
						>
							<Content
								arrColor={arrColor}
								section='four__next'
								info={dataPageInfo[arrPage[3]]}
							/>
						</div>
					</div>
					<div
						className={styles.three__next}
						style={{
							backgroundColor: roadColor(arrColor),
							borderColor: colorBorder(arrColor),
						}}
					>
						<Content
							arrColor={arrColor}
							section='three__next'
							info={dataPageInfo[arrPage[2]]}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
