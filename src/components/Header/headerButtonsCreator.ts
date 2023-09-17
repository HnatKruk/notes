import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import { uuid } from 'short-uuid';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@actions';
import { NewNoteIcon, RemoveNoteIcon, ExportNoteIcon } from "@/icons";
import { RootStateInterface } from '@/interfaces';
import { LEFT_SIDE, RIGHT_SIDE } from './headerConstants';
import styles from './styles.module.scss';

export const createHeaderButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noteItemLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { activeNote } = useSelector((store: RootStateInterface) => store.notesReducer);

  const isNoteItemLoader = noteItemLoader || !activeNote;
  const titlePlaceholder = 'New Note';
  const formattedText = activeNote?.text.split('\n');

  const deleteActiveNote = () => {
    const handleNavigate = () => { navigate('/', { replace: true }) };
    dispatch(deleteActiveNoteRequestAction(activeNote?.id as string, handleNavigate));
  };

  const createActiveNote = () => {
    const currentDate = new Date().toISOString();
    dispatch(createActiveNoteRequestAction(currentDate));
  };

  const exportNoteAsDocx = async () => {
    if (!formattedText) return;
    
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: formattedText.map((text) => new Paragraph({
            children: [
              new TextRun(text),
            ],
          }))
        },
      ],
    });

    try {
      const buffer = await Packer.toBlob(doc);
      saveAs(buffer, `${formattedText[0] || titlePlaceholder}.docx`);
    } catch (error) {
      console.error("An error occurred while creating the file .docx", error);
    }
  };

  const headerButtonsConfig = [
    {
      icon: RemoveNoteIcon,
      onClick: deleteActiveNote,
      isHidden: isNoteItemLoader,
      key: uuid(),
      side: LEFT_SIDE,
      class: styles.removeNote,
    },
    {
      icon: NewNoteIcon,
      onClick: createActiveNote,
      isHidden: false,
      key: uuid(),
      side: RIGHT_SIDE,
    },
    {
      icon: ExportNoteIcon,
      onClick: exportNoteAsDocx,
      isHidden: isNoteItemLoader,
      key: uuid(),
      side: RIGHT_SIDE,
      class: styles.exportNote,
    },
  ];

  return headerButtonsConfig;
};