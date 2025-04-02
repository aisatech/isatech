import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import brhPhone from '~/assets/brh-mobile.png';
import brhHome from '~/assets/brh-home-mobile.png';
import capaStone from '~/assets/Cover.png';
import capaRtg from '~/assets/site1.5a42175d.webp';
import stnPos from '~/assets/launcher-alertview.png';
import stnRecibos from '~/assets/Campanha-aberta.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Porfólio de ${config.name} — product designer e desenvolvedora júnior`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

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
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={2022}
        title="BridgeHub: uma ponte para investidores e startups"
        description="Desenhei a experiência e interface de um aplicativo de equity crowdfunding e 
        atuei no desenvolvimento do frontend em colaboração com a equipe. A plataforma possibilitou a 
        captação de mais de R$ 8 milhões para startups e foi adquirida pelo Grupo BTG Pactual."
        buttonText="Ver projeto"
        buttonLink="/projects/bridgehub"
        model={{
          type: 'phone',
          alt: 'Tela inicial para investidores na plataforma BridgeHub',
          textures: [
            {
              srcSet: `${brhPhone} 375w, ${brhPhone} 750w`,
              placeholder: sprTexturePlaceholder,
            },
      
              {
                srcSet: `${brhHome} 375w, ${brhHome} 750w`,
                placeholder: sliceTexturePlaceholder,
              },
          ],
        }}
      />
      <ProjectSummary

        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2024}
        title="Campanha PIX 2.0"
        description="Experiência para o recebimento e leitura de uma campanha de divulgação de nova funcionalidade, PIX 2.0. O projeto foi desenvolvido paras as marcas Ton e Stone e exibido para mais de 1,6 milhão de usuários."
        buttonText="Ver projeto"
        buttonLink="/projects/stonepospix"
        model={{
          type: 'credito',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${stnRecibos} 375w, ${stnRecibos} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },

            {
              srcSet: `${stnPos} 375w, ${stnPos} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
          ],
          
        }}
      />

<ProjectSummary
        id={"project-3"}
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={2023}
        title="Ready To Go"
        description="Na Ready To Go, contribuí para o design e desenvolvimento dos aplicativos Light Copy e Stories10x., ambos disponíveis nas lojas por uma assinatura anual. Também participei do design da página de vendas do curso Light Copy, que gerou uma taxa de conversão superior à média do mercado, ajudando a impulsionar os resultados da startup, que já faturou 120 milhões. "
        buttonText="Visite o site da empresa"
        buttonLink="https://readytogo.com.br"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${capaRtg} 800w, ${capaRtg} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

{/*
<ProjectSummary


id="project-4"
alternate
sectionRef={projectThree}
visible={visibleSections.includes(projectThree.current)}
index={2024}
title="Novo modelo de campanhas no POS"
description="Participei do desenvolvimento de um modelo unificado para a divulgação de campanhas no POS das marcas Ton e Stone, otimizando o uso de dados móveis e gerando economia para a companhia."
buttonText="Ver projeto"
buttonLink="/projects/stonepos"
model={{
  type: 'credito',
  alt: 'App login screen',
  textures: [
    {
      srcSet: `${stnRecibos} 375w, ${stnRecibos} 750w`,
      placeholder: gamestackTexturePlaceholder,
    },

    {
      srcSet: `${stnPos} 375w, ${stnPos} 750w`,
      placeholder: gamestackTexturePlaceholder,
    },
  ],
  
}}
/> */}

      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={2024}
        title="Otimização de artigos internos para treinamento de pessoal e LLM's"
        description="Protagonizei um projeto interno que consistiu em otimizar artigos para o treinamento de pessoal e também de LLM's da própria companhia. "
        buttonText="Entre em contato para saber mais"
        buttonLink="/projects/projetointerno"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${capaStone} 800w, ${capaStone} 1920w`,
              placeholder: sliceTexturePlaceholder,
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
