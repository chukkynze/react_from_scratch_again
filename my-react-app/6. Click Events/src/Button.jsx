
function Button(){

    // Inline Styles
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        padding: "10px 20px",
        color: "white",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    let count = 0;
    const handleClick = (e) => e.target.textContent = "Ouch you clicked me bro.";
    return(<button onDoubleClick={(e) => handleClick(e)} style={styles}>Click me</button>)

    // const handleClick2 = (name)=> console.log(`Button clicked by ${name}. Ouch!`)
    // return(<button onClick={() => handleClick2("Chukky")} style={styles}>Click me</button>)
}

export default Button
