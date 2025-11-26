export default function Page() {
  return (
    <>
      <div className="h-full w-full  p-8">
        <div className="h-screen w-full rounded-3xl bg-radial from-zinc-50 to-blue-50">
          <div className="w-full h-full">
            <div className="hair bg-red-500 w-1/4 h-full rotate-90 absolute inset-0 z-1" />
            <div className="head bg-red-500 w-full h-full absolute inset-0   z-2" />
          </div>
        </div>
      </div>
    </>
  );
}
