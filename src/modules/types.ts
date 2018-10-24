
export type Level = 'none'|'small' | 'medium' | 'large';
export type LevelX = 'none'|'small' | 'medium' | 'large' | 'xlarge';
export type LevelNode = {
    [key in Level] : number
}
export type LevelXNode = {
    [key in LevelX] : number
}
