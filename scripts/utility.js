

function getVlueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;

}

function setInterTextById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
    
}
