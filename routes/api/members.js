const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');
// get all members

router.get('/', (req, res) => res.json(members));

// get single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    // res.send(req.params.id);
    res.json(
        members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({
        msg: `No member with id of ${req.params.id}`
    });
  }
});

// create member
router.post('/',(req,res)=>{
  const newMember  = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email){
    res.status(400).json({ msg: 'Please enter name and emal'});
  }

  members.push(newMember);
    res.json(members);
  
});

//update member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    // res.send(req.params.id);
    const updateMember = req.body;
    members.forEach(member=>{
      if(member.id === parseInt(req.params.id)){

      member.name = updateMember.name ? updateMember.name : member.name;
      member.email = updateMember.email ? updateMember.email : member.email;
      res.json({ msg: 'Member Updated', member});
      }
    });
  } else {
    res.status(400).json({
      msg: `No member with id of ${req.params.id}`
    });
  }
});

// delete member
router.delete('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    // res.send(req.params.id);
    res.json({ msg: 'Member Deleted', 
    members:members.filter(member => member.id !== parseInt(req.params.id))});
  } else {
    res.status(400).json({
      msg: `No member with id of ${req.params.id}`
    });
  }
});


module.exports = router;