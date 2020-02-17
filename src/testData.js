export const generateTestData = (state, amountOfTestData) => {

    state.flashwares = {
        swHwCompats: []
    };
    state.swHwCompats = {};
    
    let flashwareIndex = 1;
    let swHwCompatIndex = 1;
    const swHwCompatPerFlashware = 3;
    
    [...Array(amountOfTestData)].forEach((_, i) => {
        let j = i+1;
        state.flashwares[flashwareIndex] = {
            id: flashwareIndex,
            name: `flashware_${flashwareIndex}`,
            someData: [],
            moarData: [],
            dataaaa: '',
            datatata: [],
            yeahData: [],
            cats: [],
            swHwCompats: []
        };
        [...Array(swHwCompatPerFlashware)].forEach((_, k) => {
            state.swHwCompats[swHwCompatIndex] = {
                id: swHwCompatIndex,
                name: `swHwCompat_${swHwCompatIndex}`,
                flashwareId: j
            }
            state.flashwares[flashwareIndex].swHwCompats.push(swHwCompatIndex);
            ++swHwCompatIndex;
        });
        ++flashwareIndex;
    });
    
    return state;
}
