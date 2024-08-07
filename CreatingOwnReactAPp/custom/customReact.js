
function customRender (reactElement , container)
{
    let tag = document.createElement(reactElement.type)
    tag.innerText = reactElement.children 
    
    for ( let prop in reactElement.props){
       
        tag.setAttribute(prop , reactElement.props[prop])
    }

    container.append(tag)
}


const reactElement = {
    type : "a" ,
    props : {
        href : "https://google.com" , 
        target : "_blank"
    }, 
    children : "Click me to visit google "
}

const mainContainer = document.querySelector("#root")
customRender(reactElement , mainContainer)



