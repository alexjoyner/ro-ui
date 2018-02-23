import React from 'react';
import './vote-cell.sass';
import {Button} from "../../atoms/buttons/buttons";
export const VoteCell = ({ post }) => {
    return (
        <li className="action-bar-item vote-cell">
            <Button className="upvote-btn" success={true}>
                <i className="fa fa-check" />
                <span className={'up-vote-text-post-type-' + post.post_type_id}/>
                <span className="score">{(post.pro_ups + post.con_ups) - post.dwns}</span>
            </Button>
            <Button className="downvote-btn" danger={false}>
                <i className="fa fa-check"/>
                <span className={'down-vote-text-post-type-' + post.post_type_id}/>
            </Button>
        </li>
    );
};