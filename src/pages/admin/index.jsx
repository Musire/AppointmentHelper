import { Button, Page } from "@/components";
import { Link } from "react-router-dom";

const AdminPanel = () => {
    return ( 
        <Page className="p-4 centered-col w-full h-full " >
            <div className="surface-2 w-96 h-[25rem] flex-col flex space-y-4 p-4">
                <h3 className="">Staff Members</h3>
                <ul className="w-full h-full grow flex flex-col space-y-4">
                    <li className="bg-surface-3 border border-adjust normal-space">
                        <Link to="member" >
                            <p className="">name</p>
                            <p className="">email</p>
                        </Link>
                    </li>
                    <li className="bg-surface-3 border border-adjust normal-space">
                        <Link>
                            <p className="">name</p>
                            <p className="">email</p>
                        </Link>
                    </li>
                </ul>
                <Button className="w-full border border-adjust hover:surface-4" >Add Member</Button>
            </div>
        </Page>
     );
}
 
export default AdminPanel;