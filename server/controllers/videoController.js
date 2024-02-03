const Video = require("../models/Video");
const User = require("../models/User");
const { Success, Error } = require("../utility/responseWrapper")

const getAllVideoHandler = (req, res) => {

    return res.send(Success(200, 'All video access granted'));

}

const createVideoHandler = async (req, res) => {

    const { title, description } = req.body
    const owner = req._id;
    const creator = await User.findById(req._id);

    if (!title || !description) {
        return res.send(Error(403, 'title and description must be provided'));
    }

    try {

        const createdVideo = await Video.create({
            owner,
            title,
            description,
        });

        creator.videos.push(createdVideo._id);
        await creator.save();

        return res.send(Success(200, createdVideo));

    } catch (error) {

        return res.send(Error(500, error.message));

    }

};

module.exports = {
    getAllVideoHandler,
    createVideoHandler
}