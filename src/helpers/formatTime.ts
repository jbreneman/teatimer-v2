export const formatTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().substr(14, 5);
};
