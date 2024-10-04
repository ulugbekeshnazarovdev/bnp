import React from "react";
import SpringData from "../../../assets/data/summer";
import winter from "../../../assets/data/winter";
import ImagePnf from "../../../assets/img/nature-pnf.png";
import ImagePg from "../../../assets/img/nature-sp.png";
import SubContent from "../subContent/SubContent";
import Collections from "./Collections";
import NewsComponent from "./News";

const Main = () => {
    return (
        <main>
            <Collections
                heading={"Qish kolleksiyasi"}
                paragriph={"Buxoro tabiiy mahsuloti"}
                product={winter} // Prop nomi to'g'ri moslashtirildi
            />

            <SubContent
                background={"#625686"}
                imageBg={ImagePg}
                imageCenter={ImagePg}
            />

            <Collections
                heading={"Kuz kolleksiyasi"}
                paragriph={"Buxoro tabiiy mahsuloti"}
                product={SpringData} // Prop nomi to'g'ri moslashtirildi
            />
            <SubContent
                background={"#307e7a"}
                imageBg={ImagePnf}
                imageCenter={ImagePnf}
            />
            <Collections
                heading={"Bahor kolleksiyasi"}
                paragriph={"Buxoro tabiiy mahsuloti"}
                product={SpringData} // Prop nomi to'g'ri moslashtirildi
            />
            <NewsComponent />
        </main>
    );
};

export default Main;
