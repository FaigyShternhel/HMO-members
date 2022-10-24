const memberBL = require('../models/memberBL')
const express = require('express')


const router = express.Router();

router.route('/')
    .get(function (req, resp) {
        memberBL.getAllMembers()
            .then(data => {
                return resp.json(data)
            })
    })

router.route('/:id')
    .get(function (req, resp) {
        memberBL.getMember(req.params.id)
            .then(data => {
                return resp.json(data)
            })
    })

router.route('/')
    .post(function (req, resp) {
        let member = req.body;
        console.log(member)
        memberBL.addMember(member)
            .then(data => {
                return resp.json(data)
            })
    })

router.route('/:id')
    .put(function (req, resp) {
        let obj = req.body;
        let id = req.params.id;
        memberBL.updateMember(id, obj)
            .then(data => {
                return resp.json(data)
            })
    })

router.route('/:id')
    .delete(function (req, resp) {
        let id = req.params.id;
        memberBL.deleteMember(id)
            .then(data => {
                return resp.json(data)
            })
    })


module.exports = router