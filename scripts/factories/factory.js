 import Image from "../model/Image"
 import Video from "../model/Video"

export default class FactoryMedia{
    constructor(data){
        if(data.image){
            return new Image(data)
        }else if(data.video){
            return new Video(data)
        }else if(data.image2){
            return new Image(data)
        }else{
            throw Error("Unknow type data")
        }
    }
}