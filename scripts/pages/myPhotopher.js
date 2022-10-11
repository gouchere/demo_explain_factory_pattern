import FactoryMedia from "../factories/factory"
const datas=[]

const displayData=()=>{
    const section=document.querySelector("root")

    datas.forEach(data=>{
        const media=new FactoryMedia(data)
        section.appendChild(media.render())
    })
}