const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Grade = require("../models/grade");

var grades = [];

grades[0] = new Grade(0, 'Olzhas', 'MWA', 90);

router.get('/', (req, res, next) => {
    return res.json(grades);
});

router.get('/:id', [check(['id']).exists()], (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty() && grades[req.params.id]){
        return res.json(grades[req.params.id]);
    } else return next(new Error('Element does not exist'));
});

router.post('/', [check(['name', 'course', 'grade']).exists()], (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        let grade = new Grade(grades.length, req.body.name, req.body.course, req.body.grade);
        grades[grades.length] = grade;
        res.json(grade);
    } else return next(new Error('Unable to create object'));
});

router.put('/:id', [check(['id', 'name', 'course', 'grade']).exists()], (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty() && grades[parseInt(req.params.id)]){
        grades[req.params.id].update(req.body.name, req.body.course, req.body.grade);
        res.json(grades[req.params.id]);
    }  else return next(new Error('Unable to update object'));
});

router.delete('/:id', [check(['id']).exists()], (req, res, next) => {
    const errors = validationResult(req);
    if(errors.isEmpty() && grades[parseInt(req.params.id)]){
        delete grades[parseInt(req.params.id)];
        return res.send('Item deleted');
    } else return next(new Error('Element does not exist'));
});

module.exports = router;