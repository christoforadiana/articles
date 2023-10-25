import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, postSelectors } from "../../features/postSlice";
import { AddPostModal, Footer, Header } from "../../components";

const PostingPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectors.selectAll);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <span className="flex justify-center text-dark text-4xl lg:text-5xl gap-2 font-bold">
        POSTING <p className="text-[#027fb5]"> PAGE</p>
      </span>
      <AddPostModal />
      <div className="container mx-auto grid grid-cols-4 justify-center mt-10">
        {posts.map((post) => (
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-white border border-gray-200 rounded-lg shadow p-8 flex-col">
              <div className="p-2">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.content}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PostingPage;
