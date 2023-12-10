import { createContext, useState } from 'react';

export const DetailPageContext = createContext<IDetailPageView>(
	{} as IDetailPageView
);

import { FC, PropsWithChildren } from 'react';
import { IDetailPageView } from '../types/isViewDetailPage.types';

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
