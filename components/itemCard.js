"use client";
import { toggleCard } from "@/components/singleItem";
export default function ItemCard() {
  return (
    <div className=" inline-block w-44 h-72 bg-slate-50 rounded-2xl p-0 m-6">
      <div
        className=" w-44 h-48 bg-slate-400 rounded-t-2xl"
        onMouseOver={toggleCard}
        onMouseOut={toggleCard}
      ></div>
      <div className=" grid-cols-2 p-1 h-fit">
        <span className=" font-bold block col-span-2">NAME</span>
        <span className=" text-xs font-light block col-span-2">
          DISCRIPTION about the product in general
        </span>
        <span className="">PRICE</span>
      </div>
    </div>
  );
}
