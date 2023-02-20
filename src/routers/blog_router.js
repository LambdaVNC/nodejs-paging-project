const router = require("express").Router();
const blog_controller = require("../controllers/blog_controller");

router.post("/blog",blog_controller.doSearch)
router.get("/", blog_controller.getAllArticle);
router.get("/blog", blog_controller.getAllArticle);
router.get("/:id", blog_controller.getOneArticle);

module.exports = router;

