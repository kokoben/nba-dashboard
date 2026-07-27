import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { type Athlete } from '@/features/team/api';
import PlayerCard from '@/features/team/components/PlayerCard/PlayerCard';

const athlete: Athlete = {
  id: '1',
  fullName: 'Test Player',
  headshot: {
    href: 'https://a.espncdn.com/i/headshots/nba/players/full/5142621.png',
    alt: 'Test player image',
  },
  age: 42,
  dateOfBirth: '2007-02-01T08:00Z',
  birthPlace: {
    city: 'boon',
    state: 'docks',
    country: 'USA',
  },
  displayHeight: `6' 11"`,
  displayWeight: '240 lbs',
  jersey: 37,
  debutYear: 2022,
  position: {
    id: '1',
    abbreviation: 'C',
  },
  experience: {
    years: 1,
  },
  status: {
    name: 'Active',
  },
  contracts: [],
};

describe('PlayerCard', () => {
  test("renders the player's name and bio", () => {
    render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />);

    expect(screen.getByText('Test Player')).toBeInTheDocument;
    expect(screen.getByText('42')).toBeInTheDocument;
    expect(screen.getByText('February 1, 2007')).toBeInTheDocument;
    expect(screen.findByText(`6' 11"`)).toBeInTheDocument;
    expect(screen.findByText('240 lbs')).toBeInTheDocument;
    expect(screen.getByText('37')).toBeInTheDocument;
  });

  test('handles missing headshot or jersey data', () => {

  });

  test('clicking the "View Details" button calls the handler prop', async () => {
    const user = userEvent.setup();

  });

  test('clicking the "View Details" button links to the correct player route', async () => {
    const user = userEvent.setup();

  });

  test('clicking the "View Stats" button calls the handler prop', async () => {
    const user = userEvent.setup();

  });

  test('clicking the "View Stats" button links to the correct player route', async () => {
    const user = userEvent.setup();

  });
});