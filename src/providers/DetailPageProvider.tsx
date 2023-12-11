import { FC, PropsWithChildren, createContext, useState } from 'react';
import { IDetailPageView } from '../types/isViewDetailPage.types';

export const DetailPageContext = createContext<IDetailPageView>(
	{} as IDetailPageView
);

const DetailPageProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isViewDetailPage, setIsViewDetailPage] = useState<boolean>(false);

	return (
		<DetailPageContext.Provider
			value={{ isViewDetailPage, setIsViewDetailPage }}
		>
			{children}
		</DetailPageContext.Provider>
	);
};

export default DetailPageProvider;
