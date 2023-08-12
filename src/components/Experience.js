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
        contentStyle={{ background: "black", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2014 - 2018"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Creekside High School
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Saint Johns, FL</h5>
        <p className="pColor">
          Men's Basketball Team 2015-2018, Track & Field 2016-2018, Received
          charcter count award and member of Chick-fil-A Leader Academy Club.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2018 - 2021"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Florida State College of Jacksonville
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Jacksonville, FL</h5>
        <p className="pColor">
          Men's Basketball Team 2018-2019, Graduated with AA in Information
          Technology.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2022"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          UCF Coding Boot Camp
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Orlando, FL</h5>
        <p className="pColor">
          Enrolled into a rigorous boot camp curriclum delivered through live
          online interactive classes, time-senstive projects based on the in
          demand technologies/frameworks used in today's industry. Led by vetted
          senior software engineer instructor which taught us how to
          successfully communicate coding concepts as well 1-on-1 mentoring
          throughout the course.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2022 - Present"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          University of Central Florida
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Orlando, FL</h5>
        <p>
          Upon enrollment at The University of Central Florida, I became a
          member of the club known as 'Knight Hacks,' where I assumed the role
          of Workshop Director.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="2023 - Present"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Alpha Kappa Psi Professional Buisness Fraternity
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Orlando, FL</h5>
        <p>
          Became a part of Alpha Kappa Psi in early 2023, acknowledged as a
          leading cultivator of principled business leaders • Oversaw social
          media profiles, newsletters, and various communication platforms to
          ensure members and the wider audience stayed updated • Devised and
          implemented communication tactics aimed at elevating our fraternity's
          standing and perception.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "black", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="Aug 2023"
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          IT Concepts & Programming Instructor
        </h3>
        <h5 className="vertical-timeline-element-subtitle">Valencia Community College - Orlando, FL</h5>
        <p>
          Demonstrated a profound grasp of essential IT principles, data
          structures, software methodologies, and optimal approaches. I've
          adeptly conveyed intricate IT ideas to a wide range of individuals,
          spanning from novices to those at an advanced level. I've triumphantly
          led a group of 15 students through practical coding exercises and
          projects, nurturing their programming and problems-solving abilities.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Experience;
