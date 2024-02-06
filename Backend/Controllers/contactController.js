
const ContactModel = require("../Models/Contact");

//fonction ajouter contact
exports.ajouterContact=async (req, res) => {
    // un objet
    const contactObj = {
      nom: req.body.nom,
      numero: req.body.numero,
    };
  
    //un model
    const contact = new ContactModel(contactObj);
    //insert in database
  
    try {
      const createdContact = await contact.save();
  
      res.status(200).json({ createdContact });
    } catch (error) {
      // En cas d'erreur, renvoyer une réponse avec le statut 400
      res.status(400).json({ error: error.message });
    }
  
    // res.status(200).json({message :"donnee ajoutee "});
  };



  // fonction modifier
  exports.modifierContact = async (req, res) => {
    try {
      const param = req.params.idContact;
  
      const modifiedObj = {
        nom: req.body.nom,
        numero: req.body.numero,
      };
  
      const modifiedContact = await ContactModel.findByIdAndUpdate(param, modifiedObj).exec();
  
      res.status(200).json({ "message ": "contact modifie avec succes" , "modifiedContact":modifiedContact });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: " Erreur de modification" });
    }
  };


  //fonction supprimer
   exports.supprimerContact = async (req, res) => {
    try {
      // Traitement nécessaire pour supprimer un contact
      const param = req.params.idContact;
      const deleteContact = await ContactModel.findByIdAndDelete(param).exec();
  
      res .status(200).json({  message: "Contact deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Internal server error" });
    }
  
    //res.send("corp de la fonction supprimer contact ");
  };

  // fonction lister
  exports.listerContact =async (req, res) => {
    try {
      const contactList = await ContactModel.find({}).exec();
  
      if (contactList) {
        return res.status(200).json({ contactList });
      }
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  };