import { Data } from './data';
import { CalculateService } from './calculateService';
export class buildUrl {

  data: Data
  calculateService : CalculateService

  constructor(data:Data, service: CalculateService) {
    this.data = data  
    this.calculateService = service
  }
  
  build():string {
    const duration : number | null = this.calculateService.calculateDuration(this.data.timestamps);
    const median : number | null = this.calculateService.calculateMedian(this.data.timestamps);
    const name:string = this.data.name
    return `https://server/record?name=${name}&duration=${duration}0s&median=${median}`
  }

}