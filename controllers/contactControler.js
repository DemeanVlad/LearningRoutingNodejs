//@desc get all contacts
//@route Get /api/contacts
//@acces public

const getContacts = (req,res) => {
    res.status(200).json({message:"get all contacts"});
};

//@desc create new  contacts
//@route Get /api/contacts
//@acces public

const createContact = (req,res) => {
    console.log("the req body is", req.body);
    const{name,email,phone} = req.body;
    if(!name || !email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message:"create all contacts"});
};

//@desc get new  contacts
//@route Get /api/contacts:id
//@acces public

const getContact = (req,res) => {
    res.status(200).json({message:`get contact for ${req.params.id}`})
};

//@desc put new  contacts
//@route put /api/contacts
//@acces public

const updateContact = (req,res) => {
    res.status(201).json({message:`update contact for ${req.params.id}`});
};

//@desc delete  contacts
//@route delete /api/contacts:id
//@acces public

const deleteContact = (req,res) => {
    res.status(200).json({message:`delete contact for ${req.params.id}`})
};


module.exports = {
    getContacts, 
    createContact, 
    getContact,
    updateContact,
    deleteContact
};