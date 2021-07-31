import React from 'react'
function SinglePost({data}:any):JSX.Element {

const {content}=data

    return (
        <div className="">
         
           <div dangerouslySetInnerHTML={{__html:content}} className=""></div>
        </div>
    )
}

export default SinglePost

export async function getServerSideProps(context) {
    const {params}=context
    const url=`https://www.googleapis.com/blogger/v3/blogs/7075608721797931886/posts/${params.id}?key=`
    const res = await fetch(`${url}${process.env.GOOGLE_API_KEY}`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          data
      }, // will be passed to the page component as props
    }
  }
  