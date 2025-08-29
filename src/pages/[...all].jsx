import { Page } from "@/components";
import { Link } from "react-router-dom"

const Notfound = () => {
    return ( 
        <Page className='text-main space-y-6 centered-col w-full h-full' >
            <h1 className="text-2xl text-error dark:text-error-dark">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="bg-sky-700 hover:bg-sky-900 active:bg-sky-900 normal-space" >Go Home</Link>
        </Page>
     );
}
 
export default Notfound;