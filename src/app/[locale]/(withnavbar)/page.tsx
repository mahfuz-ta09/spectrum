import Banner from "@/component/home/Banner/Banner"
import Courses from "@/component/home/Courses/Courses"
import Speciality from "@/component/home/Speciality/Speciality"

const Page = () => {
    
    return (
        <div className="page">
            <Banner />
            <Speciality />
            <Courses />
        </div>
    )
}

export default Page