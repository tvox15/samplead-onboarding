import React from 'react'
import Button from '../components/Button/Button'
import CampaignCard from '../components/CampaignCard'
import { campaigns } from '../data/campaigns'

export default function Dashboard() {
  return (
       <div className="content-wrapper">
        <div className="left-box">

          <div className="top-wrapper">
            <div className="greeting-box">
              <div className="greeting-title">Hi Noga!</div>
              <div className="greeting-message">Let's start tailoring messages to your target audience.</div>
            </div>
            <div className="new-project-box">
              <Button children="Create new project" variant="primary" />
            </div>
          </div>
          <div className="bottom-wrapper">
              <div className="bottom-wrapper-header">
                <p>Recent Projects</p>
                <Button children="All projects" variant="secondary" />
              </div>
              <div className="campaign-card-wrapper">
                  <CampaignCard campaign={campaigns[0]} />
                  <CampaignCard campaign={campaigns[1]} />
                  <CampaignCard campaign={campaigns[2]} />
                  <CampaignCard campaign={campaigns[3]} />
              </div>
          </div>

        </div>
        <div className="right-box">

        </div>
      </div>
 
  )
}
