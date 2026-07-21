const page1 = document.getElementById('root')

const obj = {
    type : 'a',
    props :{
        href : "https://www.google.com/"
        ,target : "_blank" 
    },
    childern : "Click me to visit Google"
}


function customRendor(reactElement , container ){
    const box = document.createElement(reactElement.type)
    box.innerHTML = reactElement.childern
    
    // box.setAttribute('href' , reactElement.props.href);
    // box.setAttribute('target' , reactElement.props.target);
    /// we can have mulltiple attributes so we can use for loop here 
    for (const prop in reactElement.props) {

    box.setAttribute(prop , reactElement.props[prop]);
        
    }
    container.appendChild(box)
}
customRendor(obj , page1)