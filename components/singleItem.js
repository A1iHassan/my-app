let Hover = false;
export function toggleCard() {
  Hover = !Hover;
  console.log("working", Hover);
}

export default function SingleItem() {
  Hover ? (
    <div className=" w-1/2 h-3/4 absolute bg-slate-100 left-28 rounded-xl"></div>
  ) : (
    <></>
  );
}
