import Media from "./Media";

export default class Video extends Media{
    constructor(data){
        super(data)
        this.video=data.video
    }

    render(){
        // build card Video view
    }
}