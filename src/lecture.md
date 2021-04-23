//Lecture 4
//Component Props

//But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)

//Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.

//Using Props in React
//1st Step: Defining Attribute & Data
//We already know that we can assign attributes and values to HTML tags
//
//<a href="www.google.com">Click here to visit Google</a>;
//Likewise, we can do the same for React components. We can define our own attributes & assign values with interpolation { }
//
//<ChildComponent someAttribute={value} anotherAttribute={value}/>
//Here I’m declaring a “text” attribute to the ChildComponent and then assign a string value: “I’m the 1st child”
//
//<ChildComponent text={“I’m the 1st child”} />
//2nd Step: Passing Data using Props
//Passing props is very simple. Like we pass arguments to a function, we pass props into a React component and props bring all the necessary data.
//
//Arguments passed to a function
//
//const addition = (firstNum, secondNum) => {  
// return firstNum + secondNum;
//};
//Arguments passed to a React component
//
//const ChildComponent = (props) => {  
// return <p>I'm the 1st child!</p>;
//};
//Final Step: Rendering Props Data
//Prop is an Object. We have to render the attributes using the dot(.) notation with interpolation.
//
//const ChildComponent = (props) => {  
// return <p>{props.text}</p>;
//};
//Component State
//State is a JavaScript object that stores a component’s dynamic data and determines the component’s behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive.
//
//State can only be used within a class component. If you anticipate that a component will need to manage state, it should be created as a class component and not a functional one.
//
//State is similar to props but unlike props, it is private to a component and is controlled solely by the said component.
//
//State in React is immutable, that is to say, state should never be altered/changed directly but rather, changes should be made to a copy of the current version of the state. This has benefits such as providing the ability to review the state at different points in time and for apps to hot reload (automatic reloading of the page in the browser when you make changes in the code).
//
//Adding State to a Class Component
//class Greeting extends React.Component {
// render(){
// return <h1>I’m a component in need of some state!</h1>;
// }
//}
//Adding state to the Greeting component above involves defining within the class component, a constructor function that assigns the initial state using this.state
//
//class Greeting extends React.Component {
// constructor(props) {
// super(props);
// // Define your state object here
// this.state = {
// name: ‘Jane Doe’
// }
// }
// render(){
// return <h1>Hello { this.state.name }</h1>;
// }
//}
//Notice that the constructor accepts props as an argument, which are then passed to super(). Adding super() is a must when using the constructor.
//
//Passing props is not necessary unless you are making use of them in the component. From the Greeting component above, it’s not necessary to pass props to either the constructor or super(), that is to say, the component can be written like so:
//
//class Greeting extends React.Component {
// constructor() {
// super();
// // Define your state object here
// }
// // Define your render method here
//}
//However, the React docs recommend that you always pass props in order to guarantee compatibility with potential future features
//
//Updating the state
//State is initiated using this.state, however, all subsequent changes to state are made using this.setState. Using this.setState ensures that the components affected by the change in state are re-rendered in the browser.
//
//setState is the API method provided with the library so that the user is able to define and manipulate state over time.
//
//this.state.name = "Updated name" // This is the wrong approach & the updated name will not be rendered into the UI
//
//this.setState({
// name: "Updated name"
//}); // This is the right approach which will render the updated name immediately
//State update is an asynchronous task. You should not rely on their values for calculating the next state. Then, you should manipulate the state in a functional approach
//
//this.setState({
// counter: this.state.counter + 1
//}); // This is a wrong approach
//
//this.setState((state, props) => ({
// counter: state.counter + 1
//})); // This is the right approach
//State updates are merged. When you call setState(), React merges the object you provide into the current state. The merging is shallow which means that, it will replace only those variables you are setting in setState.
//
//setState also has a callback function. When there is a need of doing a certain action depending the on the latest value updated in the state, we can use the callback.
//
//this.setState({
// name: "Update the name"
//}, () => {
// // this is a callback function and you can do the respective actions
//})
//Lifting the state
//To share a state between two components, the most common operation is to move it up to their closest common ancestor. This is called lifting state up. (ie removing the local state from the descendant component and move it into its ancestor instead.)
//
//There should be a single source of truth for any data that changes in a React application. Usually, the state is first added to the component that needs it for rendering. Then, if other components also need it, you can lift it up to their closest common ancestor. Instead of trying to sync the state between different components, you should rely on the top-down data flow.
//
