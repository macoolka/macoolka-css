import { media } from './helper';
describe('helper ', () => {

    it('media', () => {
        expect(media([{ width: 16 }, { width: 90 }, { width: 100 }])([40, 80, 120])).toEqual(
            {
                "selector":
                {
                    "@media screen and (max-width: 120em)": { "width": 100 },
                    "@media screen and (max-width: 80em)": { "width": 90 }
                },
                "width": 16
            }
        )
    });

})