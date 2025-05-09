import { GewinnbarerHase } from "./gewinnbarer-hase";
//     _    _                          _                  _           _   _
//    / \  | |__  ___ _ __   ___  __ _| | _____ _ __   __| | ___ _ __| | | | __ _ ___  ___
//   / _ \ | '_ \/ __| '_ \ / _ \/ _` | |/ / _ \ '_ \ / _` |/ _ \ '__| |_| |/ _` / __|/ _ \
//  / ___ \| |_) \__ \ | | |  __/ (_| |   <  __/ | | | (_| |  __/ |  |  _  | (_| \__ \  __/
// /_/   \_\_.__/|___/_| |_|\___|\__,_|_|\_\___|_| |_|\__,_|\___|_|  |_| |_|\__,_|___/\___|
export class AbsneakenderHase {
  constructor(
    private brokieMokies: string[],
    private gewinnbareHasen: GewinnbarerHase[],
  ) {}

  private mischeTeilnehmer(): string[] {
    const mokieBrokies = new Array<string>();
    const brokieMokiesCopy = [...this.brokieMokies];
    
    while (brokieMokiesCopy.length > 0) {
      const zufälligerHase = Math.random();
      const rangierterHase = Math.floor(
        zufälligerHase * brokieMokiesCopy.length,
      );
      const ausgesuchterHase = brokieMokiesCopy[rangierterHase];
      mokieBrokies.push(ausgesuchterHase);
      brokieMokiesCopy.splice(rangierterHase, 1);
    }
    
    return mokieBrokies;
  }

  private verteileGewinneAnTeilnehmer(mokieBrokies: string[]): Map<string, string> {
    const richieMichies = new Map<string, string>();
    const gewinnbareHasenCopy = [...this.gewinnbareHasen];
    
    while (gewinnbareHasenCopy.length > 0 && mokieBrokies.length > 0) {
      const gewonnenerHase = gewinnbareHasenCopy[0];
      const gewinnenderHase = mokieBrokies.shift();
      
      if (gewinnenderHase) {
        richieMichies.set(gewinnenderHase, gewonnenerHase.hase);
        
        if (gewonnenerHase.zahlenmässigerHase <= 1) {
          gewinnbareHasenCopy.shift();
        } else {
          gewinnbareHasenCopy[0].zahlenmässigerHase--;
        }
      }
    }
    
    return richieMichies;
  }

  public verteileGewinne(): Map<string, string> {
    const gemischteTeilnehmer = this.mischeTeilnehmer();
    return this.verteileGewinneAnTeilnehmer(gemischteTeilnehmer);
  }
}
