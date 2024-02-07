const User = require("../models/User");
const { Success, Error } = require("../utility/responseWrapper");

const userSubscribeHandler = async (req, res) => {

    const { userIdToSubscribe } = req.body;
    const subscribeToCreator = await User.findById(userIdToSubscribe);
    const currentVerifiedUserId = req._id;
    const currentVerifiedUser = await User.findById(currentVerifiedUserId);

    if (userIdToSubscribe == currentVerifiedUserId) {
        return res.send(Error(403, "user can't subscribe themselves"));
    }

    if (!subscribeToCreator) {
        return res.send(Error(404, "Creator not found to subscribe"));
    }

    if (subscribeToCreator.subscribers.includes(currentVerifiedUserId)) {

        const subscribedUserIndexInCreator = subscribeToCreator.subscribers.indexOf(currentVerifiedUserId);
        const creatorIndexInUserSubscription = currentVerifiedUser.subscription.indexOf(userIdToSubscribe);

        subscribeToCreator.subscribers.splice(subscribedUserIndexInCreator, 1);
        currentVerifiedUser.subscription.splice(creatorIndexInUserSubscription, 1);

        await subscribeToCreator.save();
        await currentVerifiedUser.save();

        return res.send(Success(200, "Unsubscribe successfully"));

    } else {

        subscribeToCreator.subscribers.push(currentVerifiedUserId);
        currentVerifiedUser.subscription.push(userIdToSubscribe);

        await subscribeToCreator.save();
        await currentVerifiedUser.save();

        return res.send(Success(200, "Subscribe successfully"));

    }

};

const getSubscribedCreatorsVideos = async (req, res) => {

    const currentVerifiedUserId = req._id;
    const currentVerifiedUser = await User.findById(currentVerifiedUserId);

    if (!currentVerifiedUser) {
        return res.send(Error(404, "user not found"));
    }

    try {

        const subscribedCreators = await currentVerifiedUser.populate({
            path: 'subscription',
            populate: {
                path: 'videos',
                populate: {
                    path: 'comments'
                }
            }
        });

        let allsubscribedCreatorsVideos = [];

        subscribedCreators.subscription.forEach(creator => {
            creator.videos.forEach(video => {
                allsubscribedCreatorsVideos.push(video);
            });
        });

        res.send(Success(200, { videos: allsubscribedCreatorsVideos }));

    } catch (error) {

        res.send(Error(500, error));

    }

}

module.exports = {
    userSubscribeHandler,
    getSubscribedCreatorsVideos
}