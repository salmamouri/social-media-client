import { Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard';

export default function MediaData() {
    const [posts,setPosts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/posts')
        .then(res=>res.json())
        .then(data=> {
          console.log("Data", data);
          setPosts(data)
        })
    },[])
   
  return (
    <Grid py={4} gap={6} templateColumns='repeat(2, 1fr)'>
        {
            posts.map(post=><MediaCard
             key={post._id}
             post={post}
             >

            </MediaCard>)
        }
    </Grid>
  )
}
