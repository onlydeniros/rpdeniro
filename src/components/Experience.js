import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "./ExperienceStyles.css";

function Experience() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#73bbdb", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  #73bbdb" }}
        date="2014 - 2018"
        iconStyle={{ background: "#73bbdb", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Creekside High School
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Saint Johns, FL</h4>
        <p className="pColor">
          Men's Basketball Team 2015-2018, Track & Field 2016-2018, Received
          charcter count award and member of Chick-fil-A Leader Academy Club.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#73bbdb", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #73bbdb" }}
        date="2018 - 2021"
        iconStyle={{ background: "#73bbdb", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Florida State College of Jacksonville
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jacksonville, FL</h4>
        <p className="pColor">
          Men's Basketball Team 2018-2019, Graduated with AA in Information Technology.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#73bbdb", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #73bbdb" }}
        date="2022"
        iconStyle={{ background: "#73bbdb", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UCF Coding Boot Camp
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
        <p className="pColor">
          Rigorous boot camp curriclum delivered through live online interactive
          classes, time-senstive projects based on the in demand
          technologies/frameworks used in today's industry. Led by vetted senior
          software engineer instructor which taught us how to successfully
          communicate coding concepts as well 1-on-1 mentoring throughout the
          course.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#73bbdb", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #73bbdb" }}
        date="2022 - 2024"
        iconStyle={{ background: "#73bbdb", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          University of Central Florida
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Orlando, FL</h4>
        <p className="pColor">Pursuing my Bachelors in Infromation Technology.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
