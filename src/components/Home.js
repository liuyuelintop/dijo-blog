import { useState } from "react";

const Home = () => {
    // make a hook: state, which is a reactive value
    const handleClick = () => {
        setName('luigi');
        setAge(30)
    }

    const [name, setName] = useState("mario");
    const [age, setAge] = useState(20);
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;