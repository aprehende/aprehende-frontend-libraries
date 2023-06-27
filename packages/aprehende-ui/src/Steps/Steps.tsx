import { BsFillCheckCircleFill } from 'react-icons/bs';

import { Container, StepItem, StepTitle } from './Steps.styles';
interface StepItem {
  title: string;
}

interface StepsProps {
  current: number;
  items: Array<StepItem>;
}

const Steps: React.FC<StepsProps> = ({ items, current }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <StepItem
          key={index}
          done={index + 1 < current}
          current={current === index + 1}
        >
          {index + 1 < current && <BsFillCheckCircleFill color="#0984e3" />}
          <StepTitle>{item.title}</StepTitle>
        </StepItem>
      ))}
    </Container>
  );
};

export default Steps;
