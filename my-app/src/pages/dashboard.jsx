import React, { useState } from "react";
import SidePanel from "@/components/SidePanel";
import NavBar from "@/components/Navbar";
import JobSearch from "@/components/JobSearch";
import Ebay from "@/components/eBay/Ebay";
import Rubbish from "@/components/Rubbish";
import Chat from "./chat.png";
import Image from "next/image";
import Chatbot from "@/components/Rubbish";

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState("JobSearch");
  const [chatModal, setChatModal] = useState(false);
  

  const panels = {
    JobSearch: <JobSearch />,
    Ebay: <Ebay />,
    Rubbish: <Rubbish />,
  };

  return (
    <div className="flex flex-row relative">
      <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} />
      {/* <NavBar /> */}
      {panels[activePanel]}

      <button
        className="absolute right-16 bottom-16 z-20"
        onClick={() => setChatModal(!chatModal)}
      >
        <Image src={Chat} height={60} width={60} />
      </button>

      {chatModal && (
        // Overlay for Dimmed Background
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
      )}

      <div className={`${chatModal ? "z-30 absolute left-[10%] top-[10%] bg-white border-4  w-[80%] h-[75%] overflow-y-auto rounded-md" : 'hidden'}`}>
        <Chatbot chatModal={chatModal} setChatModal={setChatModal}/>
      </div>
    </div>
  );
};

export default Dashboard;
