import { Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard';

export default function MediaData() {
    const [posts,setPosts]= useState([]);
    useEffect(()=>{
        fetch('post.json')
        .then(res=>res.json())
        .then(data=> setPosts(data))
    },[])
   
  return (
    <Grid templateColumns='repeat(2, 1fr)'>
        {
            posts.map(post=><MediaCard
             key={post.id}
             post={post}
             >

            </MediaCard>)
        }
    </Grid>
  )
}
