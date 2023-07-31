import ItemCard from "@/components/itemCard";
import SearchBar from "@/components/searchBar";
import SingleItem from "@/components/singleItem";

export default function Home() {
  return (
    <>
      <header className="bg-slate-500 w-screen h-10 flex justify-between">
        <span className="text-3xl m-1">LOGO</span>
        <span className="text-lg m-1">what ever else</span>
      </header>
      <div className="flex justify-items-stretch w-screen">
        <div className="bg-blue-100 w-full">
          <div className="flex justify-between gap-2 p-2">
            <SearchBar />
            <div className="w-8 h-8 rounded-full bg-slate-400"></div>
          </div>
          <div>
            <SingleItem />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
        <aside className=" bg-yellow-200 w-80">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </aside>
      </div>
    </>
  );
}
