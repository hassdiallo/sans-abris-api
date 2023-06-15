const Sdf = require("../models/sdf.model")

getSdf = async (req, res) => {
    try {
        const sdf = await Sdf.find()
        res.json(sdf)
    } catch (err) {
        res.status(400).json(err)
    }
}

getSdfById = async (req, res) => {
    const sdf = await Sdf.findById(req.params.id)
    if (!sdf) return res.status(400).json("Le sdf n'xiste pas")

    res.json(sdf)
    
}

addSdf = async (req, res) =>{
    const isEmailExist = await Sdf.findOne({email: req.body.nom})
    if (isEmailExist) return res.status(400).json("Ajouté")

    const newSdf = new Sdf({
        email: req.body.email,
        password: req.body.password,
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        status : req.body.status,
        
    })

    try{
        const sdf = await newSdf.save()
        res.json(sdf)
    }catch(error){
        res.status(400).json(error)
    }
}

deleteSdf = async (req,res) =>{
    const sdf = await Sdf.findById(req.params.id)
    if (!sdf) return res.status(400).json("Le sdf n'existe pas")

    try {
        await student.deleteOne()
        res.json("sdf supprimé : "+req.params.id)
    } catch (error) {
        res.status(400).json(error)
    }
}

updateSdf = async (req, res) => {
    const sdf = await Sdf.findById(req.params.id)
    if (!sdf) return res.status(400).json("Le sdf n'existe pas")

    try {
        const sdfUpdated = await sdf.findByIdAndUpdate(
            sdf,
            req.body,
            {new: true}
        ) 
        res.json("bien modifié")
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getSdf,
    getSdfById,
    addSdf,
    deleteSdf,
    updateSdf
}
