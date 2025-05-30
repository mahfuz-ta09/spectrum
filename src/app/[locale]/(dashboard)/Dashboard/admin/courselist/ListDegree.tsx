import '@/css/Dashboard/admin/ListDegree.css'

const ListDegree = ({
        isListDegree,
        setIsListDegree}:{
            isListDegree:boolean , 
            setIsListDegree:React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    
    return (
        <div className={isListDegree? 'list-degree-container' : 'list-degree-container-hide'}>
            <button className='list-degree-container-close' onClick={()=>setIsListDegree(!isListDegree)}>close</button>

            <form className='list-degree-form'>
                <div className='list-degree-form-group'>
                    <label htmlFor="degree_name">name of the degree</label>
                    <input type="text" id='degree_name'/>
                </div>

                <div className='list-degree-form-group'>
                    <label htmlFor="department_name">department name</label>
                    <input type="text" id='department_name'/>
                </div>

                <div className='list-degree-form-group'>
                    <label htmlFor="course_name">course name</label>
                    <input type="text" id='course_name'/>
                </div>
                
                <button className='list-degree-form-btn'>submit</button>
            </form>
        </div>
    )
}

export default ListDegree