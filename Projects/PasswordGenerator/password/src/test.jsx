import React from "react";
import { useState, useCallback, useMemo ,memo} from "react";


const Navbar = memo(({ adjective }) => {
    console.log("Navbar is re-rendered ")
    return (
        <p> I am a goo {adjective}</p>
    )
})



export default function TestUseCallBack() {


    const changeAdjective = () => {
        return "another"
    }

    const [count, setCount] = useState(0)
    const [adjective, setAdjective] = useState("luck")


    

    return (

        <div className="text-white">
            <Navbar adjective="lluck" changeAdjective={changeAdjective} />

            <div>
                <button
                    onClick={() => setCount((count) => count + 1)}
                >
                    count : {count}
                </button>

            </div>
        </div>

    )

}

