export class Vertex {
    public afters: string[] = [];
    constructor(public id: string) { }
}

export type Graph = { [key: string]: Vertex };

/** topological sort */
export const tsort = (graph: Graph): { sorted: string[]; recursive: { [key: string]: true } } => {
    const sorted: string[] = [];
    const visited: { [key: string]: true } = {};
    const recursive: { [key: string]: true } = {};
    const visit = (id: string, ancestors: any) => {
        if (visited[id]) {
            return;
        }

        const vertex = graph[id];

        if (!Array.isArray(ancestors)) {
            ancestors = [];
        }

        ancestors.push(id);
        visited[id] = true;

        vertex.afters.forEach(afterId => {
            if (ancestors.indexOf(afterId) >= 0) {
                recursive[id] = true;
                recursive[afterId] = true;
            } else {
                visit(afterId, ancestors.slice());
            }
        });

        sorted.unshift(id);
    };
    Object.keys(graph).forEach(visit);

    return {
        sorted: sorted.filter(id => !recursive.hasOwnProperty(id)),
        recursive,
    };
};
