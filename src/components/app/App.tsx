import { FC, useEffect, useState } from 'react';
import dataPageInfo from '../../dataPageInfo';
import useStyle from '../../hooks/useStyle';
import styles from './App.module.scss';

const App: FC = () => {
	const [nextAnim, setNextAnim] = useState(false);
	const [arrPage, setArrPage] = useState([0, 1, 2, 3, 4, 5, 6]);
	console.log(nextAnim);

	const [arrColor, setArrColor] = useState(0);

	const { roadColor, colorBorder } = useStyle();

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
			<div
				className={styles.main}
				style={{
					backgroundColor: roadColor(arrColor),
					borderColor: colorBorder(arrColor),
				}}
			>
				{/* <Content
					arrColor={arrColor}
					section='main'
					info={dataPageInfo[arrPage[0]]}
				/> */}
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
				></div>
				<div className={styles.block__three}>
					<div className={styles.block__four}>
						<div className={styles.block__five}>
							<div
								className={styles.five__next}
								style={{
									backgroundColor: roadColor(arrColor),
									borderColor: colorBorder(arrColor),
								}}
							></div>
							<div className={styles.block__six}>
								<div
									className={styles.six__next}
									style={{
										backgroundColor: roadColor(arrColor),
										borderColor: colorBorder(arrColor),
									}}
								></div>
								<div className={styles.block__seven}>
									<div className={styles.block__all}></div>
									<div
										className={styles.seven__next}
										style={{
											backgroundColor: roadColor(arrColor),
											borderColor: colorBorder(arrColor),
										}}
									></div>
								</div>
							</div>
						</div>
						<div
							className={styles.four__next}
							style={{
								backgroundColor: roadColor(arrColor),
								borderColor: colorBorder(arrColor),
							}}
						></div>
					</div>
					<div
						className={styles.three__next}
						style={{
							backgroundColor: roadColor(arrColor),
							borderColor: colorBorder(arrColor),
						}}
					></div>
				</div>
			</div>
		</div>
	);
};

export default App;
