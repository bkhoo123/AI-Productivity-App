import React, {useState} from 'react'
import SidePanel from '@/components/SidePanel'
import NavBar from '@/components/Navbar'
import JobSearch from '@/components/JobSearch'
import Ebay from '@/components/eBay/Ebay'
import Rubbish from '@/components/Rubbish'

const Dashboard = () => {
    const [activePanel, setActivePanel] = useState('JobSearch')

    const panels = {
      "JobSearch": <JobSearch />,
      "Ebay": <Ebay />,
      "Rubbish": <Rubbish />
    }

    return (
      <div className="flex flex-row">
          <SidePanel activePanel={activePanel} setActivePanel={setActivePanel} />
          {/* <NavBar /> */}
          {panels[activePanel]}
      </div>
    )
}

export default Dashboard