import { Footer } from "../organisms/Footer"
import { Header } from "../organisms/headers/Header"
export const Page = ({chilidren}) =>{
    return (
        <div className="page">
            <Header/>
            {chilidren}
            <Footer/>
        </div>
    )
}