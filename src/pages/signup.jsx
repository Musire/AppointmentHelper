import { Form, Input } from "@/components";
import axios from "axios";
import z from "zod";

const SignupPage = () => {
    const VITE_AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL
    const VITE_AUTH_API_KEY = import.meta.env.VITE_AUTH_API_KEY
    const VITE_TENANT_ID = import.meta.env.VITE_TENANT_ID

    const initial = {
        username: 'test',
        password: 'test',
        password2: 'test',
        email: 'test@test.com'
    }
    const signupSchema = z
        .object({
            username: z.string().min(1, { message: "Username is required" }),
            email: z.email({ message: "Please provide a valid email address" }),
            password: z.string().min(1, { message: "Password is required" }),
            password2: z.string().min(1, { message: "Please confirm your password" })
        })
        .refine((data) => data.password === data.password2, {
            message: "Passwords do not match",
            path: ["confirmPassword"], // attach the error to confirmPassword field
    });

    const handleSubmit = async (data) => {
        const formData = {...data, domain: 'http://192.168.1.69:5173'}
        console.log(formData)
        try {
            const response = await axios.post(
            `${VITE_AUTH_API_URL}/api/register`, 
            formData, 
            {
                headers: {
                "X-Tenant-ID": VITE_TENANT_ID,
                "x-api-key": VITE_AUTH_API_KEY,
                "Content-Type": "application/json"
                }
            }
            );

            return response.data;
        } catch (error) {
            console.error("Error creating resource:", error.response?.data || error.message);
            throw error;
        }
    }

    return ( 
        <div className=" w-full h-full p-4">
            <h2 className="text-xl text-center w-full text-main">Signup Page</h2>
            <h3 className="text-else text-center w-full">Welcome</h3>
            <Form
                initialValues={initial}
                schema={signupSchema}
                onSubmit={handleSubmit}
            >
                <Input
                    name="username"
                />
                <Input
                    name="password"
                    type="password"
                />
                <Input
                    name="password2"
                    type="password"
                    label="confirm password"
                />
                <Input 
                    name='email'
                />           
            </Form>
        </div>
     );
}
 
export default SignupPage;