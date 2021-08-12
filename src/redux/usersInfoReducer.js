import Aleksander from "../assets/Oleksandr.jpg";
import Oksana from "../assets/Oksana.jpg";
import Svyatoslav from "../assets/Svyatoslav.jpeg";
import Rock from "../assets/Rock.jpg";
import Elon from "../assets/Elon.jpg";
import Zlata from "../assets/Zlata.jpg";

let initialState = {
    dialogsItem: [
        {name: 'Aleksander', id: 0, userImage: Aleksander},
        {name: 'Oksana', id: 1, userImage: Oksana},
        {name: 'Svyatoslav', id: 2, userImage: Svyatoslav},
        {name: 'Vsevolod', id: 3, userImage: Rock},
        {name: 'Velimir', id: 4, userImage: Elon},
        {name: 'Zlata', id: 5, userImage: Zlata},
    ],
}

export let usersInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
