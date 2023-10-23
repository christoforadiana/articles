import React, { useState } from "react";
import { Footer, Header, PostCard, PostModal } from "../../components";

const PostingPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("modal");
    console.log(showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <span className="flex justify-center text-dark text-4xl lg:text-5xl gap-2 font-bold">
        POSTING <p className="text-[#027fb5]"> PAGE</p>
      </span>
      <div className="container flex flex-wrap justify-end mt-10">
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={openModal}
        >
          Add Post
        </button>
      </div>
      <PostCard />
      <Footer />
      {showModal && <PostModal closeModal={closeModal} />}
    </>
  );
};

export default PostingPage;
