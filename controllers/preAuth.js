const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        /*
      // Get all projects and JOIN with user data
      const projectData = await Project.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  */
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        title: "The Tech Blog",
        logged_in: true,
        cards: [
            {
                card_title: "asdf",
                card_date: "12/31/23",
                card_body: "asfdasdfasdfasdfsdfasdfasdf"
            },
            {
                card_title: "asdf",
                card_date: "12/31/23",
                card_body: "asfdasdfasdfasdfsdfasdfasdf"
            },
            {
                card_title: "asdf",
                card_date: "12/31/23",
                card_body: "asfdasdfasdfasdfsdfasdfasdf"
            },
        ]
        //projects, 
        //logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/post/:post_id' , async (req, res) => {
    try {
        
      // Pass serialized data and session flag into template
      res.render('post', { 
        title: "The Tech Blog"
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;