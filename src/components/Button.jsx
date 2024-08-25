function Button({text,onPress}){
    return(<button onClick={onPress} className="flex-shrink-0 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg mt-10 sm:mt-0 mx-3" > {text}</button>)
}
export default Button;