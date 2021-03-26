import React from 'react';
//fetch project videos from YouTube
function Projects({items}:any):JSX.Element {

    return (
      <React.Fragment>
        <div className=" flex items-center justify-center">
        <h1 className="text-2xl font-semibold py-2 px-5 rounded-md text-white bg-green-500">Projects</h1>
        </div>
      <div className="grid xl:grid-cols-3 gap-x-3 gap-y-6 px-3 mt-10 justify-items-center">
         {items.map(({id,snippet={}}:any)=>{
        const {title,thumbnails={},resourceId={}}=snippet
        const {standard}=thumbnails
        return(
          <div key={id} className="">
            <img className="" height={standard.height} width={standard.width} src={standard.url} alt=""/>
              <h1 className="text-xl">{title}</h1>
          </div>
        )
      })}

      </div>
      </React.Fragment>
    )
}

 
export default Projects

