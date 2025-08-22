const pollinationBaseUrl = import.meta.env.VITE_POLLINATION_API_URL || 'https://image.pollinations.ai'

export const getImages = async ({ prompt, seed, model, width, height }) => {
    const res = await fetch(
        `${pollinationBaseUrl}/prompt/${prompt}&seed=${seed}&model=${model}&width=${width}&height=${height}&safe=true`
    );
    return res.url || ''
};

export const getModels = async () => {
    const data = await fetch(`${pollinationBaseUrl}/models`);
    return data.json() || []
}
