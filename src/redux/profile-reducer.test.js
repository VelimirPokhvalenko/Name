import React from "react";
import {addPost, deletePost, profileReducer} from "./profile-reducer";
//
// it('posts length should increment', () => {
//         let action = addPost('meow');
//         let State = {
//             postInfo: [
//                 {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
//                 {postMessage: 'Everything is all right!', id: 1, likesCount: 500},
//                 {postMessage: 'Have you studied all the hooks?', id: 1, likesCount: 5000},
//                 {postMessage: 'Not yet, but i\'ll get it!', id: 1, likesCount: 8888888},
//                 {postMessage: 'Good luck, SUL.', id: 1, likesCount: 777},
//             ],
//         };
//         let NewState = profileReducer(State, action);
//
//         expect(NewState.postInfo.length).toBe(6);
//     }
// )
//
// it('the message should be right', () => {
//     let action = addPost('meow');
//     let state = {
//         postInfo: [
//             {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
//             {postMessage: 'Everything is all right!', id: 1, likesCount: 500},
//             {postMessage: 'Have you studied all the hooks?', id: 1, likesCount: 5000},
//             {postMessage: 'Not yet, but i\'ll get it!', id: 1, likesCount: 8888888},
//             {postMessage: 'Good luck, SUL.', id: 1, likesCount: 777},
//         ]
//     }
//     let newState = profileReducer(state, action);
//     expect(newState.postInfo[5].postMessage).toBe('meow');
// })

it('amount of posts should be less', () => {
    let action = deletePost(2);
    let state = {
        postInfo: [
            {postMessage: 'Hello how is your React?', id: 1, likesCount: 50},
            {postMessage: 'Everything is all right!', id: 2, likesCount: 500},
            {postMessage: 'Have you studied all the hooks?', id: 3, likesCount: 5000},
            {postMessage: 'Not yet, but i\'ll get it!', id: 4, likesCount: 8888888},
            {postMessage: 'Good luck, SUL.', id: 5, likesCount: 777},
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.postInfo.length).toBe(4);
})