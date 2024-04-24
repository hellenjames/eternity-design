import Posts from "../components/Posts"
import Postfilter from "../components/Postfilter"

function Post(){
    return(
        <div>
            <Postfilter/>
            
            <Posts/>
        </div>
    )
}
export default Post