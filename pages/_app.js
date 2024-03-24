import SideNavBAr from "@/components/SideNavBAr";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { ShowToastContext } from "@/context/ShowToastContext";
import CreateFolderModal from "@/components/Folder/CreateFolderModal";
import Toast from "@/components/Toast";
import { useState } from "react";
import { ParentFolderIdContext } from "@/context/ParentFolderIdContext";
import Storage from "../components/Storage/Storage";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [showToastMsg,setShowToastMsg]=useState();
  const [parentFolderId,setParentFolderId]=useState();
  return (
    <SessionProvider session={session}>
      <ParentFolderIdContext.Provider value={{parentFolderId,setParentFolderId}}>
      <ShowToastContext.Provider value={{showToastMsg ,setShowToastMsg}}>
      <div className="flex">
        <SideNavBAr />
        <div className="grid grid-cols-1 bg-gray-200
        md:grid-cols-3 w-full "
        >
          <div className="col-span-2 ">
            <Component {...pageProps} />
          </div>
          <div className=" text-black
         order-first md:order-last"
          >
           <Storage/>
          </div>
        </div>
      
      </div>
      {showToastMsg?<Toast msg={showToastMsg} />:null}
      </ShowToastContext.Provider>
      </ParentFolderIdContext.Provider>
    </SessionProvider>
  );
}
