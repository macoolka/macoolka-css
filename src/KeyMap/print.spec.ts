import { nodeToStringGetter } from './print';
const p1 = {
    color: 'red',
    marginTop: '12px',
    marginLeft: '1px',
};
const selector =
{
    '$:hover': {
        color: 'green',
        marginTop: '20px',
        marginLeft: '21px',
    },
    '$:focus': {
        color: 'blue',
        marginTop: '2px',
        marginLeft: '3px',
    }
}

describe('css print', () => {
    it('commonToStringGetter', () => {
        expect(nodeToStringGetter<any>().get({...p1,selector})).toMatchSnapshot();
    });
});