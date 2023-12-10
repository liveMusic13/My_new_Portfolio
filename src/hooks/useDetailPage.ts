import { useContext } from 'react';
import { DetailPageContext } from '../providers/DetailPageProvider';
import { IDetailPageView } from '../types/isViewDetailPage.types';

export const useDetailPage = (): IDetailPageView =>
	useContext(DetailPageContext);
