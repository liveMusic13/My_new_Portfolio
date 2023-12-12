import { FC } from 'react';
import { useDetailPage } from '../../hooks/useDetailPage';
import styles from './Contact.module.scss';

const Contact: FC = () => {
	const { setIsViewDetailPage } = useDetailPage();

	return (
		<div className={styles.wrapper}>
			<button
				className={styles.block__exit}
				onClick={() => setIsViewDetailPage(false)}
			></button>
			<div className={styles.block__link}>
				<img src='./images/icon_social/phone.png' alt='img' />
				<a href='tel:+375255376431'>Телефон</a>
			</div>
			<div className={styles.block__link}>
				<img src='./images/icon_social/email.png' alt='img' />
				<a href='mailto:aegis.ko20@mail.ru'>Почта</a>
			</div>
			<div className={styles.block__link}>
				<img src='./images/icon_social/telegram.png' alt='img' />
				<a href='https://t.me/DmitriyKovalenko13'>Телеграм</a>
			</div>
			<div className={styles.block__link}>
				<img src='./images/icon_social/vk.png' alt='img' />
				<a href='https://vk.com/id165406586'>ВКонтакте</a>
			</div>
		</div>
	);
};

export default Contact;
