import { FC } from 'react';
import { useAuthors } from '../../hooks/useAuthors';
import styles from './Skills.module.scss';

const Skills: FC = () => {
	const arrImage = [
		{ name: 'Html', src: './images/icons/icons8-html.svg' },
		{ name: 'Css', src: './images/icons/icons8-css.svg' },
		{ name: 'Scss', src: './images/icons/sass.svg' },
		{ name: 'JavaScript', src: './images/icons/icons8-js.svg' },
		{ name: 'TypeScript', src: './images/icons/icons8-typescript.png' },
		{ name: 'React', src: './images/icons/icons8-react.png' },
		{ name: 'Redux Toolkit', src: './images/icons/icons8-redux.png' },
		{ name: 'Webpack', src: './images/icons/icons8-webpack.png' },
		{ name: 'Vite', src: './images/icons/icons8-vite.svg' },
		{ name: 'Git', src: './images/icons/icons8-git.svg' },
		{ name: 'Flexbox', src: './images/icons/icons8-flexbox.png' },
		{ name: 'Grid', src: './images/icons/icons8-grid.png' },
		{ name: 'Figma', src: './images/icons/icons8-figma.svg' },
		{ name: 'Photoshop', src: './images/icons/icons8-photoshop.svg' },
		{ name: 'npm', src: './images/icons/icons8-npm.svg' },
		{ name: 'yarn', src: './images/icons/icons8-yarn.png' },
	];

	const { isAuthor } = useAuthors();

	return (
		<div className={styles.wrapper}>
			{arrImage.map(img => {
				return (
					<div className={styles.block__image}>
						<img className={styles.image} src={img.src} alt='img' />
						<p>{img.name}</p>
					</div>
				);
			})}
			{isAuthor && (
				<div className={styles.block__authors}>
					<a target='_blank' href='https://icons8.com/icon/20909/html-5'>
						HTML
					</a>
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/21278/css3'>
						CSS
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/108784/javascript'>
						JS
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/asWSSTBrDlTW/react-a-javascript-library-for-building-user-interfaces'
					>
						React a JavaScript library for building user interfaces
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/b6vIINYN0kfW/redux-an-open-source-javascript-library-for-managing-application-state'
					>
						Redux an open-source JavaScript library for managing application
						state
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/20906/git'>
						Git
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/zfHRZ6i1Wg0U/figma'>
						Figma
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/13677/adobe-photoshop'
					>
						Photoshop
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/24895/npm'>
						NPM
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/mBvrDeyHzyKX/yarn-fast-,reliable-and-secure-dependency-management-web-portal'
					>
						Yarn fast ,reliable and secure dependency management web portal
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/3Uc7Pmssn8tP/flexbox'
					>
						Flexbox
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/yBCksuyeLvqD/сетка-4x4'
					>
						Сетка 4x4
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a target='_blank' href='https://icons8.com/icon/dJjTWMogzFzg/быстро'>
						быстро
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
					<br />
					<a
						target='_blank'
						href='https://icons8.com/icon/QjbHx7WUskg1/webpack-a-module-bundler.-its-main-purpose-is-to-bundle-javascript-files-for-usage-in-a-browser'
					>
						Webpack a module bundler. Its main purpose is to bundle JavaScript
						files for usage in a browser
					</a>{' '}
					иконка от{' '}
					<a target='_blank' href='https://icons8.com'>
						Icons8
					</a>
				</div>
			)}
		</div>
	);
};

export default Skills;
