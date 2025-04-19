
import './App.css';
import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {

  return (<>
    <div className='flex'>
      <Button variant="primary" size="lg" text="ButtonX" startIcon={<PlusIcon size={"lg"} />}  endIcon={<ShareIcon size={"lg"} />} onClick={() => {}} />
      <Button variant="secondary" size="lg" text="ButtonY" startIcon={<PlusIcon size={"lg"} />} endIcon={<ShareIcon size={"lg"} />} onClick={() => {}}/>
      <Button variant="secondary" size="lg" text="ButtonZ"  onClick={() => {}} /> <br/>
    </div>  
    <div className='flex'>
      <Button variant="primary" size="md" text="ButtonX" startIcon={<PlusIcon size={"md"} />} endIcon={<ShareIcon size={"md"} />} onClick={() => {}} />
      <Button variant="secondary" size="md" text="ButtonY" startIcon={<PlusIcon size={"md"} />} endIcon={<ShareIcon size={"md"} />} onClick={() => {}}/>
      <Button variant="secondary" size="md" text="ButtonZ"  onClick={() => {}} />
    </div>
    <div className='flex'>
      <Button variant="primary" size="sm" text="ButtonX" startIcon={<PlusIcon size={"sm"} />} endIcon={<ShareIcon size={"sm"} />} onClick={() => {}} />
      <Button variant="secondary" size="sm" text="ButtonY" startIcon={<PlusIcon size={"sm"} />} endIcon={<ShareIcon size={"sm"} />} onClick={() => {}}/>
      <Button variant="secondary" size="sm" text="ButtonZ"  onClick={() => {}} />
    </div>
    </>
  )
}

export default App;