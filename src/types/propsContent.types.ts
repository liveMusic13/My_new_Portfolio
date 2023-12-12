import { Dispatch, SetStateAction } from 'react';
import { IPageInfo } from './dataPageInfo.types';

export interface IPropsContent {
	arrColor: number;
	section: string;
	info: IPageInfo;
	nextAnim?: boolean;
	setNextAnim?: Dispatch<SetStateAction<boolean>>;
	setArrColor?: Dispatch<SetStateAction<number>>;
	moveText?: () => () => void;
}
