
import "./Statistics.css";

  type StatisticsProps = {
    title:string;
    value:number;
    icon:string;
  }
  const Statistics = ({title,value,icon}:StatisticsProps) => {
    return (
      <div className="statistics">
        <div className="values">
          <p className="icon">{icon}</p>
          <p className="title">{title}</p>
         <h2>{value}</h2>
        </div>
      </div>
    );
  };

export default Statistics;
