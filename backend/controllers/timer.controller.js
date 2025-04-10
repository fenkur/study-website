import Timer from "../models/timer.model.js";

export const createTimer = async (req, res, next) => {
    try {
        const { language, duration } = req.body;
        const userId = req.user.userId;

        const newTimer = await Timer.create({ user: userId, language, duration });

        res.status(201).json({ 
            success: true, 
            data: newTimer,
            message: "Timer created successfully"
        });
    } catch (error) {
        next(error);
    }
}

export const getTimers = async (req, res, next) => {
    try {
        const userId = req.user.userId;

        const timers = await Timer.find({ user: userId }).sort({ date: -1 });

        res.status(200).json({ 
            success: true, 
            data: timers,
            message: "Timers fetched successfully"
        });

    } catch (error) {
        next(error);
    }
}