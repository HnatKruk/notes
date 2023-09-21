import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilterTextRequestAction, setSearchFocusAction } from '@actions';
import { SearchNoteIcon } from '@icons';
import { RootStateInterface } from '@interfaces';
import styles from './styles.module.scss';

interface FormData {
  searchValue: string;
};

export const SearchNotes: FC = () => {
  const INPUT_PLACEHOLDER = 'Search';
  const INPUT_NAME = 'searchValue';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterText } = useSelector((store: RootStateInterface) => store.notesReducer);
  const { register, handleSubmit, setValue } = useForm<FormData>();

  useEffect(() => {
    if (filterText) {
      setValue(INPUT_NAME, filterText);
      dispatch(setFilterTextRequestAction(filterText));
    }
  }, [setValue, filterText]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(INPUT_NAME, e.target.value);
    handleSubmit(onSubmit)();
  };

  const handleInputFocus = () => dispatch(setSearchFocusAction(true));
  const handleInputBlur = () => dispatch(setSearchFocusAction(false));

  const onSubmit = (data: FormData) => {
    navigate('/', { replace: true });
    dispatch(setFilterTextRequestAction(data.searchValue));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.searchNotes}
    >
      <SearchNoteIcon />
      <input
        type="text"
        {...register(INPUT_NAME)}
        onChange={handleInputChange}
        className={styles.searchNotes_input}
        placeholder={INPUT_PLACEHOLDER}
        autoFocus={!!filterText}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </form>
  );
};
