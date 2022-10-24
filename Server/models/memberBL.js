const memberModel = require('./memberModel');

const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        memberModel.find({}, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}

const getMember = (id) => {
    return new Promise((resolve, reject) => {
        memberModel.findById(id, function (err, data) {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


const addMember = (obj) => {
    return new Promise((resolve, reject) => {
        const s = new memberModel({
            name: obj.name,
            last: obj.last,
            pid: obj.pid,
            addres: obj.addres,
            birthDate: obj.birthDate,
            phone: obj.phone,
            mobile: obj.mobile,
            firstcovid: obj.firstcovid,
            secondcovid: obj.secondcovid,
            thirdcovid: obj.thirdcovid,
            fourcovid: obj.fourcovid,
            positiveCovid: obj.positiveCovid,
            negativeCovid: obj.negativeCovid
        })
        s.save(function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve("created")
            }
        })
    })
}

const updateMember = (id, obj) => {
    return new Promise((resolve, reject) => {

        memberModel.findByIdAndUpdate(id,
            {

                name: obj.name,
                last: obj.last,
                pid: obj.pid,
                addres: obj.addres,
                birthDate: obj.birthDate,
                phone: obj.phone,
                mobile: obj.mobile,
                firstcovid: obj.firstcovid,
                secondcovid: obj.secondcovid,
                thirdcovid: obj.thirdcovid,
                fourcovid: obj.fourcovid,
                positiveCovid: obj.positiveCovid,
                negativeCovid: obj.negativeCovid
            }, function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    resolve('updated')
                }
            })
    })
}

const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        memberModel.findByIdAndDelete(id, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve('deleted')
            }
        })
    })
}

module.exports = { getAllMembers, getMember, addMember, updateMember, deleteMember }