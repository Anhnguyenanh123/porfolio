import { locations } from "#constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import { useRef } from "react";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const projects = locations.work?.children || [];

const Home = () => {
  const rootRef = useRef(null);
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProject = (project) => () => {
    setActiveLocation(project);
    openWindow("finder");
  };

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;
      const items = root.querySelectorAll(".folder");
      if (!items.length) return;
      Draggable.create(items, {
        type: "x,y",
        bounds: window,
        edgeResistance: 0.65,
      });
    },
    { scope: rootRef }
  );

  return (
    <section id="home" ref={rootRef}>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={handleOpenProject(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
