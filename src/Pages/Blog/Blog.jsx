import React, { useEffect, useState } from "react";

const Blog = () => {
  const [data, setqu] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/tanvirgithub21/assainment-11-data/main/questionData.json"
    )
      .then((res) => res.json())
      .then((data) => setqu(data));
  }, []);
  console.log(data);
  return (
    <div>
      <h3 className="text-3xl mb-24 text-center">Questions Answer</h3>

      <div>
        {data.map((data) => (
          <div className="mb-10">
            <p className="text-2xl">{data?.question}</p>
            <p className="text-xl">{data?.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
