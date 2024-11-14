const express = require("express")
const router = express.Router();

const {getContacts, 
    createContact, 
    getContact,
    updateContact,
    deleteContact} = require("../controllers/contactControler")

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;

//le am facut aici routarea, dupa am mutat o in contactContoller
/* 
de ex:
router.route("/").post((req,res) => {
    res.status(200).json({message:"create all contacts"});
});
 */