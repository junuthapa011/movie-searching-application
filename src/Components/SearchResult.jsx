import React from "react";

export function Result(props) {
  const boxes = props.movies.map((item) => {
    return (
      <Box
        key={item.id}
        image={item.poster_path}
        title={item.original_title}
        rating={item.vote_average}
      />
    );
  });
  return <div className="w-[3/4] pr-2 grid md:grid-cols-3 gap-5 col-span-2">{boxes}</div>;
}
const Box = ({ image, title, rating }) => {
  const imgpath = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="shadow min-h-[200px] mt-3 pb-1">
      <img src={imgpath + image} alt="" className="w-full" />
      <div className="flex justify-between px-2 items-center">
        <span className="text-2xl">{title}</span>
        <span className="text-xl text-yellow-600 font-bold">{rating}</span>
      </div>
    </div>
  );
};
