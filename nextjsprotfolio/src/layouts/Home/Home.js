import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import davista from 'assets/davista.png';
import brightside from 'assets/brightside.png';
import sedgis from 'assets/sedgis.png';

const disciplines = [
  'Front End Developer',
  'Game Developer',
  'Video Editor',
  'Graphic Designer',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta title="Home" description="Portfolio of Ian Gabriel Agujitas" />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Davista: A Nano Racing Game Inspired by Davao City Tourist Spot"
        description="The games objective is to create an engaging experience that promotes tourism in Davao City. It aims to familiarize tourists with the citys popular landmarks, providing historical information and trivia along the way."
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Davista',
          textures: [
            {
              srcSet: [davista, davista],
              placeholder: davista,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Web-Based Sales and Inventory Management System for Brightside Party Needs"
        description="The proposed system will focus on the development of an inventory management system that will automate manual transactions and give the shop easy access to find their records that will provide our system with all of the sales and inventory transactions. "
        buttonText="Confidential Project"
        model={{
          type: 'laptop2',
          alt: 'Brightside',
          textures: [
            {
              srcSet: [brightside, brightside],
              placeholder: brightside,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Socio-Economic Database with Geographic Information System"
        description="The Socio-Economic Database with Geographic Information System (GIS) is a comprehensive tool that combines socio-economic data with spatial information. It enables users to analyze and visualize data related to various economic factors, demographics, and geographical features."
        buttonText="Confidential Project"
        // buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Sedgis',
          textures: [
            {
              srcSet: [sedgis, sedgis],
              placeholder: sedgis,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
