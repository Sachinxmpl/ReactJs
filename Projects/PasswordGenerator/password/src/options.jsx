export default function options({length , handleLengthChange , numAllowed , handleNumChange , charAllowed , 
  handleCharAllowed
}) {
  return (
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
            type="range"
             min={1} 
             max={20}
             className="cursor-pointer"
             onChange={handleLengthChange}
        />
        <label>Length : {length}</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
              defaultChecked={numAllowed}
              id="numberAllowed"
              onChange={handleNumChange}
        />
        <label htmlFor="numberAllowrd">Number</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"
              defaultChecked={charAllowed}
              id="charAllowed"
              onChange={handleCharAllowed}
        />
        <label htmlFor="charAllowed">Characters</label>
      </div>

    </div>
  );
}
