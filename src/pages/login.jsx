import { Form, Input } from "@/components";
import { useNavigate } from "react-router-dom";
import z from "zod";

const LoginPage = () => {
    const navigate = useNavigate()
    const initial = {
            username: '',
            password: ''
        }
    const loginSchema = z.object({
        username: z.string().min(1, { message: "Username is required" }),
        password: z.string().min(1, { message: "Password is required" }),
    });

    const handleSubmit = (data) => {
        console.log(data)
        navigate('/')
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
                    label="username"
                    name="username"
                />
                <Input
                    type="password"
                    label="password"
                    name="password"
                />            
            </Form>
        </div>
     );
}
 
export default LoginPage;