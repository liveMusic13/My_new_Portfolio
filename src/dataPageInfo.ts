import { IPageInfo } from './types/dataPageInfo.types';

const dataPageInfo: IPageInfo[] = [
	{
		//black
		id: 1,
		pageName: 'start-page',
		h2: 'Frontend-разработчик',
		text: 'none',
	},
	{
		//orange
		id: 2,
		pageName: 'about-me',
		h2: 'Участие в хакатонах',
		text: 'Я люблю писать код, особенно те моменты, когда первая же идея при проверке сразу работает идеально. Также мне нравится дух соперничества. Поэтому, если есть возможность участвовать в хакатоне, я всегда стараюсь делать это.',
	},
	{
		//yellow
		id: 3,
		pageName: 'skills',
		h2: 'Навыки и достижения',
		text: 'Html, Css, Scss, JavaScript, TypeScript, React, Redux Toolkit, Webpack, Vite, Git, Adobe Photoshop, Figma',
	},
	{
		//green
		id: 4,
		pageName: 'project-scan',
		h2: 'СКАН',
		text: 'Дипломный проект курса по Frontend разработке: реальный кейс компании «СКАН»',
	},
	{
		//blue
		id: 5,
		pageName: 'project-kanban',
		h2: 'Канбан-доска',
		text: 'Проект по React из курса по Frontend разработке',
	},
	{
		//red
		id: 6,
		pageName: 'project-houseOfDragon',
		h2: 'Дом дракона',
		text: 'Мой pet-проект по вселенной Дж. Мартина.',
	},
	{
		//light-brown
		id: 7,
		pageName: 'contact',
		h2: 'Контакты',
		text: 'Предпочтительный способ связи через телефон или телеграм.',
	},
];

export default dataPageInfo;
