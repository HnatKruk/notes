import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from 'file-saver';
import { uuid } from 'short-uuid';
import { createActiveNoteRequestAction, deleteActiveNoteRequestAction } from '@actions';
import { NewNoteIcon, RemoveNoteIcon, ExportNoteIcon } from "@icons";
import { RootStateInterface } from '@interfaces';
import { LEFT_SIDE, RIGHT_SIDE } from './headerConstants';
import styles from './styles.module.scss';

// TODO:
//  Sort you imports, try following pattern: external imports (react, redux etx), services (hooks, helpers, utils), components, styles
//  Use TS here, what should return this hook?

export const createHeaderButtons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { noteItemLoader } = useSelector((store: RootStateInterface) => store.viewReducer);
  const { activeNote } = useSelector((store: RootStateInterface) => store.notesReducer);

  const isNoteItemLoader = noteItemLoader || !activeNote;
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
    // TODO: Move this function to utils, and call exportDocument
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
      saveAs(buffer, `${activeNote?.routeId}.docx`);
    } catch (error) {
      console.error("An error occurred while creating the file .docx", error);
    }
  };

  /*
  TODO
    1. Create interface for button config.
    2. Better have two different arrays for left and right side.
    3. useId instead of uuid.
    4. No need of headerButtonsConfig, redundant variable.
  */

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