export const createCards = (count = 200) => {
    return Array.from({ length: count }, (_, index) => ({
        value: index + 1,
        name: String(index + 1),
    }));
};