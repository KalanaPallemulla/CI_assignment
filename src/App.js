import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Load from "./assets/Load1.gif";
import Star from "./assets/Star2.png";

function App() {
  const [feedback, setFeedback] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [bookName, setBookName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async () => {
    if (keyValue.length > 6) {
      setError("");
      setLoading(true);
      setTimeout(() => {}, 1000);
      const res = await axios.post(" http://127.0.0.1:8081/predict", {
        feedback: keyValue,
      });
      console.log("res", res);
      setFeedback(res.data);
      setLoading(false);
    } else {
      setError("Your feedback should have at least 6 characters");
    }
  };

  const handleNewReview = () => {
    setFeedback("");
    setKeyValue("");
    setBookName("");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200 px-4 md:px-0">
      <div className="bg-white w-[40rem] h-[35rem] rounded-lg ">
        <div className="grid grid-cols-3 py-2">
          <div>
            <div className="flex h-full items-center flex-row space-x-1 px-4">
              <div className="w-3 h-3 rounded-full bg-red-400 flex justify-center items-center hover:brightness-75"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 flex justify-center items-center hover:brightness-75"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 flex justify-center items-center hover:brightness-75"></div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-60 h-5 rounded-md bg-gray-200 hover:brightness-95"></div>
          </div>
          <div></div>
        </div>
        <div className="h-full flex justify-center items-center -mt-20">
          {!loading && feedback.length === 0 && (
            <div>
              <h1 className="font-serif text-4xl font-bold text-blue-500">
                Hi There!
              </h1>
              <h1 className="font-sans text-base font-thin text-gray-400">
                Predict your review rating...
              </h1>
              <div>
                <input
                  className="w-72 border border-gray-200 rounded-lg mt-4 bg-gray-100 text-gray-500 font-serif font-medium placeholder:text-gray-300 p-2 focus:outline-none"
                  placeholder="Book name"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  className="w-72 border border-gray-200 rounded-lg mt-4 bg-gray-100 text-gray-500 font-serif font-medium placeholder:text-gray-300 p-2 focus:outline-none"
                  placeholder="Post your review"
                  value={keyValue}
                  onChange={(e) => setKeyValue(e.target.value)}
                />
              </div>
              <h1 className="font-serif text-red-600 text-xs text-center">
                {error}
              </h1>
              <div className="flex justify-center mt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-400 py-2 px-10 rounded-lg text-gray-100 font-bold font-mono hover:brightness-95"
                >
                  Submit
                </button>
              </div>
            </div>
          )}{" "}
          {feedback && (
            <div className="flex flex-col justify-center items-center mt-8">
              {bookName && (
                <h1 className="text-3xl font-serif bg-violet-500 p-4 rounded-xl text-white mb-2 hover:brightness-90">
                  {bookName}
                </h1>
              )}
              <h1 className="text-5xl font-serif text-blue-500 mb-2">
                You got
              </h1>
              {feedback == 0 && (
                <h1 className="text-red-600 font-serif text-2xl">Score is 0</h1>
              )}
              {feedback == 1 && (
                <div className="flex space-x-1">
                  <img className="h-16 w-16" src={Star} alt="" />
                </div>
              )}
              {feedback == 2 && (
                <div className="flex space-x-1">
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                </div>
              )}
              {feedback == 3 && (
                <div className="flex space-x-1">
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                </div>
              )}
              {feedback == 4 && (
                <div className="flex space-x-1">
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                </div>
              )}
              {feedback == 5 && (
                <div className="flex space-x-1">
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                  <img className="h-16 w-16" src={Star} alt="" />
                </div>
              )}
              <div
                className="mt-4 text-base text-gray-400 font-serif hover:text-blue-400 cursor-pointer"
                onClick={handleNewReview}
              >
                Add a new review
              </div>
            </div>
          )}
          {loading && (
            <div className="h-20 w-60 -mt-20">
              <img src={Load} alt="Loading..." />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
