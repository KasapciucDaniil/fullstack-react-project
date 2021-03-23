const {Router} = require('express')
const Note = require('../models/Note')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
  try {
    const {title, types, text} = req.body 

    const existing = await Note.findOne({ title })  

    if (existing) {
      return res.json({ note: existing })
    }

    const note = new Note({
      title, types, text,owner: req.user.userId
    })

    await note.save()

    res.status(201).json({ note })

  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!' })
  }
})

router.delete('/deleteNote', auth, async (req,res) => {
  try {
    const note = await Note.deleteOne({_id: req.body._id})
    res.status(200).json(note)
  } catch (error) {
    console.log(error)
  }
})

// router.patch('/changeNote', auth, async (req,res) => {
//   const updated = {
//     title, 
//     types,
//     text
//   } = req.body

//   try {
//     const note = await Note.findByIdAndUpdate(
//       {_id: req.body._id,},
//       {$set: updated},
//       {new: true}
//     )
//     //  console.log(note)
//     res.status(200).json(note)
//   } catch (e) {
//     console.log(e)
//     res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!' })
//   }
// })

router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user.userId })
    res.json(notes)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова!' })
  } 
})

module.exports = router