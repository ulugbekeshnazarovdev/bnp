import ImageSpa from "../assets/img/nature.png";
import { Hero } from "../components/home/hero";
import Main from "../components/home/main";
import SubContent from "../components/home/subContent/SubContent";

const Home = () => {
    return (
        <div>
            <Hero />
            <SubContent
                background={"#616884"}
                imageBg={ImageSpa}
                imageCenter={ImageSpa}
            />
            <Main />
        </div>
    );
};

export default Home;
