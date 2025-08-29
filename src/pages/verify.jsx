import { Button, Page } from "@/components";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const UserCreationVerify = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const verifyUser = async () => {
        if (!token) return;

        try {
            const response = await axios.get(
                `${import.meta.env.VITE_AUTH_API_URL}/api/verify-email?token=${token}`,
                {
                    headers: {
                    "X-Tenant-ID": import.meta.env.VITE_TENANT_ID,
                    "x-api-key": import.meta.env.VITE_AUTH_API_KEY,
                    },
                }
            );

            console.log("Verification success:", response.data);
        } catch (error) {
            console.error(
            "Verification failed:",
            error.response?.data || error.message
            );
        }
    };
    return ( 
        <Page className="p-4" >
            verifying
            <p className="">
                {token}
            </p>
            <Button action={verifyUser} className="w-full bg-mid text-deep active:bg-smoke">verify account</Button>
        </Page>
     );
}
 
export default UserCreationVerify;