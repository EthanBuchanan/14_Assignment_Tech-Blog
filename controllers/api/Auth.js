const router = require('express').Router();

router.post('/api/login', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "login successful"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/api/sign_up', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "sign up successful"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/api/log_out', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.json( { 
        message: "log out successful"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;