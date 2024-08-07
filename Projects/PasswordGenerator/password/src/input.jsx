
export default function Input({password , copyPassword , passwordRef}){
    return (
        <div className="flex rounded-lg overflow-hidden mb-4 ">
            <input 
                type ="text"
                readOnly
                value={password}
                ref={passwordRef}
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
            />
            <button
                className="outline-none *:   bg-blue-700
                text-white
                px-3
                py-0.5
                shrink-0"
                onClick={copyPassword}
            >
                Copy
            </button>
        </div>
    )
}