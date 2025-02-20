import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="h-[90vh] w-[100vw] flex  flex-col justify-center items-center p-5 gap-9">
      {/* row -1 */}
      <div className=" grid grid-cols-2 gap-8">
        {/* Blog -1 */}
        <div className="flex gap-5 flex-col p-6">
          <p className=" text-xl font-medium ">
            Building a blog with <br /> Jekyll, Docker and Gitlab
          </p>
          <p className="text-xs">May 22, 2015 - 2 minute read</p>
          <p className="text-xs">
            Developing a Jekyll blog with Docker deployed to GitLab pages
          </p>
          <NavLink className="text-blue-800">Read Articles</NavLink>
        </div>
        {/* Blog-2 */}
        <div className="flex gap-5 flex-col p-6">
          <p className=" text-xl font-medium">
            Business - A PHP library for <br />
            business date calculations
          </p>
          <p className="text-xs">May 22, 2015 - 2 minute read</p>
          <p className="text-xs">
            Discovering Business. a PHP library lo ease dealing wilh business{" "}
            <br /> dale calculations
          </p>
          <NavLink className="text-blue-800">Read Articles</NavLink>
        </div>
      </div>
      {/* Row - 2 */}
      <div className=" grid grid-cols-2 gap-8 ">
        {/* Blog - 3 */}
        <div className="flex flex-col gap-5 p-6 ">
          <p className=" text-xl font-medium">
            Data tables with Symfony,
            <br /> Hateoas and AngularJS
          </p>
          <p className="text-xs">May 22, 2015 - 2 minute read</p>
          <p className="text-xs">
            Building a sin1ple Angular table consun1ing a Haleoas REST /\Pl
          </p>
          <NavLink className="text-blue-800">Read Articles</NavLink>
        </div>
        {/* Blog - 4 */}
        <div className="flex gap-5 flex-col p-6">
          <p className=" text-xl font-medium">
            Swap - A PHP exchange rates <br /> library
          </p>
          <p className="text-xs">May 22, 2015 - 2 minute read</p>
          <p className="text-xs">
            Discovering Swap, an exchange rates library for PHP
          </p>
          <NavLink className="text-blue-800">Read Articles</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
