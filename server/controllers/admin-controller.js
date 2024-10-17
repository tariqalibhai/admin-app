const Users = require('../models/user-model')

const getAllUSers = async (req, resp) => {
  try {
    const response = await Users.find({},{password:0});
    if(!Users || Users.length===0){
        return resp.status(404).json({ message: "User not Found"})
    }
    console.log(response);  // just for checking the the data
    return resp.status(200).json(response);
  } catch (error) {
    console.error("Error occurred while sending message:", error); // Log the error details
    return resp.status(404).json({ message: "error", error: error.message });
  }
}



// contact Controller-------------------------------------------------------

const contacts = require('../models/contact-model')
const getAllContacts = async (req, resp) => {
    try {
      const response = await contacts.find();
      if(!contacts || contacts.length===0){
          return resp.status(404).json({ message: "Contacs not Found"})
      }
      console.log(response);  // just for checking the the data
      return resp.status(200).json(response);
    } catch (error) {
      console.error("Error occurred while sending message:", error); // Log the error details
      return resp.status(404).json({ message: "error", error: error.message });
    }
  }
  // * ---------------------------------------------- delete Logic
  const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Find the user by ID and delete
      const user = await Users.deleteOne({ _id: userId });
  
      if (!user.deletedCount) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  
  module.exports = {getAllUSers,getAllContacts,deleteUser};
