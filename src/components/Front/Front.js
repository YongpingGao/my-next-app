const Front = () => (
  <div
    className="h-screen flex bg-cover mx-auto  p-6 text-gray-200 relative"
    style={{ backgroundImage: `url(./assets/bg.jpg)`, fontFamily: "Roboto" }}
  >
    <div className="absolute inset-0 bg-black opacity-25" />
    <div className="z-10 flex flex-col font-light items-center uppercase tracking-widest leading-normal pb-2 pt-2 m-auto">
      <div className="text-4xl pb-3">Yongping Gao</div>
      <div className="text-1xl">Full stack software engineer </div>
    </div>
  </div>
);

export default Front;
