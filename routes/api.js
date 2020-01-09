const express = require('express');
const router = express.Router();
const postscontrol = require('../controller/Posts');
const auth = require('../middleware/Token');
const uploadimage = require('../middleware/image');
const postscontroller = new postscontrol;


router.post('/addpost', [auth, uploadimage], postscontroller.addPosts);
router.post('/getposts',auth, postscontroller.getPost);



module.exports = router;