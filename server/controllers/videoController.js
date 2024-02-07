const Video = require("../models/Video");
const User = require("../models/User");
const { Success, Error } = require("../utility/responseWrapper")

const getAllVideoHandler = async (req, res) => {

    const allVideos = await Video.find();

    if (!allVideos) {
        return res.send(Error(404, 'no videos ,if creator post the video then it will show here'));
    }

    return res.send(Success(200, { allVideos }));

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

const likeUnlikeVideosHandler = async (req, res) => {

    const { videoId } = req.body;
    const videoTolike = await Video.findById(videoId);
    const currentVerifiedUserId = req._id;

    if (!videoTolike) {
        return res.send(Error(404, 'Video not found'));
    }

    try {

        if (videoTolike.likes.includes(currentVerifiedUserId)) {

            const likedUserIndex = videoTolike.likes.indexOf(currentVerifiedUserId);

            videoTolike.likes.splice(likedUserIndex, 1);
            await videoTolike.save();

            return res.send(Success(200, "video unliked successfully"));

        } else {

            videoTolike.likes.push(currentVerifiedUserId);
            await videoTolike.save();

            return res.send(Success(200, 'video liked successfully'));

        }

    } catch (error) {

        return res.send(Error(500, error));

    }

}

const commentVideosHandler = async (req, res) => {

    const { videoId, text } = req.body;
    const videoToComment = await Video.findById(videoId);
    const currentVerifiedUserId = req._id;

    if (!videoToComment) {
        return res.send(Error(404, "No video found to comment"));
    }

    if (!text) {
        return res.send(Error(403, "comment text not found"));
    }

    try {

        videoToComment.comments.push({
            user: currentVerifiedUserId,
            text
        });

        await videoToComment.save();
        return res.send(Success(200, "comment added successfully"));

    } catch (error) {

        return res.send(Error(500, error));

    }

};

module.exports = {
    getAllVideoHandler,
    createVideoHandler,
    likeUnlikeVideosHandler,
    commentVideosHandler
}