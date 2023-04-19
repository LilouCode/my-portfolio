export const DropdownBtn = ({compare, setCompare, content, id}) =>{
    console.log( compare, content, id)
    return(
        <div onClick={setCompare} id={id} className={compare === content ? "hidden": "dropdown__option"}>{content}</div>
    )
}