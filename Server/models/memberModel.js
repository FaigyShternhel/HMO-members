const mongoose = require('mongoose');

let MemberSchema = new mongoose.Schema({
    name: String,
    last: String,
    pid: String,
    addres: { city: String, street: String, number: String },
    birthDate: Date,
    phone: String,
    mobile: String,
    firstcovid: { date: { type: String, default: '' }, manufacturer: { type: String, default: '' } },
    secondcovid: { date: { type: String, default: '' }, manufacturer: { type: String, default: '' } },
    thirdcovid: { date: { type: String, default: '' }, manufacturer: { type: String, default: '' } },
    fourcovid: { date: { type: String, default: '' }, manufacturer: { type: String, default: '' } },
    positiveCovid: { type: String, default: '' },
    negativeCovid: { type: String, default: '' }


})

module.exports = mongoose.model('member', MemberSchema)