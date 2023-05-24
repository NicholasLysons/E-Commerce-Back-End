const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

router.get("/", (req, res) => {
  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

router.get("/:isbn", (req, res) => {
  Tag.findOne({
    where: {
      isbn: req.params.isbn,
    },
  }).then((tagData) => {
    res.json(tagData);
  });
});

router.post("/", (req, res) => {
  Tag.create(req.body)
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag
    },
    {
      where: {
        isbn: req.params.isbn,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!tagData) {
      res.status(404).json({ message: "no tag found" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
