import Title from "../components/Title";
import Text from "../components/Text";
import Image from "../components/Image";

const Project = ({titleText, imagePath, text})=>{

    return(
        <div>
        <Title titleText ={titleText}/>
        <Image imagePath={imagePath}/>
        <Text text = {text}/>
        </div>
    )
};

export default Project;