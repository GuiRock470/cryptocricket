interface Color {
  bg: string;
  text: string;
}
  
export type RiskColors = {
  [key: number]: Color;
};