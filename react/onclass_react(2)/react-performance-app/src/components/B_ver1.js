// A와 동일하지만 컴포넌트를 여러개로 나눈 경우

import React from 'react'

const Message = ({ message })=>{
    return <p>{message}</p>
}

const ListItem = ({ post })=>{
    return(
        <li key={post.id}>
            <p>{post.title}</p>
        </li>
    )
}

const List = ({ posts })=>{
    return(
        <ul>
            {posts.map(post =>(
                <ListItem key={post.id} post={post}/>
            ))}
        </ul>
    )
}

export const B = ({message, posts}) => {
  return (
      <div>
          <h1>B Component</h1>
          <Message message={message}/>
          <List posts={posts}/>
      </div>
  )
}
