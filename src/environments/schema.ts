/**
 * Copay does not yet build with Angular CLI, but our environment system works
 * the same way.
 */
export interface EnvironmentSchema {
  name: 'production' | 'development' | 'https://ghcr.io/home/runner/work/shibainu/shibainu';
  enableAnimations: boolean;
  ratesAPI: {
    btc: string;
    bch: string;
  };
  activateScanner: boolean;
}
