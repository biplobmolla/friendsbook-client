function PostBox() {
  return (
    <div className=" bg-slate-500 p-4 rounded-lg">
      <div className="flex items-center gap-x-4">
        <input
          type="text"
          placeholder="Write something..."
          className="h-full w-full py-2 px-3 outline-none rounded-full"
        />
        <button className=" px-4 py-2 rounded-lg cursor-pointer text-white font-medium bg-blue-700">
          Post
        </button>
      </div>
    </div>
  );
}

export default PostBox;
