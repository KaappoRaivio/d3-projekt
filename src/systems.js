const MoveBackground = (entities, { input }) => {
    const { payload } = input.find(x => x.name === "onKeyDown") || {};

    if (payload) {
        const { background } = entities;
        const { key } = payload;
        console.log(key)
        if (key === "a") {
            background.scrollPos += 1;
        } else if (key === "d") {
            background.scrollPos -= 1;
        }
    }

    return entities;
};

const Camera = (entities, { input }) => {

}

export { MoveBackground, Camera };