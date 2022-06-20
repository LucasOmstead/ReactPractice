const x = require('upper-case');
function Test1(props) {
    var y = x.upperCase("hello");
    return(
        <div>
            <h1> {y} </h1>
            <h1> {props.x} </h1>
            <h1> {props.y} </h1>
        </div>
    );
}



export default Test1;
//HAS TO BE UPPERCASEEEEEE


