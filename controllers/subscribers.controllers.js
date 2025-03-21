import Subscribers from "../models/subscribers.models.js";

export const getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscribers.find({
            $where: "this.status === 'subscribed'"
        });
        res.status(200).json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}