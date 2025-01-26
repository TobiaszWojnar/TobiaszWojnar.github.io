export type TimelineContextType = {
  zoomLvl: number;
  startDate?: number;
  endDate?: number;
};

export type ModalContextType = {
  detailedView: any;
  setDetailedView: React.Dispatch<React.SetStateAction<any>>;
};

export type GenericEventType = {
  title: string;
  label: string;
};

export type EventType = GenericEventType & {
  icon: string;
  year: number;
  shortDescription: string;
  longDescription: string;
  wikiLink?:string;
};

export type EventDataType = EventType & {
  tags: string[];
  colorSet?: string;
};

export type EventPropType = EventType & {
  xOffset: number;
  yOffset: number;
  color?: string;
};

export type TimePeriodDataType = GenericEventType & {
  startDate: number;
  endDate: number;
  tags: string[];
  colorSet?: string;
};

export type TimePeriodPropType = GenericEventType & {
  xOffset: number;
  widthH: number;
  color: string;
  horizontal?: boolean;
};
