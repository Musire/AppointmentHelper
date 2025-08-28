import { Form, Input } from "@/components";
import z from "zod";

const SignupPage = () => {
    const initial = {
        username: '',
        password: ''
    }
    const signupSchema = z.object({
        username: z.string().min(1, { message: "Username is required" }),
        password: z.string().min(1, { message: "Password is required" }),
    });

    const handleSubmit = (data) => {
        console.log(data)
    }

    return ( 
        <div className=" w-full h-full p-4">
            <h2 className="text-xl text-center w-full text-main">Signup Page</h2>
            <Form
                initialValues={initial}
                schema={signupSchema}
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
 
export default SignupPage;