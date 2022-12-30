import { Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard';

function SortedMedia() {
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/posts')
        .then(res=>res.json())
        .then(data=> {
          console.log("Data", data);
          setPosts(data)
        })
    },[])

    let sortedPosts = posts.sort((p1, p2) => (p1.likes < p2.price) ? 1 : (p1.likes > p2.likes) ? -1 : 0)

    console.log("sorted posts: ", sortedPosts)
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
        {
            sortedPosts.map(post=><MediaCard
             key={post._id}
             post={post}
             >

            </MediaCard>)
        }
    </Grid>
  )
}

export default SortedMedia