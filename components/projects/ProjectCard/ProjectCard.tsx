import React from "react";
//fetch project videos from YouTube
function ProjectCard({ items }: any): JSX.Element {
  return (
    <React.Fragment>
      <div className=" flex items-center justify-center ">
        <h1 className="text-2xl bg-c1 font-semibold py-2 px-5 rounded-md text-white">
          Projects
        </h1>
      </div>
      <div className="grid xl:grid-cols-3 mb-10    gap-x-3 gap-y-6 px-3 mt-10 justify-items-center">
        {items.map(({ id, snippet = {} }: any) => {
          const { title, thumbnails = {}, resourceId = {} } = snippet;
          const { standard } = thumbnails;
          return (
            <div
              key={id}
              className="p-2 bg-white  hover:shadow-xl shadow-md rounded-md "
            >
              <a
                href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className=""
                  height={standard.height}
                  width={standard.width}
                  src={standard.url}
                  alt=""
                />
                <h1 className="text-xl py-2 text-gray-900 ">{title}</h1>
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ProjectCard;
