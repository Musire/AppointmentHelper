import { Page } from "@/components";
import { useAuth } from "@/context";
import { hasAccess } from "@/util/routeAccess";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {

    const { user } = useAuth()
    const location = useLocation()
    console.log(location.pathname)
    if (hasAccess(location.pathname, user)) {
        return (
            <main className="w-screen h-[100dvh] flex-col flex">
                <nav className="w-full h-20 centered bg-mid">navbar</nav>
                <div className="grow">
                    <Outlet />
                </div>
                <footer className="w-full h-20 centered bg-mid">footer</footer>
            </main>
        )
    }

    return ( 
        user 
        ? (
            <Page className="centered-col h-[100dvh] w-screen space-y-6" >
                <h2 className="text-2xl text-error dark:text-error-dark">Restricted Area</h2>
                <p className="">You are not allowed in this section, please go back</p>
            </Page>
        )
        : <Navigate to="/login"  />
     );
}
 
export default MainLayout;