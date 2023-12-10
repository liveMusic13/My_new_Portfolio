import { FC } from 'react';
import { IHackathon } from '../../types/hackathon.types';
import styles from './Hackathon.module.scss';

const Hackathon: FC<IHackathon> = ({ hackathon }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block__title}>
				<h2>
					{hackathon === '2'
						? 'ЭКСМО'
						: hackathon === '1'
						? 'РСХБ'
						: 'This is хорошо'}
				</h2>
				<div className={styles.block__team}>
					<p>Состав команды:</p>

					{hackathon === '2' ? (
						<ul>
							<li>Project Manager</li>
							<li>Дизайнеры: UX/UI - 3, Motion - 1 и Граф. - 2</li>
							<li>Frontend-разработчик</li>
							<li>Backend-разработчики - 3</li>
							<li>Data Science - 3</li>
						</ul>
					) : hackathon === '1' ? (
						<ul>
							<li>Project Manager</li>
							<li>Дизайнеры - 3</li>
							<li>Frontend-разработчики - 2</li>
							<li>Backend-разработчик</li>
							<li>Геймдизайнер</li>
						</ul>
					) : (
						<ul>
							<li>Project Manager</li>
							<li>Аналитик</li>
							<li>Дизайнеры: UX/UI - 5, Граф. - 4</li>
							<li>Frontend-разработчик</li>
							<li>Backend-разработчики - 2</li>
							<li>FullStack-разработчик</li>
						</ul>
					)}
				</div>
			</div>
			<div className={styles.block__description}>
				{hackathon === '2' ? (
					<>
						<p className={styles.description}>
							Цель хакатона: реализовать приложение для выставки non/fiction№25,
							в котором посетитель получает от ведущего микрофон и задаёт вопрос
							персонажу, который находится на экране, а персонаж отвечает в
							своем стиле (по сути, это кастомизированный голосовой помощник).
						</p>
						<p className={styles.description}>
							На данном хакатоне я более углубленно поработал с аудио на всех
							этапах: запись, отправка, получение с бэкэнда аудио-данных и
							составление из них аудио, воспроизведение данного аудио.
							Познакомился с API SpeechRecording, которое делает запись аудио и
							сразу переводит их в текст на клиенте.
						</p>
					</>
				) : hackathon === '1' ? (
					<>
						<p className={styles.description}>
							Задача заключается в разработке игры для банка РСХБ, которую можно
							интегрировать в API на сайте банка. Цель игры - увеличить
							осведомленность пользователей о современных технологиях в сельском
							хозяйстве и вызвать у них интерес к участию в этой области.
						</p>
						<p className={styles.description}>
							Это мой первый хакатон, на котором я впервые использовал React на
							практике. Здесь я прощупал данный фреймворк и смог выстроить в
							голове связь между теорией, которую изучал до этого , и практикой.
						</p>
					</>
				) : (
					<>
						<p className={styles.description}>
							Задача хакатона: создать веб-приложение по поиску и сортировке
							новостных статей.
						</p>
						<p className={styles.description}>
							Это мой уже третий хакатон и на нем я постарался сознательно
							подойти к архитектуре проекта, продумав основные моменты заранее.
							В виду ограниченного количества времени я решил не использовать в
							проекте TypeScript, т.к. нахожусь в процессе изучения данного
							языка и тратить время на решение новых ошибок не хотел.
						</p>
						<p className={styles.description}>
							В данный момент работа по нему ещё продолжается, но основной
							функционал уже работает.
						</p>
					</>
				)}

				<p className={styles.stackProject}>
					{hackathon === '2'
						? 'Мой стэк на данном проекте: Html, Scss, TypeScript, React, Vite, yarn, Git.'
						: hackathon === '1'
						? 'Мой стэк на данном проекте: Html, Scss, JavaScript, React, Vite, yarn, Git.'
						: 'Мой стэк на данном проекте: Html, Scss, JavaScript, React, Vite, yarn, Git, axios, react-hook-form, react-router-dom.'}
				</p>
				<a
					className={styles.link__project}
					href={
						hackathon === '2'
							? 'https://github.com/liveMusic13/Hackathon_ECSMO.git'
							: hackathon === '1'
							? 'https://github.com/liveMusic13/Hakaton_RSXB_Remake.git'
							: 'https://github.com/liveMusic13/Megahackathon_T17.git'
					}
				>
					Код проекта на GitHub
				</a>
			</div>
		</div>
	);
};

export default Hackathon;
