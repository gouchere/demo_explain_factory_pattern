import Media from "./Media";

export default class Image2 extends Media{
    constructor(data){
        super(data)
        this.image=data.image
        this.miniature=data.miniature
    }

    render(){
        // build card Image view with miniature
    }
}