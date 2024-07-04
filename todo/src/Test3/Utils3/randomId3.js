function getRandomId3(todos) {
    const limit = 100;
    const existID = todos.map(x => x.id);

    let ID;

    do {
        ID = Math.floor(Math.random() * limit);
    } while (existID.includes(ID));

    return ID;
}

export default getRandomId3;
