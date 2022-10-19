import { Router } from "express";
import { DisplayContactsList, 
        DisplayContactsAddPage,
        ProcessContactsAddPage,
        ProcessContactsEditPage,
        DisplayContactsEditPage,
        ProcessContactsDelete
        } from "../controllers/contacts.controller.server.js";
        
// import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', DisplayContactsAddPage);
router.post('/contact-add', ProcessContactsAddPage);
router.post('/contact-edit/:id', ProcessContactsEditPage);
router.get('/contact-edit/:id', DisplayContactsEditPage);
router.get('/contact-delete/:id', ProcessContactsDelete);

export default router;