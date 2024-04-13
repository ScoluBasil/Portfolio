import { Timeline } from "antd";
import azureIcon from "../../assets/azure.svg";

export function Experience()
{ 
    return (
  <Timeline mode="left" style={{ marginTop: '1rem', marginLeft: '-42rem' }}>
  {/* <Timeline.Item label="2015-09-01 09:12:11">
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src={azureIcon} width={24} height={24} style={{ marginRight: '8px'}}  />
        <div>
          <strong>header</strong>
          <p>description</p>
        </div>
      </div>
    </Timeline.Item> */}
      <Timeline.Item label="2015-09-01 09:12:11">
        <div>
         
          Solve initial network problems
        </div>
      </Timeline.Item>
      <Timeline.Item>
        <div>
      
          Technical testing
        </div>
      </Timeline.Item>
      <Timeline.Item label="2015-09-01 09:12:11">
        <div>
       
        </div>
      </Timeline.Item>
    </Timeline>
    )
}