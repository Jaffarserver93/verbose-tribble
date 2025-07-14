const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);

module.exports = async function generateReviewId(Review) {
    let reviewId;
    let isUnique = false;

    while (!isUnique) {
        reviewId = nanoid();
        const existingReview = await Review.findOne({ reviewId });
        if (!existingReview) {
            isUnique = true;
        }
    }

    return reviewId;
};