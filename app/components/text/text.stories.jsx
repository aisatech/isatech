import { Text, TextSegment } from '~/components/text';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Text',
};

export const size = () => (
  <StoryContainer vertical>
    <Text size="xl">XLarge</Text>
    <Text size="l">Large</Text>
    <Text size="m">Medium</Text>
    <Text size="s">Small</Text>
  </StoryContainer>
);

export const weight = () => (
  <StoryContainer vertical>
    <Text weight="regular">Regular</Text>
    <Text weight="medium">Medium</Text>
    <Text weight="bold">Bold</Text>
  </StoryContainer>
);

export const align = () => (
  <StoryContainer vertical stretch>
    <Text align="start">Start</Text>
    <Text align="center">Center</Text>
  </StoryContainer>
);

export const mixedWeights = () => (
  <StoryContainer vertical>
    <Text as="p" size="m">
      Este é um texto com <TextSegment weight="bold">segmentos em negrito</TextSegment> dentro de um parágrafo.
    </Text>
    <Text as="p" size="m">
      Você pode ter <TextSegment weight="medium">medium weight</TextSegment>, <TextSegment weight="bold">bold</TextSegment> ou <TextSegment weight="regular">regular</TextSegment> no mesmo parágrafo.
    </Text>
    <Text as="p" size="l">
      Funciona com <TextSegment weight="bold">qualquer tamanho</TextSegment> também!
    </Text>
  </StoryContainer>
);
