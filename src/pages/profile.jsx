import { Button, Page } from "@/components";
import { useAuth } from "@/context";

const ProfilePage = () => {
    const { logout } = useAuth()
    return ( 
        <Page className="w-full h-full p-4 centered-col space-y-6" >
            welcome to your profile page
            <Button action={logout} className="">Logout</Button>
        </Page>
     );
}
 
export default ProfilePage;