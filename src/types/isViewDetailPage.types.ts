import { Dispatch, SetStateAction } from 'react';

export interface IDetailPageView {
	isViewDetailPage: boolean;
	setIsViewDetailPage: Dispatch<SetStateAction<boolean>>;
}
