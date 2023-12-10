import { FC } from 'react';
import { useDetailPage } from '../../hooks/useDetailPage';
import Hackathon from '../hackathon/Hackathon';
import styles from './DetailPage.module.scss';

const DetailPage: FC = () => {
	const { setIsViewDetailPage } = useDetailPage();

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.block__image}
				onClick={() => setIsViewDetailPage(false)}
			>
				<div className={styles.block__left}>
					<img
						className={styles.neznaika}
						src='./images/hackathons/Neznaika.jpg'
						alt='image'
					/>
					<div className={styles.block__agregator}>
						<img
							className={styles.agregator_white}
							src='./images/hackathons/agregator_white.jpg'
							alt='image'
						/>
						<img
							className={styles.agregator_dark}
							src='./images/hackathons/agregator_dark.jpg'
							alt='image'
						/>
					</div>
				</div>

				<div className={styles.block__farm}>
					<img
						className={styles.Farm}
						src='./images/hackathons/Farm.jpg'
						alt='image'
					/>
					<img
						className={styles.Farm1}
						src='./images/hackathons/Farm1.jpg'
						alt='image'
					/>
					<img
						className={styles.Farm2}
						src='./images/hackathons/Farm2.jpg'
						alt='image'
					/>
				</div>
			</div>

			<div className={styles.block__content}>
				<Hackathon hackathon='2' />
				<div className={styles.line}></div>
				<Hackathon hackathon='1' />
				<div className={styles.line}></div>
				<Hackathon hackathon='3' />
			</div>
		</div>
	);
};

export default DetailPage;
