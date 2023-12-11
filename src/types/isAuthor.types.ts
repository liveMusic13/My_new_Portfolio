import { Dispatch, SetStateAction } from 'react';

export interface IAuthor {
	isAuthor: boolean;
	setIsAuthor: Dispatch<SetStateAction<boolean>>;
}
