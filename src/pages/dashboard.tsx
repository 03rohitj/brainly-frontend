
import { useEffect, useState } from 'react';
// import './App.css';
import { CreateContentModal } from '../components/CreateContentModal';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Sidebar } from '../components/ui/Sidebar';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (<div className='flex bg-gray-100'>
      <Sidebar/>
      
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
        <div className='flex gap-4 p-4 flex-wrap'>
          {contents.map(({link, type, title}) => <Card type={type} link={link} title={title}/>
          )}
          
        </div>

      </div>
    </div>
  )
}
