import { Timeline } from "antd";
import azureIcon from "../../assets/azure.svg";
import AT from "../../assets/AT.png";

interface TimelineItemProps {
  label: string;
  icon?: string;
  header: string;
  description: string;
}

function TimelineItem({ label, icon, header, description }: TimelineItemProps) {
  return (
    <Timeline.Item label={label}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {icon && <img src={icon}width={24} height={24} style={{ marginRight: '8px'}} alt={header} />}
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
      label: "2015-09-01 09:12:11",
      icon: AT,
      header: "Solve initial network problems",
      description: "Description of initial network problems solving."
    },
    {
      label: "2015-09-01 09:12:11",
      header: "Technical testing",
      description: "Description of technical testing."
    },
    {
      label: "2015-09-01 09:12:11",
      header: "Next step header",
      description: "Description of the next step."
    }
  ];
  
  return (
  <Timeline mode="left" style={{ marginTop: '1rem', marginLeft: '-42rem' }}>
  <Timeline.Item label="2015-09-01 09:12:11">
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <img src={azureIcon} width={24} height={24} style={{ marginRight: '8px'}}  />
        <div>
          <strong>header</strong>
          <p>description</p>
        </div>
      </div>
    </Timeline.Item>
    {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          label={item.label}
          icon={item.icon}
          header={item.header}
          description={item.description}
        />
      ))}
    </Timeline>
    )
}