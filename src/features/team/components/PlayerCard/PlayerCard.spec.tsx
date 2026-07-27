import { describe, expect, test, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
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
    city: 'Boon',
    state: 'Docks',
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
  afterEach(() => {
    cleanup();
  });

  test("renders the player's name and bio", () => {
    render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />);

    const headshotImg = screen.getByRole('img', {
      name: athlete.headshot!.alt,
    });

    expect(headshotImg).toHaveAttribute('src', athlete.headshot!.href);
    expect(screen.getByText('Test Player')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('February 1, 2007')).toBeInTheDocument();
    expect(screen.getByText(`6' 11"`)).toBeInTheDocument();
    expect(screen.getByText('240 lbs')).toBeInTheDocument();
    expect(screen.getByText('37')).toBeInTheDocument();
  });

  test('handles missing headshot, jersey, or birthplace data', () => {
    const localAthlete = { ...athlete };
    localAthlete.headshot = undefined;
    localAthlete.jersey = undefined;

    const { rerender } = render(<PlayerCard
      athlete={localAthlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByText('Headshot Placeholder')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('N/A')).toBeInTheDocument();
    expect(screen.getByText('Boon,')).toBeInTheDocument();
    expect(screen.getByText('Docks')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();

    localAthlete.headshot = {
      href: 'https://a.espncdn.com/i/headshots/nba/players/full/5142621.png',
      alt: 'Test player image',
    };
    localAthlete.jersey = 37;

    localAthlete.birthPlace = {};

    rerender(<PlayerCard
      athlete={localAthlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByText('N/A')).toBeInTheDocument();
  });

  test('clicking the "View Details" button calls the handler prop', async () => {
    const user = userEvent.setup();
    const viewDetails = vi.fn();

    render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={viewDetails}
      viewStats={vi.fn()}
    />)

    await user.click(screen.getByRole('button', {
      name: `View details for ${athlete.fullName}`,
    }));

    expect(viewDetails).toHaveBeenCalledOnce();

  });

  test('clicking the "View Stats" button calls the handler prop', async () => {
    const user = userEvent.setup();
    const viewStats = vi.fn();

    render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={viewStats}
    />)

    await user.click(screen.getByRole('button', {
      name: `View stats for ${athlete.fullName}`,
    }));

    expect(viewStats).toHaveBeenCalledOnce();
  });

  test('view details panel is expanded prop being true sets aria-expanded attribute', () => {
    const { rerender } = render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByRole('button', {
      name: `View details for ${athlete.fullName}`,
    })).toHaveAttribute('aria-expanded', 'false');

    rerender(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={true}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByRole('button', {
      name: `View details for ${athlete.fullName}`,
    })).toHaveAttribute('aria-expanded', 'true');
  })

  test('view stats panel is expanded prop being true sets aria-expanded attribute', () => {
    const { rerender } = render(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={false}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByRole('button', {
      name: `View stats for ${athlete.fullName}`,
    })).toHaveAttribute('aria-expanded', 'false');

    rerender(<PlayerCard
      athlete={athlete}
      playerPanelIsExpanded={false}
      playerStatsPanelIsExpanded={true}
      viewDetails={vi.fn()}
      viewStats={vi.fn()}
    />)

    expect(screen.getByRole('button', {
      name: `View stats for ${athlete.fullName}`,
    })).toHaveAttribute('aria-expanded', 'true');
  })
});
