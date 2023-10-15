import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import { NoteInterface } from '@interfaces';

export const exportNote = async (activeNote: NoteInterface | null) => {
  const formattedText = activeNote?.text.split('\n');  
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
    console.error('An error occurred while creating the file .docx', error);
  }
};