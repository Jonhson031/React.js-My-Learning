// ? props.children
// set by default by React
// it's content between our component tags

// ? To add event listeners on click we need to use onClick and specify function

function TabBtn({children, onSelect, isSelected}){
    // function handleClick (e) {
    //     console.log(e.target)
    // }
    return (
        <li><button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button></li>
    )
}
export default TabBtn;