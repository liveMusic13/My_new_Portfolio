import { FC } from 'react';
import { useAuthors } from '../../hooks/useAuthors';
import { useDetailPage } from '../../hooks/useDetailPage';
import { IDetailPage } from '../../types/detailPageProps.types';
import Contact from '../contact/Contact';
import Hackathon from '../hackathon/Hackathon';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import styles from './DetailPage.module.scss';

const DetailPage: FC<IDetailPage> = ({ arrColor }) => {
	const { setIsViewDetailPage } = useDetailPage();
	const { isAuthor, setIsAuthor } = useAuthors();

	return (
		<div
			className={
				arrColor === 2
					? styles.wrapper_skills
					: arrColor === 3
					? styles.wrapper_scan
					: arrColor === 4
					? styles.wrapper_kanban
					: arrColor === 5
					? styles.wrapper_HOTD
					: arrColor === 6
					? styles.wrapper_contact
					: styles.wrapper
			}
		>
			<div
				className={styles.block__image}
				onClick={() => setIsViewDetailPage(false)}
				style={
					arrColor === 2
						? {
								backgroundColor: 'rgb(255, 218, 68)',
								gridTemplateColumns: '100%',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
								// height: '80%',
						  }
						: arrColor === 3
						? { gridTemplateColumns: '53% 47%' }
						: arrColor === 4
						? {
								gridTemplateColumns: '67.5% 32.5%',
								backgroundColor: 'rgb(53, 106, 133)',
						  }
						: arrColor === 5
						? {
								gridTemplateColumns: '51.9% 48.1%',
								backgroundColor: 'rgb(47, 52, 54)',
						  }
						: {}
				}
			>
				{arrColor === 1 ? (
					<>
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
					</>
				) : arrColor === 2 ? (
					<Skills />
				) : arrColor === 3 ? (
					<>
						<img
							className={styles.home__scan}
							src='./images/scan/home.jpg'
							alt='img'
							style={
								arrColor === 3
									? { boxShadow: '0px 0px 30px rgb(82, 190, 172)' }
									: {}
							}
						/>
						<div className={styles.block__right}>
							<img
								style={
									arrColor === 3
										? { boxShadow: '0px 0px 30px rgb(82, 190, 172)' }
										: {}
								}
								src='./images/scan/search.jpg'
								alt='img'
							/>
							<img
								style={
									arrColor === 3
										? { boxShadow: '0px 0px 30px rgb(82, 190, 172)' }
										: {}
								}
								src='./images/scan/result.jpg'
								alt='img'
							/>
						</div>
					</>
				) : arrColor === 4 ? (
					<>
						<img
							className={styles.home__kanban}
							src='./images/kanban/editTask.jpg'
							alt='img'
							style={
								arrColor === 4
									? { boxShadow: '0px 0px 30px rgb(106, 212, 255)' }
									: {}
							}
						/>
						<div className={styles.block__right_kanban}>
							<img
								style={
									arrColor === 4
										? { boxShadow: '0px 0px 30px rgb(106, 212, 255)' }
										: {}
								}
								src='./images/kanban/home.jpg'
								alt='img'
							/>
							<img
								style={
									arrColor === 4
										? { boxShadow: '0px 0px 30px rgb(106, 212, 255)' }
										: {}
								}
								src='./images/kanban/moveTask.jpg'
								alt='img'
							/>
						</div>
					</>
				) : arrColor === 5 ? (
					<>
						<div className={styles.block__left_HOTD}>
							<img
								className={styles.home__HOTD}
								src='./images/HOTD/house_of_the_dragon.jpg'
								alt='img'
							/>
							<img
								className={styles.home__HOTD}
								src='./images/HOTD/map.jpg'
								alt='img'
							/>
							<img
								className={styles.home__HOTD}
								src='./images/HOTD/collection.jpg'
								alt='img'
							/>
						</div>
						<div className={styles.block__right_HOTD}>
							<img
								className={styles.home__HOTD}
								src='./images/HOTD/shop.jpg'
								alt='img'
							/>

							<img
								className={styles.home__HOTD}
								src='./images/HOTD/choiseHouse.jpg'
								alt='img'
							/>
							<img
								className={styles.home__HOTD}
								src='./images/HOTD/openBooster.jpg'
								alt='img'
							/>
						</div>
					</>
				) : (
					''
				)}
			</div>

			<div
				className={styles.block__content}
				// style={arrColor === 2 ? { display: 'none' } : {}}
			>
				{arrColor === 1 ? (
					<>
						<Hackathon hackathon='2' />
						<div className={styles.line}></div>
						<Hackathon hackathon='1' />
						<div className={styles.line}></div>
						<Hackathon hackathon='3' />
					</>
				) : arrColor === 2 ? (
					<>
						<button
							className={styles.button__authors}
							onClick={() => setIsAuthor(!isAuthor)}
						>
							Источники иконок
						</button>
					</>
				) : arrColor === 3 ? (
					<Projects project='scan' />
				) : arrColor === 4 ? (
					<Projects project='kanban' />
				) : arrColor === 5 ? (
					<Projects project='HOTD' />
				) : (
					<Contact />
				)}
			</div>
		</div>
	);
};

export default DetailPage;
