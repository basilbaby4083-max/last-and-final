import { useState } from "react";

export default function ToggleMessage(){
    const [show,setShow] = useState(false);
    function ToggleMessage(){
            setShow(!show)
    }
    return(
        <div>
            {show && <h1>I Miss You</h1>}
            <button onClick={ToggleMessage}>
                {show ? "hide Message":"show message"}
            </button>
        </div>
    )
}