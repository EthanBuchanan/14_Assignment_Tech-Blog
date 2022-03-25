const router = require('express').Router();

router.get('/login', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('login', { 
        title: "login"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/sign_up', async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('sign_up', { 
        title: "sign_up"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;