import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostDetails from './PostDetails'
import PostsList from './PostsList'

export default function PostComments(props) {
    return (
        <div>
             <Switch>
             <Route path='/dashboard/posts' component={PostsList} exact/>
             <Route path='/dashboard/posts/details' component={PostDetails}/>
             </Switch>
        </div>
    )
}
