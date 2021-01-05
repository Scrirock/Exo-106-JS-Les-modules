export function createDiv(text){
    let div = document.createElement("div");
    div.innerHTML = text;

    return div;
}

export function createInput(type){
    let input = document.createElement("input");
    input.type = type;

    return input;
}

export function createLabel(text){
    let label = document.createElement("label");
    label.innerHTML = text;

    return label;
}