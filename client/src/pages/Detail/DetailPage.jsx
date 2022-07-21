import { Link } from "react-router-dom";
import Description from "../../components/Product-detail/Description.jsx";
import OtherProducts from "../../components/Product-detail/OtherProducts.jsx";

export default function DetailPage(){
    return(
    <section>
        <Description />
        <OtherProducts />
    </section>
    )
}