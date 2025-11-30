import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateStudent,
} from '../controllers/notesController.js';

const router = Router();

router.get('/', getAllNotes);
router.get('/:noteId', getNoteById);
router.post('/', createNote);
router.delete('/:noteId', deleteNote);
router.patch('/:noteId', updateStudent);

export default router;
