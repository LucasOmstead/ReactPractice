/*React Notes

-DOM = document object model, basically the webpage that’s rendered
-Components are like small portions of the rendered webpage. Components can have multiple components, and it’s like a “tree” where there is one super component at the top of the hierarchy with all of the other ones inside of it.
-Each component is a javascript class with a state (dictionary with component’s data inside) and render method (like an html document). Css is in another file, ex. App.css or index.css. To use the css, import ‘filename.css’;
-XML similar to HTML but any tags can be used



PROPS: 
PROPS is short for properties.
An object (dictionary), variable, etc that’s passed into a function or class in React. Used for rendering stuff – instead of doing <h1> {x} </h1> do <h1> {props.x} </h1>

In functions:
function x(props) {
	return(
		<h1> {props.y} </h1>
	)
}
root.render(<x y={“Hello there”} />)
    
In classes:
(react.component = component if component is called in imports via destructuring)
class x extends React.component {
    constructor(props) {
        super(props); //just do it
        this.state = {
            //object goes here
        } //when setting state elsewhere use setState
    }
    render() {
        <h1> {this.state.y} </h1>
    }

    
}


binding:
-a method in a class will use that class as its "this", but when it's copied it'll use a different "this". Binding ensures that 
its "this" will always be the same

*/
