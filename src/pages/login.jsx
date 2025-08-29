import { Form, Input } from "@/components";
import { useAuth, useToastContext } from "@/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import z from "zod";

const LoginPage = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const { addError } = useToastContext()
    const initial = {
            email: '',
            password: ''
        }
    const loginSchema = z.object({
        email: z.email({ message: "Email is required" }),
        password: z.string().min(1, { message: "Password is required" }),
    });

    const handleSubmit = async (data) => {
        try {
            const response = await axios.post(
            `${import.meta.env.VITE_AUTH_API_URL}/api/login`, 
            data, 
                {
                    headers: {
                    "X-Tenant-ID": import.meta.env.VITE_TENANT_ID,
                    "x-api-key": import.meta.env.VITE_AUTH_API_KEY,
                    "Content-Type": "application/json"
                    }
                }
            );

            if (response?.data?.accessToken) {
                login(response.data.accessToken)
                navigate('/home')
            };
        } catch (error) {
            console.error("Error creating resource:", error.response?.data || error.message);
            addError(error.response?.data?.error)
            throw error;
        }
    }
    return ( 
        <div className=" w-full h-full p-4">
            <h2 className="text-xl text-center w-full text-main">Login Page</h2>
            <Form
                initialValues={initial}
                schema={loginSchema}
                onSubmit={handleSubmit}
            >
                <Input
                    name="email"
                />
                <Input
                    type="password"
                    name="password"
                />            
            </Form>
        </div>
     );
}
 
export default LoginPage;