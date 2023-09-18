import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFilterTextAction } from '@/store/actions';
import { SearchNoteIcon } from '@/icons';
import styles from './styles.module.scss';

interface FormData {
  searchValue: string;
};

export const SearchNotes: FC = () => {
  const INPUT_PLACEHOLDER = 'Search';
  const INPUT_NAME = 'searchValue';
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(INPUT_NAME, e.target.value);
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: FormData) => {
    dispatch(setFilterTextAction(data.searchValue));
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
      />
    </form>
  );
}
