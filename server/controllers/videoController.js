const { Success } = require("../utility/responseWrapper")

const getAllVideoHandler = (req, res) => {

    return res.send(Success(200, 'All video access granted'));

}

module.exports = { getAllVideoHandler }