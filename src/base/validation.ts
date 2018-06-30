/**
 * Valid CProp.
 *
 */
import { isObject, isArray } from 'mocoolka-fp/lib/predicate';
import { success, failure, Validation } from 'mocoolka-fp/lib/Validation';
import { filter } from 'mocoolka-fp/lib/Array';
import { Vertex, Graph, tsort } from '../base/tsort';
const getPropertyMap = (
    properties: { [name: string]: { [name: string]: any } }
): { [key: string]: any } => {
    const map: { [key: string]: any } = {};
    Object.keys(properties).forEach(a => {
        Object.keys(properties[a]).forEach(b => {
            map[`${a}__${b}`] = properties[a][b];
        });
    });
    return map;
};

const getKeyValueGraph = (isKeyValue: {  isKeyValue: (k: any, v: any) => boolean; }) => (
    map: { [key: string]: any }
): Graph => {
    const graph: Graph = {};
    const keys = Object.keys(map);
    function visit(vertex: Vertex, value: any): void {
        if (isObject(value)) {
            filter(Object.entries(value), ([k, v]) =>  isKeyValue.isKeyValue(k, v))
                .forEach(([k, v]) => {
                    const kv = `${k}__${v}`;
                    if (keys.includes(kv)) {
                        vertex.afters.push(kv);
                    } else {
                        visit(vertex, v);
                    }
                });
        }
        if (isArray(value)) {
            value.map((item) => visit(vertex, item));
        }
    }
    keys.forEach(a => {
        const vertex = (graph[a] = new Vertex(a));
        visit(vertex, map[a]);
    });
    return graph;
};
/**
 * Valid CProp.
 * Return failure when recursions node be found.
 * @param properties
 */
export const validCProps = (isKeyValue: {  isKeyValue: (k: any, v: any) => boolean; }) => (
    properties: { [name: string]: { [name: string]: any } }
): Validation<string, { [key: string]: any }[]> => {
    const map = getPropertyMap(properties);
    const graph = getKeyValueGraph(isKeyValue)(map);
    const { sorted, recursive } = tsort(graph);
    const recursions = Object.keys(recursive);
    if (recursions.length > 0) {
        return failure<string, { [key: string]: any }[]>(`recursions :${recursions.join(' ')}`);
    } else {
        return success<string, { [key: string]: any }[]>(sorted.reverse().map(a => ({ [a]: map[a] })));
    }
};
