import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import backgroundBrh from '~/assets/background-brh.jpg';
import brhTelaLarge from '~/assets/brh-tela-large.png';
import brhBg from '~/assets/bg-brh-1.png';
import brhResponsive from '~/assets/responsive-light.png';
import brhLowPlaceholder from '~/assets/Brh-low.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import componentsBrhLight from '~/assets/componentslight.png';
import componentsBrhDark from '~/assets/componentsdark.png';
import newsBrh from '~/assets/noticias-bridgehub.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
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
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const Earth = lazy(() => import('./earth').then(module => ({ default: module.Earth })));
const EarthSection = lazy(() =>
  import('./earth').then(module => ({ default: module.EarthSection }))
);

const title = 'Uma ponte para investidores e startups';
const description =
  'Conduzi o processo de discovery do projeto, desenhei a interface e experiência da plataforma, e colaborei com a equipe no desenvolvimento do frontend, utilizando React e Next.js. Para garantir escalabilidade e consistência, documentamos e testamos os componentes isoladamente no Storybook. A plataforma possibilitou a captação de mais de R$ 8 milhões para startups e foi adquirida pelo Grupo BTG Pactual no ano de 2023.';
const roles = [
  'UX and UI Design',
  'Front End Development',
  'Design Concept',
];
const icons = ['nodejs'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundBrh}
          srcSet={`${backgroundBrh} 1080w, ${backgroundBrh} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          icons={icons}
          description={description}
          url="https://bridgehub.com.br/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${brhTelaLarge} 1280w, ${brhTelaLarge} 2560w`
                  : `${brhTelaLarge} 1280w, ${brhTelaLarge} 2560w`
              }
              width={1280}
              height={900}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Tela inicial para investidores na plataforma BridgeHub"
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Cenário</ProjectSectionHeading>
            <ProjectSectionText>
              Em 2022, o Grupo Voga criou a BridgeHub para ser uma 
              plataforma de equity crowfunding, criando uma experiência
              de investimento diferente para startups e investidores. 
              A ideia era economizar tempo dos usuários envolvidos,
              que antes precisavam participar de reuniões presenciais para investir
              ou levantar capital. 
              <br></br><br></br>
              O mercado era muito recente no Brasil, e ainda não haviam muitas
               referências neste ecossistema. Busquei referência nas também emergentes plataformas brasileiras, e nas já consolidadas plataformas estrangeiras.
            </ProjectSectionText>
          </ProjectTextRow> 
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={theme}
              srcSet={
                isDark
                  ? `${componentsBrhDark} 1024w, ${componentsBrhDark} 2048w`
                  : `${componentsBrhLight} 1024w, ${componentsBrhLight} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`Um compilado de ${theme} theme components da plataforma BridgeHub`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(theme)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Ferramentas e time</ProjectSectionHeading>
              <ProjectSectionText>
                Após validar os primeiros passos com um processo de Discovery, 
                desenvolvi os componentes e desenho das telas no Figma. Assim que concluí esta fase do projeto, me 
                incorporei ao time de desenvolvedores para realizar a construção do frontend, utilizando React e Next.js.
                Utilizamos o storybook para documentar e testar os componentes de forma isolada.
          
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${brhResponsive} 1280w, ${brhResponsive} 2560w`
                  : `${brhResponsive} 1280w, ${brhResponsive} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? brhLowPlaceholder
                  : brhLowPlaceholder
              }
              alt="Imagem de varios dispositivos com a aplicação aberta."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Processos e rotina</ProjectSectionHeading>
              <ProjectSectionText>
              Trabalhei por 13 meses neste projeto dentro de um time ágil de 
              quatro desenvolvedores, CTO e Product Manager. Seguimos metodologias como Scrum, com sprints e entregas contínuas. 
              Utilizamos Monday e Microsoft Teams para gerenciar backlog, priorizar tarefas de 
              forma estratégica e realizar nossas daily meetings. 
              <br></br><br></br>
              Essa experiência me proporcionou sólido conhecimento em metodologias ágeis, 
              forte senso de priorização e alto contexto de mercado financeiro, principalmente em renda variável e capital de risco.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${brhBg} 1280w, ${brhBg} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="Imagem de um astronauta orbitando a Terra. Fonte: NASA"
                sizes="1000vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Design Concept</ProjectSectionHeading>
                  <ProjectSectionText>
                  Houve a necessidade de traduzir o conceito de equity crowdfunding, ainda pouco explorado no Brasil, para um público mais amplo. Para isso, desenvolvi uma abordagem criativa, valendo-me de conceitos do espaço sideral para tornar o tema mais acessível. Ao mesmo tempo, me apropriei da tecnologia e inovação da engenharia espacial, traçando paralelos com as soluções que estávamos implementando no mercado financeiro. Essa estratégia não apenas facilitou a compreensão do público sobre um tema complexo, 
                  mas também reforçou o posicionamento inovador da empresa no setor.
              
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              {/*
                  <Image
                  raised
                  className={styles.video}
                  srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
                  width={1280}
                  height={800}
                  placeholder={videoSprMotionPlaceholder}
                  alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                 /> 

             */ }
       
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>

        {/*    
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
               <ProjectSectionHeading>
                  An extensible plugin ecosystem usable by everyone
                </ProjectSectionHeading>
                <ProjectSectionText>
                  The most powerful aspect of the platform is the ability to create custom
                  plugins for any content, whether it be a degree, course, lesson, screen,
                  or interactive component. Out of the box these can be made configurable
                  with minimal effort from developers. Learning designers can then edit
                  everything using a common configuration interface.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w`
                    : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w`
                    : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`
                }
                width={260}
                height={660}
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        */}
        <ThemeProvider theme="dark" data-invert>
          <Suspense>
            <Earth
              className={styles.earth}
              hideMeshes={useMemo(
                () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
                []
              )}
              position={useMemo(() => [0, 0, 0], [])}
              labels={useMemo(
                () => [
                  {
                    position: [0.54, 0.19, 0.18],
                    text: 'Pacific ring of fire',
                    hidden: true,
                  },
                  {
                    position: [0.47, -0.38, 0.04],
                    text: 'Ruapehu',
                    hidden: true,
                  },
                  {
                    position: [0.22, 0.44, -0.35],
                    text: 'St. Helens',
                    hidden: true,
                  },
                  {
                    position: [0.16, -0.06, 0.58],
                    text: 'Krakatoa',
                    hidden: true,
                  },
                  {
                    position: [0.11, 0.2, -0.56],
                    text: 'Parícutin',
                    hidden: true,
                  },
                  {
                    position: [0.52, 0.2, -0.23],
                    text: 'Kīlauea',
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.75, 0.24],
                    text: 'Mantle',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.55, 0.24],
                    text: 'Outer core',
                    delay: 800,
                    hidden: true,
                  },
                  {
                    position: [-0.24, 0.35, 0.24],
                    text: 'Inner core',
                    delay: 800,
                    hidden: true,
                  },
                ],
                []
              )}
              scale={0.6}
            >
              <EarthSection
                scrim
                animations={['0:loop']}
                camera={[0, 0, 1.5]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent>
                    <ProjectTextRow center>
                      <ProjectSectionHeading>
                      Uma expedição ao inexplorado
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                         Assim como a vastidão do universo nos desafia a conquistá-lo, 
                         o design deste produto reflete a jornada de conquista em um mercado inexplorado. 
                         O impacto dessa jornada se refletiu no crescimento do mercado de equity crowdfunding, 
                         evoluindo para um ecossistema onde os usuários podem até mesmo revender suas cotas, 
                        ampliando ainda mais as oportunidades de acesso e troca.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[0, 0, 2.4]}
                meshes={['Atmosphere', 'EarthFull']}
              />
              <EarthSection
                animations={['0:loop']}
                camera={[1.14, -1.39, 0.94]}
                meshes={['Atmosphere', 'EarthFull']}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="end" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Uma expedição dentro da Terra
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                       Fazendo uma nova analogia com o conceito de design usado no produto, 
                       é como se o usuário pudesse explorar 
                        o mercado na Terra ou fora dela.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.17, 0.69, -1.47]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                
                ]}
              >
                <ProjectSection>
                  <ProjectSectionContent width="xl">
                    <ProjectTextRow justify="start" width="s">
                      <ProjectSectionHeading level={4} as="h3">
                        Democratização dos investimentos de venture capital
                      </ProjectSectionHeading>
                      <ProjectSectionText>
                        A plataforma tornou este tipo de investimento acessível para qualquer pessoa. Com o mercado secundário, 
                        você consegue hoje adquirir frações de uma única cota, e ainda assim particiar de uma fatia do crescimento de uma startup.
                      </ProjectSectionText>
                    </ProjectTextRow>
                  </ProjectSectionContent>
                </ProjectSection>
              </EarthSection>
              <EarthSection
                animations={['0:loop']}
                camera={[1.81, 0.51, 0.43]}
                meshes={['Atmosphere', 'EarthFull']}
                labels={[
                ]}
              />
              <EarthSection
                scrimReverse
                animations={['0:loop']}
                camera={[0.37, 1.02, 1.84]}
                meshes={['Atmosphere', 'EarthFull']}
              />
            </Earth>
          </Suspense>
        </ThemeProvider>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Resultados</ProjectSectionHeading>
              <ProjectSectionText>
                As captações promovidas pelo BridgeHub foram um sucesso, ganhando destaque na mídia brasileira. 
                O projeto do Grupo Voga foi rapidamente adquirido pelo BTG Pactual, um dos maiores líderes do mercado financeiro.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${newsBrh} 1280w, ${newsBrh} 2560w`
                  : `${newsBrh} 1280w, ${newsBrh} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <svg
                width="1280"
                height="180"
                viewBox="0 0 1904 500"
                fill="currentColor"
                style={{ marginBottom: '2em' }}
              >
                <path d="M362.264 296.971l-40.327-111.396h-21.244l56.163 155.395h10.832l56.319-155.395h-21.368l-40.375 111.396zM840.01 185.575h-10.832L773.062 340.97h21.243l40.297-111.396 40.405 111.396h21.368L840.01 185.575zm-268.352 21.269c-15.462-15.537-34.111-23.305-55.961-23.305s-40.499 7.768-55.961 23.305c-15.463 15.536-23.202 34.273-23.202 56.226 0 21.953 7.739 40.69 23.202 56.226 15.462 15.537 34.111 23.305 55.961 23.305s40.499-7.768 55.961-23.305c15.463-15.536 23.202-34.273 23.202-56.226 0-21.953-7.739-40.69-23.202-56.226zm-14.25 98.19c-11.516 11.574-25.393 17.385-41.711 17.385-16.317 0-30.117-5.811-41.633-17.385-11.516-11.575-17.297-25.558-17.297-41.964s5.735-30.343 17.25-41.917c11.516-11.528 25.394-17.339 41.711-17.339 16.318 0 30.195 5.764 41.711 17.339 11.469 11.574 17.25 25.511 17.25 41.917 0 16.406-5.735 30.389-17.25 41.964h-.047.016zm175.25-40.613h20.016v55.248c-15.914 15.288-34.112 22.901-54.61 22.901-21.85 0-40.452-7.722-55.837-23.227-15.385-15.459-23.108-34.181-23.108-56.102 0-21.922 7.692-40.613 23.108-56.102 15.385-15.537 34.019-23.305 55.837-23.305 20.436 0 39.8 8.39 58.075 25.153l-14.981 13.704c-13.8-12.305-28.159-18.442-43.094-18.442-16.162 0-29.993 5.764-41.508 17.292-11.516 11.528-17.25 25.433-17.25 41.746 0 16.313 5.734 30.343 17.25 41.84 11.484 11.528 25.315 17.292 41.508 17.292 13.925 0 25.44-3.682 34.594-11.078v-46.92zM205.93 165.905h21.492l-70.74 174.878h-21.788l71.036-174.878zm44.166-32.083h21.493l-83.717 206.96h-21.788l84.012-206.96zm-135.34 126.684l-25.363-62.503H67.901l36.023 89.179 10.832-26.676zm25.672-9.959l-25.673 63.482 10.832 26.754 57.639-142.795h-21.461l-21.337 52.544v.015zM984.167 38.972h-4.223v396.663h4.223V38.972zm476.653 233.294c0 18.615-6.19 25.551-22.82 25.551-15.75 0-23.71-7.678-23.71-22.841v-9.259c0-18.146 6.79-25.55 23.35-25.55 16.57 0 23.16 7.113 23.16 25.389v6.726h.02v-.016zm-23.16-38.358c-20.47 0-29.99 10.114-29.99 31.825v59.07h6.46v-30.341c4.67 6.081 13.38 9.629 23.9 9.629 20.37 0 29.45-9.807 29.45-31.825v-6.726c0-21.905-9.19-31.648-29.82-31.648v.016zm87.97 49.988c0 10.162-5.26 13.937-19.36 13.937h-2.72c-13.7 0-19.55-4.452-19.55-14.84v-1.097c0-11.275 5.53-16.114 18.47-16.114h1.08c15.49 0 22.09 4.661 22.09 15.566v2.548h-.01zm-22.98-48.891h-17.51l-1.45 6.291h18.96c17.18 0 22.98 4.613 22.98 18.308v6.629c-4.29-4.306-11.9-6.484-22.65-6.484-17.13 0-25.45 7.275-25.45 22.195v1.097c0 14.018 8.26 21.115 24.55 21.115h4.35c17.01 0 25.65-7.114 25.65-21.115v-23.437c0-17.453-8.53-24.567-29.45-24.567m47.77 37.294v-5.807c0-18.599 6.35-25.18 24.27-25.18h15.12l1.45-6.291h-16.57c-21.37 0-30.88 9.695-30.88 31.471v5.807c0 21.76 9.53 31.47 30.88 31.47h15.31l1.46-6.291h-16.78c-17.46 0-24.28-7.065-24.28-25.195m145.96 4.532c0 16.195-5.06 21.373-20.8 21.373-15.75 0-20.47-5.388-20.47-21.373v-41.826h-6.64v41.826c0 19.905 7.6 27.664 27.07 27.664s27.27-8.001 27.27-27.664v-41.826h-6.46v41.826h.03zm-59.76-35.551l1.45-6.291h-28.87v-17.953l-6.64 1.193v61.49c0 17.517 6.56 24.034 24.2 24.034h9.52l1.21-6.291h-10.75c-13.3 0-17.55-4.226-17.55-17.389v-38.793h27.43zm145.41 62.828h6.46v-95.073h-6.46v95.073zm-422.71-31.648c0 14.082-4.93 18.421-19.16 18.421-15.99 0-19.17-5.533-19.17-21.857v-2.549c0-16.162 2.84-22.018 19.17-22.018 16.33 0 19.16 5.695 19.16 22.148v5.855zm-19.16-44.472c-27.38 0-39.94 11.534-39.94 37.891v4.032c0 25.002 10.93 37.132 36.63 37.132 8.22 0 16.46-1.484 22.29-6.145v3c0 14.082-6.14 18.711-20.48 18.711h-8.59c-4.93.097-7.16.968-10.11 5.823-24.66 39.052-67.48 62.925-114.16 62.925-74.44 0-135.03-60.634-135.03-135.14 0-74.507 60.57-135.141 135.03-135.141 52.29 0 99.88 30.309 122.14 77.49h6.21c-22.68-50.52-72.98-83.136-128.35-83.136-77.55 0-140.67 63.151-140.67 140.787 0 77.635 63.1 140.754 140.67 140.754 45.63 0 87.71-21.873 113.95-58.199h20.12c26.48 0 40.1-10.017 40.1-35.632V264.54c0-25.454-13.02-36.536-39.78-36.536m-152.42 16.469c14.36 0 19.45 5.695 19.45 22.615v6.291c0 16.469-5.09 22.147-19.74 22.147-14.65 0-19.76-5.694-19.76-22.308v-8.533c0-15.114 5.09-20.212 20.05-20.212zm-40.7-44.761v73.506c0 27.244 12.56 38.616 39.94 38.616 27.39 0 40.99-11.082 40.99-38.487v-7.033c0-25.76-11.67-38.326-37.1-38.326-8.06 0-16.91 1.645-22.89 6.291v-37.89l-20.94 3.306v.017zm142.85 47.6l3.43-16.759h-29.62v-22.905l-20.78 3.145v68.409c0 23.664 9.29 30.68 34.56 30.68h11.07l3.44-16.63h-13.03c-11.52 0-15.26-2.839-15.26-15.405v-30.551h26.19v.016zm472.35 36.584c0 10.017-5.48 13.937-19.55 13.937h-2.72c-13.57 0-19.36-4.452-19.36-14.84v-1.097c0-11.275 5.53-16.114 18.47-16.114h1.1c15.48 0 22.09 4.661 22.09 15.566v2.548h-.03zm-23.16-48.891h-17.49l-1.45 6.291h18.96c17.32 0 23.16 4.613 23.16 18.308v6.629c-4.31-4.306-11.9-6.484-22.65-6.484-17.13 0-25.45 7.275-25.45 22.195v1.097c0 14.018 8.21 21.115 24.39 21.115h4.35c17.13 0 25.82-7.114 25.82-21.115v-23.437c0-17.453-8.59-24.567-29.62-24.567" />
              </svg>
             
             
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
