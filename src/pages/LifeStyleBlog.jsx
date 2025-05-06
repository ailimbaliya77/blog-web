import React from 'react'
import BlogPost from '../components/BlogPost'
import img1 from '../assets/balanmcing.png'
import img2 from '../assets/self care.jpg'

function LifeStyleBlog() {

    const LifeStylePosts = [
        {
                id: 1,
                title: "Home Workouts: Staying Fit Without a Gym",
                excerpt: "Starting your fitness journey can be overwhelming. Here are some tips to start doing workouts at your Home",
                image: {img1},
                date: "april 25, 2025",
                author: "alex johnson",
                category: "Fitness"
            },
            {
                id: 2,
                title: "Beauty routines for different skin types",
                excerpt: "Discover what suits on your skin according to your skin types",
                image: {img2},
                date: "april 22, 2025",
                author: "Emma whilson",
                category: "Beauty & Fashion"
            },
    ]

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">LifeStyle blog</h1>
        <p className="text-lg text-gray-600">Discover tips, workouts, and advice to help you achieve your fitness goals and maintain a healthy lifestyle.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LifeStylePosts.map(post => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default LifeStyleBlog
