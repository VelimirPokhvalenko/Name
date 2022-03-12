import userImage from '../assets/defaultUserImage.jpg';
import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../components/utils/objectHelper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET-USER';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TURN_UP_PAGE = 'TURN-UP-PAGE';
const TURN_BACK_PAGE = 'TURN-BACK-PAGE';
const FOLLOWING_IS_IN_PROGRESS = 'FOLLOWING-IS-IN-PROGRESS';


let initialState = {
    img: userImage,
    users: [],
    totalUsersCount: 10,
    currentPage: 1,
    usersCount: 100,
    isFetching: false,
    startPage: 1,
    followingIsInProgress: [],
}
export let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}),
            }
        case UNFOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USER: {
            return {
                ...state,
                users: action.users,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TURN_UP_PAGE: {
            return {
                ...state,
                startPage: action.startPage + 10,
            }
        }
        case TURN_BACK_PAGE: {
            return {
                ...state,
                startPage: action.startPage - 10,
            }
        }
        case FOLLOWING_IS_IN_PROGRESS: {
            return {
                ...state,
                followingIsInProgress: action.isFetching ?
                    [...state.followingIsInProgress, +action.userId] :
                    state.followingIsInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USER, users: users});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const turnUpPage = (startPage) => ({type: TURN_UP_PAGE, startPage});
export const turnBackPage = (startPage) => ({type: TURN_BACK_PAGE, startPage});
export const followingInProgress = (isFetching, userId) => ({type: FOLLOWING_IS_IN_PROGRESS, isFetching, userId});

export const requestUsers = (currentPage, usersCount) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    const responce = await usersAPI.getUsers(currentPage, usersCount);
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(responce.data.items));
    dispatch(setTotalUsersCount(responce.data.totalCount));
}
export const onPageChanged = (currentPage, usersCount = 100) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    const responce = await usersAPI.getUsers(currentPage, usersCount);
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(responce.data.items));
    dispatch(setTotalUsersCount(responce.data.totalCount));
    dispatch(setCurrentPage(currentPage));
}

// export const followUser = (id) => async (dispatch) => {
//     let response = await usersAPI.follow(id);
//     dispatch(followingInProgress(true, id));
//     if (response.data.resultCode === 0) {
//         dispatch(follow(id));
//     }
//     dispatch(followingInProgress(false, id));
// }


export const followUser = (id) => followUnfollowFlow(id, usersAPI.follow, follow);
export const unfollowUser = (id) => followUnfollowFlow(id, usersAPI.unfollow, unfollow);


const followUnfollowFlow = (id, ajaxFunction, ReducerFunction) => async (dispatch) => {
    let response = await ajaxFunction(id)
    dispatch(followingInProgress(true, id));
    if (response.data.resultCode === 0) {
        dispatch(ReducerFunction(id));
    }
    dispatch(followingInProgress(false, id));
}