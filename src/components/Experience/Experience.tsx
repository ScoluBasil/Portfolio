import { Timeline } from "antd";
import azureIcon from "../../assets/azure.svg";
import AT from "../../assets/AT.svg";
import OT from "../../assets/OT.svg";
import QB from "../../assets/QB.svg";
import XE from "../../assets/XE.svg";
interface TimelineItemProps {
  label: string;
  icon?: string;
  header: string;
  description: string;
  companyUrl?:string
}

function TimelineItem({ label, icon, header, description, companyUrl }: TimelineItemProps) {
  return (
    <Timeline.Item label={label}>
     <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {icon && 
        <a href={companyUrl} target="_blank">
        <img src={icon} width={48} height={48} style={{ marginRight: '8px'}} alt={header} />
        </a>}
        <div>
          <strong>{header}</strong>
          <p>{description}</p>
        </div>
      </div>
    </Timeline.Item>
  );
}
export function Experience()
{ 
  const timelineItems: TimelineItemProps[] = [
    {
      label: "May 2022 - Present",
      icon: QB,
      header: "Senior Software Engineer",
      description: "QBurst | Full-time | Kochi, Kerala, India",
      companyUrl:"https://www.qburst.com/en-in/"
    },
    {
      label: "Mar 2022 - May 2022",
      icon: XE,
      header: "Associate Software Engineer",
      description: "Xerox | Full-time | Kochi, Kerala, India",
      companyUrl:"https://www.xerox.com/en-us"
    },
    {
      label: "Nov 2018 - Feb 2022",
      icon: AT,
      header: ".Net Developer",
      description: "Apps Team Technologies, Pvt Ltd | Full-time | Kochi, Kerala, India",
      companyUrl:"https://appsteamtechnologies.com/"
    },
    {
      label: "Aug 2018 - Oct 2018",
      icon: OT,
      header: "Internship Trainee",
      description: "One Team Solutions Edtech Pvt Ltd | Full-time | Kochi, Kerala, India",
      companyUrl:"https://oneteamsolutions.in/"
    }
  ];
  
  return (
    <Timeline mode="left" style={{ marginTop: '1rem', marginLeft: '-42rem' }}>
      {timelineItems.map((item) => (TimelineItem(item)))}
    </Timeline>
    )
}