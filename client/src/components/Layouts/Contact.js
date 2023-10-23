import React from 'react'

const Contact = () => {
  return (
    <section className="my-5">
      <h2>Contact Me</h2>
      <div className="flex-row justify-center my-auto">
        {contactLinks.map((link) => (
          <div className=" mx-4 my-3" key={link.name}>
            <a href={link.link} className="ml-2 my-1 px-2 py-1 text-dark icons">
              <i className={link.icon}></i> : {link.text}
            </a>
          </div>
        ))}
      </div>
      {emailSent ? (
        <>
          <div className="flex-row my-3 justify-center">
            <div className="col-12 col-md-8 my-5 text-center">
              <p>
                Thanks, your form has been submitted. I look forward to
                connecting soon!
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="btn my-5 w-25"
              >
                Back to Contact Form
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-row my-3 justify-center">
          <form className="col-12 col-md-8" onSubmit={handleSubmit}>
            {errorMessage && (
              <div>
                <p className="text-tertiary">{errorMessage}</p>
              </div>
            )}
            <div className="my-1">
              <label className="form-label" htmlFor="name">
                Name:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div className="my-1">
              <label className="form-label" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="form-input"
                type="text"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div className="my-1">
              <label className="form-label" htmlFor="message">
                Message:{" "}
              </label>
              <textarea
                className="form-textarea"
                name="message"
                rows="8"
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            <button className="btn my-1" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default Contact