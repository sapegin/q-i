interface Options {
	maxItems?: number,
}

declare module 'q-i' {
	declare function print(object: any, options?: Options) : void;
	declare function stringify(object: any, options?: Options) : string;
}
