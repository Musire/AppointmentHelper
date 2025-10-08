import { Button, Page } from "@/components";
import clsx from "clsx";
import { useState } from "react";

const MemberDetails = () => {
    const [isClicked, setIsClicked] = useState(false);
    const clickAction = () => {
        setIsClicked(false)
        requestAnimationFrame(() => setIsClicked(true));
    }
    return ( 
        <Page className="centered">
            <div className="relative " > 
                {isClicked && <span className={clsx('absolute text-else size-10 bg-softOrange/40 left-1/2 translate-x-1/2 top-1/2 translate-y-1/2', { 'animate-ripple': isClicked})}></span>}
                <Button className="absolute bg-black/30 size-20" action={clickAction} >test button</Button>
            </div>
        </Page>
     );
}
 
export default MemberDetails;