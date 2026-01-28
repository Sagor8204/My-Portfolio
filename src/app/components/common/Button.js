export default function Button({text,styles,type}){
    return (
        <button className={`cursor-pointer ${styles}`} type={type}>
            {text}
        </button>
    )
}