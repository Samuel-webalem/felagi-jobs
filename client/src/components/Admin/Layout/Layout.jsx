import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className="flex w-full items-start justify-start bg-gray-100">
      <div className="flex-grow-[1] h-screen sticky left-0 top-0">
        <Sidebar />
      </div>
      <div className="flex-grow-[7]">{props.children}</div>
    </div>
  );
};

export default Layout;
