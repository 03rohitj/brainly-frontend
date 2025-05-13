
import { useEffect, useState } from 'react';
// import './App.css';
import { CreateContentModal } from '../components/modals/CreateContentModal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/ui/Sidebar';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { VerifyDeleteModal } from '../components/modals/VerifyDeleteModal';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);  //For Add Content

  //To do later, confirm popup for deletion
  const [verifyDeleteModalOpen, setVerifyDeleteModalOpen] = useState(false); //Used for verify delete modal

  const [showData, setShowData] = useState("all");    //which type of data to show? all, youtube or twitter
  console.log("====Dash ShowData : "+showData);
  const {contents, refresh, setContents} = useContent(showData);
  const [ytData, setYTData] = useState(false);
  const [twitterData, setTwitterData] = useState(false);

  //Load the contents when record is added or deleted
  useEffect(() => {
    refresh();
    const twttr = (window as any).twttr;
    if (twttr) {
      twttr.widgets.load();
    }
  }, [modalOpen, showData]);


  return (<div className='flex bg-gray-100'>
      
      <Sidebar setShowData={setShowData} setYTData={setYTData} setTwitterData={setTwitterData} allData={contents}/>
      
      {/* Main Div */}
      <div className='ml-72 w-screen min-h-screen '>
        <CreateContentModal open={modalOpen} onClose={() => {
          setModalOpen(false);
        }}/>
        

      <div className='flex justify-end gap-4 p-2'>
        <Button variant="secondary" size="md" text="Share Brain" startIcon={<ShareIcon size={"md"} />} onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            "share" : true
          }, {
            headers : {
              "Authorization" : localStorage.getItem("token")
            }
          });

          //Todo : this is a hardcoded URL, update it.
          const shareURL = `http://localhost:5173/share/${response.data.hash}`;
          alert("Shared Brain : "+ shareURL);
        }}/>
          
        <Button variant="primary" size="md" text="Add Content" startIcon={<PlusIcon size={"md"} />} onClick={() => {
          setModalOpen(true)
          }} />
      </div>
        
      {/* Main Content */}
      <div className='flex gap-4 p-4 flex-wrap'> {/* Pass Content ID here, so that they could be deleted */}
        {contents.map( ({link, type, title, _id}) => <Card key={_id} type={type} link={link} title={title} id={_id} reload={refresh} />
        )}
        
      </div>
        

        {/* ToDO VerifyDeleteModal is still pending */}
      <VerifyDeleteModal open={verifyDeleteModalOpen} onClose={() => {
        setVerifyDeleteModalOpen(false);
      } } />

      </div>
    </div>
  )
}
