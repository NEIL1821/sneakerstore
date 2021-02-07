const Sneaker = require('../services/sneakerService');
const User = require('../services/userService');

const addSneakerDB = async (req, res) => {
  const newSneaker = req.body;
  try {
    const newSkrDB = await Sneaker.add(newSneaker);
    return res.status(201).json({ id: newSkrDB._id, success: newSkrDB });
  } catch (e) {
    // return res.send({ error: errorsArray(e) });
    return res.send(e);
  }
};

const getSneaker = async (req, res) => {
  try {
        const sneakerDB = await Sneaker.getById(req.params.id);
        // if (!userDB || userDB.error) {
        //   return res.send(errors.incorrectID);
        // }
        // res.json(sneakerDB);
        return res.status(201).json(sneakerDB);
    } catch (e) {
        return res.send(e);
    }
};

const purchasedSneaker = async (req, res ) => {
    try {
        const userSneaker = await User.boughtSneaker(req.params.id, req.body);
        const deletedSneaker = await Sneaker.delete(req.body);
        res.status(201).json({ userSneaker, deletedSneaker });
    } catch(e){
        return res.send(e);
    }
    
}


const getAllSneakers = async (req, res) => {
    try {
      const response = await Sneaker.getAll();
      return res.status(201).json(response);
    } catch (e) {
      return res.send(2);
    }
  };
  
module.exports ={
    addSneakerDB,
    getSneaker,
    purchasedSneaker,
    getAllSneakers,
}
  

