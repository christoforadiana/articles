import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, postSelectors } from "../../features/postSlice";
import { Footer, Header } from "../../components";

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
      <div className="container mx-auto p-3">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          class="float-right block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          // onClick={openModal}
        >
          Add Post
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-4 justify-center mt-10">
        {posts.map((post) => (
          <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-dark dark:text-white text-lg font-medium">
                  {post.title}
                </h2>
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <p className="leading-relaxed text-base text-dark dark:text-gray-300">
                  {post.content}
                </p>
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
