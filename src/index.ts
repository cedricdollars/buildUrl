import { buildUrl } from './buildUrl';
import { CalculateService } from './calculateService';
import { Data } from './data';

const data: Data = {
    name: 'Cédric',
    timestamps: [
        1508349990,
        1508350000,
        1508357300,
        1508367300,
        1508397300,
        1508407300,
    ]

}
const builder = new buildUrl(data, new CalculateService())
console.log(builder.build());