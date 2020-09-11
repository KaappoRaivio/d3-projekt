const MoveBackground = (entities, { input }) => {
    const { payload } = input.find(x => x.name === "onKeyDown") || {};

    if (payload) {
        const { sprite, background } = entities;
        const { key } = payload;
        console.log(key)
        if (key === "a") {
            background.scrollPos += 2;
        } else if (key === "d") {
            background.scrollPos -= 2;
        }
    }

    return entities;
};

const Camera = (entities, { input }) => {

}

export { MoveBackground, Camera };