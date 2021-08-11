import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://media.npr.org/assets/img/2021/04/27/prancer_wide-db59609b5bd96c9e56e4dfe32d198461197880c2.jpg?s=1400'/>
            <div>
                {props.postMessage}
            </div>
            <div>
                <div>
                    {props.likesCount} likes!
                </div>
                <button>like</button>
            </div>
        </div>
    )

}
