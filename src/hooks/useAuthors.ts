import { useContext } from 'react';
import { isAuthorContext } from '../providers/isAuthorProvider';
import { IAuthor } from '../types/isAuthor.types';

export const useAuthors = (): IAuthor => useContext(isAuthorContext);
