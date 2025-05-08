import Footer from "@/component/Footer/Footer"
import Banner from "@/component/home/Banner/Banner"
import Courses from "@/component/home/Courses/Courses"
import FAQ from "@/component/home/FAQ/FAQ"
import Speciality from "@/component/home/Speciality/Speciality"
import WhyChooseUs from "@/component/home/WhyChooseUs/WhyChooseUs"



const Page = () => {

    return (
        <div className="page">
            <Banner />
            <Speciality />
            <Courses />
            <WhyChooseUs />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Page