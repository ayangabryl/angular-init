/* eslint-disable react/no-unescaped-entities */
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import backgroundSpr from 'assets/davistatwo.png';
import davista from 'assets/davista.png';
import beta from 'assets/beta.jpg';
import trailer from 'assets/trailer.mp4';
import davistabg from 'assets/davista3.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';

const title = 'Davista: A Nano Racing Game Inspired by Davao City Tourist Spot';
const description =
  'The games objective is to create an engaging experience that promotes tourism in Davao City. It aims to familiarize tourists with the citys popular landmarks, providing historical information and trivia along the way.';
const roles = ['Unreal Engine 5', 'Blender', 'Photoshop'];

export const SmartSparrow = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSpr.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://ayangabryl.com/Davista/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={isDark ? [davista, davista] : [davista, davista]}
              placeholder={isDark ? davista : davista}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Main Objective</ProjectSectionHeading>
            <ProjectSectionText>
              The main objective of this study is to develop a racing game that promotes
              and markets Davao City tourism and provides a new way of entertainment
              through gamification, and since it offers experiences and knowledge,
              gamification in the tourist sector may improve the interest of some visitors
              in the place.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={isDark ? [beta, beta] : [beta, beta]}
              placeholder={isDark ? beta : beta}
              alt="User Testing in Tourism"
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Beta Test</ProjectSectionHeading>
              <ProjectSectionText>
                The beta testing of the game "DaVista: A Nano Racing Game Inspired by
                Davao City Tourist Spots Using Unreal Engine 5" was conducted among 106
                participants, consisting of 103 millennials and 3 staff from the Davao
                City Tourism department. The beta testing aimed to evaluate the
                functionality, reliability, and overall performance of the game through a
                combination of functional and nonfunctional criteria.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.3}
            backgroundElement={
              <Image
                srcSet={[
                  { src: trailer, width: 1280 },
                  { src: trailer, width: 2560 },
                ]}
                placeholder={davistabg}
                alt="davista"
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns>
              <ProjectSectionContent>
                {/* <Image
                  raised
                  className={styles.video}
                  srcSet={[
                    { src: videoSprMotion, width: 1280 },
                    { src: videoSprMotionLarge, width: 2560 },
                  ]}
                  placeholder={videoSprMotionPlaceholder}
                  alt="Trailer."
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                /> */}
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>
                Project Developer and Designers
              </ProjectSectionHeading>
              <ProjectSectionText>
                Ian Gabriel Agujitas, John Charles Frederick Mamanao, Nikko Dacara, Louie
                Jay Gilves, Wesley Keith Lotino
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
