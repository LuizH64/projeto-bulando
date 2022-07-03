const removeFormatation = string => {
    string = string.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
    string = string.toLowerCase();
    string = string.trim();
    string = string.replace(' ', '');
    return string;
}

const nameIsInList = (list, name) => {
    return list.some(element => removeFormatation(element.name) === removeFormatation(name));
}

export {
    nameIsInList,
    removeFormatation
}