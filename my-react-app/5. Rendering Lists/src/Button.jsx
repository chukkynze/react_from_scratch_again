
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

    return(<button style={styles}>Click me</button>)

    // Modules
    // return(
    //     <button className={styles.button}>Click me</button>
    // );

    // External Styles
    // return(
    //     <button className="button">Click me</button>
    // );
}

export default Button
