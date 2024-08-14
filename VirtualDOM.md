### How react actually work 
- First the jsx get converted to many React.createElement function calls
- Each of those functions return an object

  ```
  const App = ()=>{
        return (
                <div>
                  App componnet         
                </div>
  )
  }

/ /On consoling  console.log(App()) componenet we get a js object like
  $$typof : Symbol(react.element)
  key : null
  props : {children : "App component"}
  ref : null
  type : "div"
  ```

- A more completed components implies to longer object with children and nesting

Reconciliation
- All react does is create a tree of elements
- This is very fast , becaause React elements are just plain js objects 
- This tree of elements is kept in memmory it is calles virtual dom
-The next thing to do is to sync the virtaul DOM with the real DOM
- During the initial render , there is no other way thatn to insert the full tree
    
 What if the tree changes the elements ?
- React quickly regenerates the new tree of elements and we now have two trees
- Now it has to once again sync the virtual dom to the real dom
- React can't just render whole tree , it will be very inefficient
- React compares the tress and finds the smalled number of operation to transfome one tree into other

This is done by the Diffing algorithm
- Normally n elements ===> n^3 operations
- 1000 elements ==> 1000000000 operations
- React manages to do n elements ==> less than n operations

This is possible due to following assumptions
- Two elements of different types wlll produce different trees
- When we have a list of child elements which oftern changes we should provide an unique "key" as a prop


Basic diffing algorithm opreations
- 
