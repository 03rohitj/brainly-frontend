interface InputProps{
    placeholder: string;
    ref?: any;
}

export function Input({ref, placeholder}: InputProps){
    return <div>
        <input type="text" placeholder={placeholder} className="px-4 py-2 border border-gray-200 rounded m-2" ref={ref}></input>
    </div>
}