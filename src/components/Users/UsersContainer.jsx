import {connect} from "react-redux";
import {
    follow, followingInProgress, followUser, requestUsers, onPageChanged,
    turnBackPage, turnUpPage,
    unfollow, unfollowUser
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    fake,
    getCurrentPage, getFollowingIsInProgress, getIsFetching,
    getPageSize, getStartPage,
    getTotalUsersCount, getUsers,
    getUsersCount,
} from "./users-reselect/users-reselect";


class usersContainer extends React.Component {

    componentDidMount() {this.props.getUsers(this.props.currentPage, this.props.usersCount);}
        // this.props.setToggleIsFetching(true)
        // usersAPI.getUsers(this.props.usersCount, this.props.currentPage).then(responce => {
        //     this.props.setToggleIsFetching(false);
        //     this.props.setUsers(responce.data.items);
        //     this.props.setTotalUsersCount(responce.data.totalCount);
        // });
        // }

        // this.props.onPageChanged(this.props.usersCount, this.props.currentPage, this.props.users);
        // onPageChanged = (usersCount, currentPage) => {
        // if (!this.props.users) {
        // this.props.setToggleIsFetching(true);
        // usersAPI.getUsers(usersCount, currentPage).then(responce => {
        //     this.props.setToggleIsFetching(false);
        //     this.props.setUsers(responce.data.items);
        //     this.props.setTotalUsersCount(responce.data.totalCount);
        // });
        // this.props.setCurrentPage(currentPage)
        // }

    onPageChanged = this.props.onPageChanged(this.props.currentPage, this.props.usersCount, this.props.users);
    followUser = (id) => {this.props.followUser(id)};
    //     usersAPI.follow(id).then(response => {
    //         this.props.followingInProgress(true, id)
    //         if (response.data.resultCode === 0) {
    //             this.props.follow(id)
    //         }
    //         this.props.followingInProgress(false, id)
    //     })
    // }
    unfollowUser = (id) => {
        this.props.unfollowUser(id);
    }
//     usersAPI.unfollow(id).then(response => {
//     this.props.followingInProgress(true, id);
//     if (response.data.resultCode === 0) {
//     this.props.unfollow(id);
// }
// this.props.followingInProgress(false, id);
// })
    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
                totalUsersCount={this.props.totalUsersCount}
                usersCount={this.props.usersCount}
                onPageChanged={this.props.onPageChanged}
                currentPage={this.props.currentPage}
                usersList={this.props.users}
                followUser={this.followUser}
                unfollowUser={this.unfollowUser}
                startPage={this.props.startPage}
                turnUpPage={this.props.turnUpPage}
                turnBackPage={this.props.turnBackPage}
                followingIsInProgress={this.props.followingIsInProgress}
                followingInProgress={this.props.followingInProgress}
            />}
        </>
    }
}

let mapStateToProps = (state) => {

    console.log('MapStateToPros');
    return {
        users: getUsers(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        isFetching: getIsFetching(state),
        startPage: getStartPage(state),
        followingIsInProgress: getFollowingIsInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             debugger
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setToggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow, unfollow, turnUpPage,
        turnBackPage, followingInProgress,
        getUsers: requestUsers, onPageChanged, followUser,
        unfollowUser,
    })
(usersContainer)