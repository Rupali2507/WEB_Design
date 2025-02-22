import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className=" w-full pt-30 flex gap-10   flex-col">
      {/* Heading */}
      <NavLink to="/blog">
        <div className="flex  justify-center text-xl text-blue-900  ">BLOG</div>
      </NavLink>
      <div className="flex flex-col sm:flex-row w-full items-center  ">
        {/*Blog -1 */}
        <div className="md:w-1/2 bg-blue-700  text-white flex  justify-end p-10 ">
          <div className=" flex w-full lg:w-1/2 flex-col justify-end gap-6">
            <p className=" text-xl font-medium ">
              Building a blog with <br /> Jekyll, Docker and Gitlab
            </p>
            <p className="text-xs">May 22, 2015 - 2 minute read</p>
            <p className="text-xs">
              Developing a Jekyll blog with Docker deployed to GitLab pages
            </p>
            <NavLink className="text-blue-800">Read Articles</NavLink>
          </div>
        </div>
        {/*Blog -2 */}
        <div className="md:w-1/2 border border-black sm:border-0  flex  justify-end sm:justify-start p-10 ">
          <div className=" flex w-full lg:w-1/2 flex-col justify-end gap-6">
            <p className=" text-xl font-medium ">
              Building a blog with <br /> Jekyll, Docker and Gitlab
            </p>
            <p className="text-xs">May 22, 2015 - 2 minute read</p>
            <p className="text-xs">
              Developing a Jekyll blog with Docker deployed to GitLab pages
            </p>
            <NavLink className="text-blue-800">Read Articles</NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row w-full items-center ">
        {/*Blog -1 */}
        <div className="md:w-1/2  flex  justify-end p-10 ">
          <div className=" flex w-full lg:w-1/2 flex-col justify-end gap-6">
            <p className=" text-xl font-medium ">
              Building a blog with <br /> Jekyll, Docker and Gitlab
            </p>
            <p className="text-xs">May 22, 2015 - 2 minute read</p>
            <p className="text-xs">
              Developing a Jekyll blog with Docker deployed to GitLab pages
            </p>
            <NavLink className="text-blue-800">Read Articles</NavLink>
          </div>
        </div>
        {/* Blog -2 */}
        <div className="md:w-1/2  flex  justify-end sm:justify-start  p-10 bg-black text-white">
          <div className=" flex w-full lg:w-1/2 flex-col justify-end gap-6 ">
            <p className=" text-xl font-medium ">
              Building a blog with <br /> Jekyll, Docker and Gitlab
            </p>
            <p className="text-xs">May 22, 2015 - 2 minute read</p>
            <p className="text-xs">
              Developing a Jekyll blog with Docker deployed to GitLab pages
            </p>
            <NavLink className="text-blue-800">Read Articles</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
