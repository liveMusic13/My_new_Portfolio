import { FC, PropsWithChildren, createContext, useState } from 'react';
import { IAuthor } from '../types/isAuthor.types';

export const isAuthorContext = createContext<IAuthor>({} as IAuthor);

const isAuthorProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isAuthor, setIsAuthor] = useState<boolean>(false);

	return (
		<isAuthorContext.Provider value={{ isAuthor, setIsAuthor }}>
			{children}
		</isAuthorContext.Provider>
	);
};

export default isAuthorProvider;
