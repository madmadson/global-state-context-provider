import { IGlobalAppState } from './GlobalStateProvider';
import { IFlaswareState } from './flashware/FlashwareStateProvider';
import uuidv4 from "uuid/v4"

export const generateTestData = (state: IGlobalAppState, amountOfTestData: number) => {

    state.flashwares = {
        swHwCompats: []
    };
    state.swHwCompats = {};
    state.stateForFlashwares = false;
    state.stateForSwHwCompats = false;


    let flashwareIndex = 1;
    let swHwCompatIndex = 1;
    const swHwCompatPerFlashware = 3;
    
   /*   [...Array(amountOfTestData)].forEach((_, i) => {
        let j = i+1;
        state.flashwares[flashwareIndex] = {
            id: uuidv4(),
            name: `flashware_${flashwareIndex}`,
            amountOfSWHwCompats: 3
        };
        [...Array(swHwCompatPerFlashware)].forEach((_, k) => {
            state.swHwCompats[swHwCompatIndex] = {
                id: uuidv4(),
                name: `swHwCompat_${swHwCompatIndex}`,
                flashwareId: j
            }
            state.flashwares[flashwareIndex].swHwCompats.push(swHwCompatIndex);
            ++swHwCompatIndex;
        });
        ++flashwareIndex;
    });  */
    
    return state;
}


export const generateFlashwareData = (state: IFlaswareState, amountOfTestData: number) => {

    let flashwareIndex = 1;
    [...Array(amountOfTestData)].forEach((_, i) => {
        state.flashwares[flashwareIndex] = {
            id: uuidv4(),
            name: `flashware_${flashwareIndex}`,
            amountOfSWHwCompats: 3
        };
        ++flashwareIndex;
    });
    return state;
}