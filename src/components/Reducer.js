
import Students from './Student' 
import AddStud from './AddStud'
import EditStud from './EditStud'



const Reducer = (state="",action) =>{
    switch(action){
     case AddStud : return <AddStud/>
     case EditStud : return <EditStud/>
     default : return <Students/>
    }
}

export default Reducer;