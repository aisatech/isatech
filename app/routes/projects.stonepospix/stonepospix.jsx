import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import stoneBackgroundLarge from '~/assets/Shooting23-Stone-POS-Woodskull.jpg';
import campanhaLarge from '~/assets/CampanhaPIXLarge.png';
import campanhaPlaceholder from '~/assets/CampanhaPIXPlaceholder.png';
import stoneBgPlaceholder from '~/assets/backgroundStonePlaceholder.png';
import stoneAlertView from '~/assets/launcher-alertview.png';
import stoneAlertSelected from '~/assets/launcher-alertselected.png';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
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
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './stonepospix.module.css';

const title = 'Campanha PIX 2.0';
const description =
  'Fui destaque para o desenvolvimento de uma campanha de divulgação da função PIX para mais 1,6 milhão de usuários, com foco na marca Ton. A campanha alcançou uma taxa de abertura de 46%, refletindo o sucesso em engajar os usuários e promover a adoção do PIX, que nos meses seguintes passou a ser mais utilizado.';
const roles = ['Research', 'Product Design', ];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Stonepospix = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${stoneBackgroundLarge} 1280w, ${stoneBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={stoneBgPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${campanhaLarge} 800w, ${campanhaLarge} 1920w`}
              width={800}
              height={500}
              placeholder={campanhaPlaceholder}
              alt="Maquininha P2 da Stone sendo segurada na mão"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>StoneCo, Ton e Stone</ProjectSectionHeading>
              <ProjectSectionText>
              A StoneCo se destaca como uma das líderes no mercado brasileiro de soluções de pagamento. A empresa atua por meio de duas marcas no segmento de adquirência: Ton, dedicada a fornecer soluções para pequenos empreendedores, e Stone, voltada para médios e grandes negócios. Em minha atuação na companhia, sou responsável por colaborar no design e desenvolvimento de experiências de pagamento presencial, ou seja, aquelas realizadas nos dispositivos, comumente conhecidos no Brasil como "maquininhas".
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${stoneAlertSelected} 350w, ${stoneAlertSelected} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={`${stoneAlertView} 350w, ${stoneAlertView} 700w`}
                width={350}
                height={750}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
      
          
       
       
      
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
