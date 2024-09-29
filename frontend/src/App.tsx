import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Modal from "./components/Modal";
import ErrorToast from "./components/ErrorToast";
import { useContentProvider } from "./hooks/useContextProvider";

export default function App() {
  const { showToast, setShowToast, errorMessage } = useContentProvider();

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <Main />
      <Modal />
      {showToast && (
        <ErrorToast
          message={errorMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
