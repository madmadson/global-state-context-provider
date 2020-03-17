
export interface SwHwCompatDTO {
    id: string
    name: string
}



export interface FlashwareDTO {
    id: string
    name: string
    swHwCompats: SwHwCompatDTO[]

}


export interface IFlashwareViewModel {
    id: string
    name: string
    amountOfSWHwCompats: number
}