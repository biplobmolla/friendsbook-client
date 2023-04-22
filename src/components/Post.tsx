import { RxAvatar } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
function Post() {
  return (
    <div className=" bg-slate-500 rounded-lg my-2 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <RxAvatar className=" text-3xl" />
          <h2 className="mb-1">Mohammad Tamim Ahmed</h2>
        </div>
        <BsThreeDots className=" cursor-pointer text-3xl p-1 rounded-full" />
      </div>
      <p className=" text-sm p-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque error
        eligendi optio ab illum modi aperiam nesciunt mollitia fugiat, corporis
        consectetur nostrum inventore soluta repellat accusamus recusandae fuga
        cum necessitatibus iste cupiditate voluptates atque quo quis expedita?
        Facere, praesentium omnis!
      </p>
    </div>
  );
}

export default Post;
