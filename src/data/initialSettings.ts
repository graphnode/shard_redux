
export interface Settings {
  animations: 'on' | 'off';
  updateRate: number;
}

const initialSettings : Settings = {
  animations: 'on',
  updateRate: 100,
};

export default initialSettings;
