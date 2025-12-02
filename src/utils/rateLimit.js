const RATE_LIMIT_KEY = 'contact_form_last_submission';
const RATE_LIMIT_MINUTES = 2;

export const checkRateLimit = () => {
    const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
    if (lastSubmission) {
        const timeDiff = Date.now() - parseInt(lastSubmission);
        const minutesDiff = timeDiff / (1000 * 60);

        if (minutesDiff < RATE_LIMIT_MINUTES) {
            const remainingTime = Math.ceil(RATE_LIMIT_MINUTES - minutesDiff);
            return {
                allowed: false,
                remainingTime: remainingTime
            };
        }
    }
    return { allowed: true };
};

export const recordSubmission = () => {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
};
