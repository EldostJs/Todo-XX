import getRandomId from "../../Test1/Utils/randomId";

function randomId(todos) {
    const limit = 100;
    const existID = todos.map(x => x.id)

    let ID;

    do {
        ID = Math.floor(Math.random() * limit)
    } while (existID.includes(ID));

    return ID
}

export default getRandomId