import { FC } from 'react';
import { IProjetcs } from '../../types/projectsProps.types';
import styles from './Projects.module.scss';

const Projects: FC<IProjetcs> = ({ project }) => {
	return (
		<div className={styles[`wrapper-${project}`]}>
			<div className={styles.block__title}>
				<h2>
					{project === 'scan'
						? 'СКАН'
						: project === 'kanban'
						? 'Канбан-доска'
						: project === 'HOTD'
						? 'Дом дракона'
						: ''}
				</h2>
				<p>
					{project === 'scan'
						? 'Дипломный проект: реальный кейс компании «СКАН»'
						: project === 'kanban'
						? 'Проект по React из курса Frontend разработки'
						: project === 'HOTD'
						? 'Коллекционная карточная игра'
						: ''}
				</p>
			</div>
			<div className={styles.block__description}>
				<p className={styles.description}>
					{project === 'scan'
						? 'Данный проект был предоставлен компанией-партнером «СКАН», как дипломный проект, для студентов онлайн-платформы где я учился. Нужно было реализовать клиентскую часть сервиса поиска публикаций о компаниях по ИНН.'
						: project === 'kanban'
						? 'Данный проект предоставлялся для закрепления теоретических знаний, полученных при прохождении главы курса по React.'
						: project === 'HOTD'
						? 'Я являюсь большим поклонником вселенной Дж. Мартина, поэтому мне давно хотелось сделать что-то связанное с ней. Это мой pet-проект, который позволит мне улучшить мои навыки разработчика и взаимодействовать со своей любимой вселенной по окончанию разработки.'
						: ''}
				</p>
				<p className={styles.description}>
					{project === 'scan'
						? 'Так как на момент начала работы над дипломным проектом я изучал теорию по TypeScript, то решил сразу на практике закрепить знания. Так же на данном проекте я впервые поработал с библиотекой react-hook-form, т.к. работы с формами здесь было много.'
						: project === 'kanban'
						? 'Это мой второй и более углубленный опыт работы с React. В этом проекте я сознательно не делал адаптив, т.к. моей целью было прощупать работу с React, а не идеально сверстать.'
						: project === 'HOTD'
						? 'Проект находиться ещё в стадии разработки и на данный момент реализованы: механизмы покупки, открытия колоды; составления своей колоды(игральной) и добавления в неё новых карт, в зависимости от лимита по редкости и количеству; выбор количества игроков и система ходов; добавлен минимум карт для 3 домов, чтобы тестировать игру.'
						: ''}
				</p>
				<p className={styles.stackProject}>
					{project === 'scan'
						? 'Мой стэк на данном проекте: Html, Scss, TypeScript, React, Redux Toolkit, Vite, yarn, Git, axios, react-hook-form, react-router-dom.'
						: project === 'kanban'
						? 'Мой стэк на данном проекте: Html, Scss, JavaScript, React, Vite, yarn, Git.'
						: project === 'HOTD'
						? 'Мой стэк на данном проекте: Html, Scss, TypeScript, React, Redux Toolkit, Vite, yarn, Git, react-router-dom.'
						: ''}
				</p>
				<a
					href={
						project === 'scan'
							? 'https://github.com/liveMusic13/SCAN_Diplom.git'
							: project === 'kanban'
							? 'https://github.com/liveMusic13/Kanban_Board.git'
							: project === 'HOTD'
							? 'https://github.com/liveMusic13/DRAGON_DANCE.git'
							: ''
					}
					className={styles.link__project}
				>
					Код проекта
				</a>
			</div>
		</div>
	);
};

export default Projects;
