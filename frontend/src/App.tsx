import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";

export default function CCTVVideoAnalyzer() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <Main />
      <Modal />
    </div>
  );
}
