import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="h-auto w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;