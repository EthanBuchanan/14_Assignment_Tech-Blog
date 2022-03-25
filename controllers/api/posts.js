const router = require('express').Router();

router.post('/api/new_comment', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "comment logged"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/api/new_post', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "post logged"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.put('/api/update_comment', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "post updated"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/api/delete_comment', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "post deleted"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;