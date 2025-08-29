import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return ( 
        <main className="w-screen h-[100dvh] flex-col flex">
            <nav className="w-full h-20 centered bg-mid">navbar</nav>
            <div className="grow">
                <Outlet />
            </div>
            <footer className="w-full h-20 centered bg-mid">footer</footer>
        </main>
     );
}
 
export default MainLayout;