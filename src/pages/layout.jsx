import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return ( 
        <main className="w-screen h-[100dvh] flex-col flex">
            <nav className="w-full h-20 centered bg-sky-200">navbar</nav>
            <div className="grow">
                <Outlet />
            </div>
            <footer className="w-full h-20 centered bg-sky-600">footer</footer>
        </main>
     );
}
 
export default MainLayout;