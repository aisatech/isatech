
import stoneBackgroundLarge from '~/assets/Shooting23-Stone-POS-Woodskull.jpg';
import campanhaPlaceholder from '~/assets/CampanhaPIXPlaceholder.png';
import campanhaAntes from '~/assets/Campanha-aberta.png';
import stoneBgPlaceholder from '~/assets/backgroundStonePlaceholder.png';
import stoneAlertView from '~/assets/launcher-alertview.png';
import novaCampanha from '~/assets/Nova-campanha.png';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
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

const title = 'Template Global de Campanhas';
const description =
  'Fui destaque para o desenvolvimento de um template para a divulgação das campanhas e informes para os clientes Ton e Stone, com o objetivo de reduzir consumo de dados móveis e otimizar o desempenho das campanhas nas maquininhas de diversos modelos e sistemas embarcados.';
const roles = ['UI/UX Design', 'Product Design', ];

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
     
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Problemas</ProjectSectionHeading>
              <ProjectSectionText>
             A experiência de campanhas anteriormente era onerosa para a companhia, havia um gasto milionário com excesso em dados móveis e o desempenho de hardware era prejudicado em alguns modelos, o que impactava negativamente a experiência do usuário e a eficácia das campanhas. 
             Havia um problema de engenharia também, pois a falta de padronização e a necessidade de criar campanhas personalizadas para cada cenário resultava em um processo ineficiente e demorado, consumindo recursos valiosos da equipe de desenvolvimento.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={`${campanhaAntes} 350w, ${campanhaAntes} 700w`}
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
       <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Solução</ProjectSectionHeading>
              <ProjectSectionText>
             Definimos um template global de campanhas, que padroniza a estrutura e o design das campanhas para os clientes Ton e Stone. O template é otimizado para reduzir o consumo de dados móveis e melhorar o desempenho em uma ampla variedade de dispositivos, garantindo uma experiência consistente e eficiente para milhões de usuários.
             Além do design, foi pensado em uma estrutura de desenvolvimento que permitisse a fácil implementação e manutenção do template, facilitando a criação de campanhas para diferentes cenários sem a necessidade de desenvolver cada uma do zero. 
             A redução no consumo de dados móveis para a companhia era uma das metas do trimestre (Q2 - 2024), por isso foi um requisito tão importante para esse projeto.
             Os impactos esperados incluem uma redução significativa no custo do contrato de dados móveis excedentes, que era um gasto milionário.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
   <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${novaCampanha} 800w, ${novaCampanha} 1920w`}
              width={800}
              height={500}
              placeholder={campanhaPlaceholder}
              alt="Design da nova campanha exibido no Figma"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

      <Footer />
    </Fragment>
  );
};
