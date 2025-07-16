import React from "react";

export function Stars(){
    const stars = Array(20).fill(0);
    return(      
        <>
<div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
    {stars.map((_,i)=>(
<div key={i} 
className="w-[3px] h-[3px] bg-white rounded-full animate-fall absolute "
style={{
    left: `${Math.random()*100}%`,
    top: `-${Math.random()*100}px`,
    animationDelay: `${Math.random() *3}s`,
    animationDuration: `${2+Math.random()*3}s`,
    
}}></div>
    ))}
</div>
        </>
    )
}
export default Stars;