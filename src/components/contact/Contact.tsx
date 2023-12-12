import { FC } from 'react';
import styles from './Contact.module.scss';

const Contact: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.block__exit}></div>
			<a href='tel:+375255376431'>Телефон</a>
			<a href='mailto:aegis.ko20@mail.ru'>Почта</a>
			<a href='https://t.me/DmitriyKovalenko13'>Телеграм</a>
			<a href='https://vk.com/id165406586'>ВКонтакте</a>
		</div>
	);
};

export default Contact;
