import { LOC } from './parse';
export declare class Program {
    segments: CodeSegment[];
    kind: "program";
    constructor(segments: CodeSegment[]);
}
export declare type CodeSegment = CodeText | JSXElement;
export declare class CodeText {
    readonly text: string;
    readonly loc: LOC;
    kind: "code";
    constructor(text: string, loc: LOC);
}
export declare class EmbeddedCode {
    readonly segments: CodeSegment[];
    kind: "embeddedcode";
    constructor(segments: CodeSegment[]);
}
export declare type JSXProperty = JSXStaticProperty | JSXDynamicProperty | JSXStyleProperty | JSXSpreadProperty;
export declare type JSXContent = JSXElement | JSXComment | JSXText | JSXInsert;
export declare enum JSXElementRole {
    HTML = 0,
    SVG = 1,
    SubComponent = 2,
}
export declare class JSXElement {
    readonly tag: string;
    readonly properties: JSXProperty[];
    readonly references: JSXReference[];
    readonly functions: JSXFunction[];
    readonly content: JSXContent[];
    readonly role: JSXElementRole;
    readonly loc: LOC;
    kind: "element";
    constructor(tag: string, properties: JSXProperty[], references: JSXReference[], functions: JSXFunction[], content: JSXContent[], role: JSXElementRole, loc: LOC);
}
export declare class JSXText {
    readonly text: string;
    kind: "text";
    constructor(text: string);
}
export declare class JSXComment {
    readonly text: string;
    kind: "comment";
    constructor(text: string);
}
export declare class JSXInsert {
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "insert";
    constructor(code: EmbeddedCode, loc: LOC);
}
export declare class JSXStaticProperty {
    readonly name: string;
    readonly value: string;
    kind: "staticprop";
    constructor(name: string, value: string);
}
export declare class JSXDynamicProperty {
    readonly name: string;
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "dynamicprop";
    constructor(name: string, code: EmbeddedCode, loc: LOC);
}
export declare class JSXSpreadProperty {
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "spread";
    constructor(code: EmbeddedCode, loc: LOC);
}
export declare class JSXStyleProperty {
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "style";
    name: string;
    constructor(code: EmbeddedCode, loc: LOC);
}
export declare class JSXReference {
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "reference";
    constructor(code: EmbeddedCode, loc: LOC);
}
export declare class JSXFunction {
    readonly code: EmbeddedCode;
    readonly loc: LOC;
    kind: "function";
    constructor(code: EmbeddedCode, loc: LOC);
}
