import Footer from "@/component/Footer/Footer"
import Courses from "@/component/home/Courses/Courses"
import FAQ from "@/component/home/FAQ/FAQ"
import LandingPage from "@/component/home/LandingPage/LandingPage"
import Speciality from "@/component/home/Speciality/Speciality"
import WhyChooseUs from "@/component/home/WhyChooseUs/WhyChooseUs"



const Page = () => {

    return (
        <>
            <LandingPage />
            <Courses />
            <Speciality />
            <WhyChooseUs />
            <FAQ />
            <Footer />
        </>
    )
}

export default Page