class CardModel {
    constructor(campaignTitle, location, category, brief, raised, backers, daysLeft, goal, id) {
        this[id] = {
            campaignTitle : campaignTitle,
            location : location,
            category: category,
            brief : brief,
            raised: raised,
            backers: backers,
            daysLeft : daysLeft,
            goal : goal,
        }
    }
}

module.exports = { CardModel };