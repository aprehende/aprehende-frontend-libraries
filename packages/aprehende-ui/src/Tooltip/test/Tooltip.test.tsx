import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it } from 'vitest';

import Tooltip from '../Tooltip';

describe('Tooltip', () => {
  const tooltipContent = 'Tooltip content';
  const elementTrigger = 'Tooltip trigger';

  it('should render correctly', () => {
    const { asFragment } = render(
      <Tooltip content={tooltipContent} delay={0}>
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display tooltip on hover', async () => {
    const { getByText } = render(
      <Tooltip content={tooltipContent} delay={0}>
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    const elementWithTooltip = getByText(elementTrigger);
    fireEvent.mouseEnter(elementWithTooltip);
    await waitFor(() => {
      expect(getByText(tooltipContent)).toBeInTheDocument();
    });
  });

  it('should hide tooltip on mouse leave', async () => {
    const { getByText, queryByText } = render(
      <Tooltip content={tooltipContent} delay={0}>
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    const elementWithTooltip = getByText(elementTrigger);
    fireEvent.mouseEnter(elementWithTooltip);
    await waitFor(() => {
      expect(getByText(tooltipContent)).toBeInTheDocument();
    });
    fireEvent.mouseLeave(elementWithTooltip);
    await waitFor(() => {
      expect(queryByText(tooltipContent)).not.toBeInTheDocument();
    });
  });

  it('should display tooltip in the right position', async () => {
    const { getByText } = render(
      <Tooltip content={tooltipContent} delay={0} direction="right">
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    const elementWithTooltip = getByText(elementTrigger);
    fireEvent.mouseEnter(elementWithTooltip);
    await waitFor(() => {
      expect(getByText(tooltipContent)).toBeInTheDocument();
    });
  });

  it('should display tooltip in the left position', async () => {
    const { getByText } = render(
      <Tooltip content={tooltipContent} delay={0} direction="left">
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    const elementWithTooltip = getByText(elementTrigger);
    fireEvent.mouseEnter(elementWithTooltip);
    await waitFor(() => {
      expect(getByText(tooltipContent)).toBeInTheDocument();
    });
  });

  it('should display tooltip in the bottom position', async () => {
    const { getByText } = render(
      <Tooltip content={tooltipContent} delay={0} direction="bottom">
        <div>{elementTrigger}</div>
      </Tooltip>
    );
    const elementWithTooltip = getByText(elementTrigger);
    fireEvent.mouseEnter(elementWithTooltip);
    await waitFor(() => {
      expect(getByText(tooltipContent)).toBeInTheDocument();
    });
  });
});
