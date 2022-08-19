const { User, Thought} = require('../models');

module.exports = {
    getAllThoughts(req, res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res){
        Thought.findOne({ _id: req.params.thoughtId })
         .select('-__v')
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
    },
    createNewThought(req, res){
        Thought.create(req.body)
        .then((ThoughtData) => {
            res.json(ThoughtData)
            return User.findOneAndUpdate(
                {username: ThoughtData.username},
                {$addToSet: { thoughts: { _id: ThoughtData.id } }},
                {new: true}
            ) 
        }).catch((err) => {
            console.log(err)
            res.status(500).json(err)
        });
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new:true},
        ).then((thought) => {
            console.log(thought)
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
          })
      .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message: 'Thought deleted'})
      )
      .catch((err) => res.status(500).json(err));
    },
    addNewReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $addToSet: { reactions: req.body } },
        ).then((reaction) =>{
            res.json(reaction)
        }).catch((err) => {
            res.status(500).json(err)
        });
    },
    deleteReaction(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $pull: { reactions: req.body } },
        ).then((reaction) =>{
            res.json(reaction)
        }).catch((err) => {
            res.status(500).json(err)
        });
    },
}