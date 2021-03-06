const router = require('express').Router();
const withAuth = require("../utils/auth");

router.get('/dashboard', withAuth , async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('dashboard', { 
        title: "Dashboard"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/dashboard/new_post', withAuth , async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('new_post', { 
        title: "The Tech Blog"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/dashboard/update_post/:post_id', withAuth , async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('update_post', { 
        title: "The Tech Blog"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;