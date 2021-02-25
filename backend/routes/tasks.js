'use strict';
const router = require("express").Router();
const { Task } = require("../config/db");

// requests (CRUD)
router.get("/getAll", (req, res, next) => {
    Task.find((err, result) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.send(result);
        }
    });
});

router.get("/getOne/:id", (req, res, next) => {
    const id = req.params.id
    Task.findById(id, (err, result) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.status(200).send(result);
        }
    });
});

router.post("/create", (req, res, next) => {
    const task = new Task(req.body);
    console.log(task);
    task.save()
        .then((result) => {
            res.status(201).send(`Task has beed added successfully!`)
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
});

//url parameter
router.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id, (err, result) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.status(204).send(result);
        }
    });
});

// query parameter
router.patch("/update/:id", (req, res, next) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, req.body, { new: true }, (err, result) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.status(202).send(`Successfully updated!`)
        }
    })
});

//replace a document
router.put("/replace/:id", (req, res, next) => {
    const id = req.params.id;
    const { description, isDone } = req.query;
    Task.findByIdAndUpdate(id, { description, isDone }, { new: true }, (err, result) => {
        if (err) {
            console.log(err);
            next(err);
        } else {
            res.status(202).send(`Successfully replaced!`)
        }
    })
})

module.exports = router;