import React, {useEffect, useState} from 'react'
import service from "../appwrite/config";
import {Container, Postcard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                
            }
        })
    }, [])
  
    if (posts.length ===0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-7'>
        <Container>
            <div className='flex flex-wrap '>
                {posts.map((post) => (
                    <div key={post.$id} className='p-3 w-1/4'>
                        <Postcard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
    )
                    
}

export default Home