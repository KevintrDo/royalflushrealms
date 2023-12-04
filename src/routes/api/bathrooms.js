const express = require('express');
const router  = express.Router();

//const Item = require('../../models/Item');
const Bathroom = require('../../models/Bathroom');

//router.get('/',(req, res) => {res.send('testing get / item route')});
router.get('/', (req, res) => {
    Bathroom.find()
        .then((bathroom) => res.json(bathroom))
        .catch((err) => res.status(404).json({ noitemfound: 'No Bathrooms found'}));
});
//router.get('/:id',(req, res) => {res.send('testing get / :id route')});
router.get('/:id', (req, res) => {
    Bathroom.findById(req.params.id)
        .then((bathroom) => res.json(bathroom))
        .catch((err) => res.status(404).json({noitemfound : 'No Bathrooms found'}));
});

router.post('/', async (req, res) => {
    console.log(req.body);
    Bathroom.create(req.body)
        .then((bathroom) => res.json({msg: 'Bathroom added successfuly'}))
        .catch((err) => res.status(400).json({error: 'Unable to add this Bathroom' }));

});
//router.put('/',(req, res) => {res.send('testing put /:id route')});
router.put('/:id', (req, res) => {
    Bathroom.findByIdAndUpdate(req.params.id, req.body)
        .then((bathroom) => res.json({ msg: 'Updated successfully'}))
        .catch((err) => 
            res.status(400).json({error: 'Unable to update database'})
        );
});
//router.delete('/',(req, res) => {res.send('testing delete /:id route')});
router.delete('/:id', (req, res) => {
    Bathroom.findByIdAndDelete(req.params.id)
        .then((bathroom) => res.json({ msg: 'Bathroom entry deleted successfully'}))
        .catch((err) => res.status(404).json({ error: 'No such item'}));
});


module.exports = router; 