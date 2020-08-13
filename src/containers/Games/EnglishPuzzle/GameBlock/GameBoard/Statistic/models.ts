export interface StatisticInfo {
  date: string;
  payload?: string | number;
}

export interface ActionStatistic {
  type: string;
  payload?: StatisticInfo;
}

export interface InitialStateStatisticPage {
  statOpen: boolean;
}

export interface InitialStateStatisticInfo {
  playedDates: StatisticInfo[],
  playedTimes: StatisticInfo[],
  playedLevels: StatisticInfo[],
  failed: StatisticInfo[],
  success: StatisticInfo[],
}
